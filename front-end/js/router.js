define(
    [
		"backbone.marionette",
		"controller"
	],
    function(Marionette, Controller) {
        "use strict";    
        
		var AppRouter = Marionette.AppRouter.extend({
            controller: Controller,
            appRoutes: {
                "": "home",
                "mySQL": "personList",
				"profile/:personid" : "profile",
                "localStorage": "localStorage",
                "chat": "chat",
                "about": "about",
                "contact": "contact"
            },
            start: function() {
                Backbone.history.start();
            }
        });
        return new AppRouter();
    }
);