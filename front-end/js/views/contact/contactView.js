define(
    [
        "backbone.marionette",
        "hbs!templates/contactViewTemplate"
    ],
    function ContactView(Marionette, ContactViewTemplate){
        var ContactView = Marionette.ItemView.extend({
            className: "contactView",
            template: ContactViewTemplate
        });

        return new ContactView();
    }
);