define(
    [
        "backbone.marionette",
        "hbs!templates/localStorageViewTemplate"
    ],
    function LocalStorageView(Marionette, LocalStorageViewTemplate){
        var LocalStorageView = Marionette.ItemView.extend({
            className: "localStorageView",
            template: LocalStorageViewTemplate
        });

        return new LocalStorageView();
    }
);