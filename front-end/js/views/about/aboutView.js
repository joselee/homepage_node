define(
    [
        "backbone.marionette",
        "hbs!templates/aboutViewTemplate"
    ],
    function AboutView(Marionette, AboutViewTemplate){
        var AboutView = Marionette.ItemView.extend({
            className: "aboutView",
            template: AboutViewTemplate
        });

        return new AboutView();
    }
);