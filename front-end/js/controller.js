define(
    [
        "backbone",
		"vent"
    ],
    function(Backbone, Vent) {
        "use strict";

        var controller =
            _.bindAll({
                home: function() {
                    Vent.trigger("show:home");
                },
                personList: function() {
                    Vent.trigger("show:personList");
                },
                profile: function(profileId) {
                    Vent.trigger("show:profile", Number(profileId));
				},
                localStorage: function(){
                    Vent.trigger("show:localStorage");
                },
                chat: function(){
                    Vent.trigger("show:chat");
                },
                about: function(){
                    Vent.trigger("show:about");
                },
                contact: function(){
                    Vent.trigger("show:contact");
                }
            });
        _.extend(controller, Backbone.Events);

        return controller;
    }
);