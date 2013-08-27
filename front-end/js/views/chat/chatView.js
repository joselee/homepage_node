define(
    [
        "backbone.marionette",
        "hbs!templates/chatViewTemplate",
        "views/chat/messageItemView"
    ],
    function ChatView(Marionette, ChatViewTemplate, MessageItemView){
        var ChatView = Marionette.ItemView.extend({
            className: "ChatView",
            template: ChatViewTemplate,
            author: null,
            iosocket: null,
            initialize: function(){
                _.bindAll(this);
            },
            onShow: function(){
                var self = this;
                this.iosocket = io.connect();
                var textBox = $("#tbChatInput", this.$el);

                this.iosocket.on("updateChat", this.appendMessage);
                this.iosocket.on("personLeaving", this.joinLeaveBoadcast);
                this.iosocket.on("connected", function(guestName){
                    self.author = guestName;
                });

                textBox.on("keydown", function(e){
                    if(e.keyCode === 13){
                        var message = textBox.val();
                        
                        if(message.toLowerCase() === "clear()"){
                            $("#chatContent").children().remove();
                            textBox.val('');
                            return false;
                        }

                        var data = { author: self.author, message: message };
                        self.iosocket.emit('sendChat', data);
                        textBox.val('');
                        return false;
                    }
                });

                this.changeNameBindings();
            },
            joinLeaveBoadcast: function(message){
                var broadcast = {author: message, message: ""};
                this.appendMessage(broadcast);
            },
            appendMessage: function(message){
                var content = $("#chatContent", this.$el);
                var messageModel = new Backbone.Model(message);
                var messageView = new MessageItemView({model: messageModel});
                content.append(messageView.el);
                content.scrollTop(content[0].scrollHeight);
            },
            changeNameBindings: function(){

                $("#btnChangeName", this.$el).on("click", function(){
                    $("#tbChangeName", self.$el).animate({width: 'toggle'});
                    self.author = $("#tbChangeName", self.$el).val();
                });
            },
            onBeforeClose: function(){
                this.iosocket.emit('closeChat', this.author);
                this.iosocket.removeListener("updateChat", this.appendMessage);
                this.iosocket.removeListener("personLeaving", this.joinLeaveBoadcast);
            }
        });

        return new ChatView();
    }
);