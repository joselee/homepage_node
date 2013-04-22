
requirejs.config({
    paths: {
		jquery                          : "libs/jquery-1.9.1",
		backbone                        : "libs/backbone-0.9.10",
		"backbone.eventbinder"          : "libs/backbone.eventbinder",
        "backbone.wreqr"                : "libs/backbone.wreqr-0.1.1",
        "backbone.babysitter"           : "libs/backbone.babysitter-0.0.4",
		"backbone.marionette"           : "libs/backbone.marionette-1.0.0-rc6",
		underscore                      : "libs/underscore-1.3.3-patched",
		"Handlebars"                    : "libs/handlebars-1.0.0.rc.3-patched",
		hbs								: "libs/hbs-0.4.0-patched",
		json2                           : "libs/json2-patched",
		i18nprecompile                  : "libs/i18nprecompile",
		"backbone.marionette.handlebars": "libs/backbone.marionette.handlebars-0.2.0",
		"juissi"						: "libs/juissi.swipe",
		"vent"							: "vent",
        "moment"                        : "libs/moment.min",
        "socket.io"                     : "libs/socket.io"
    },
    hbs: {
        disableI18n: true
    },
	shim: {
		backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "juissi": {
        	deps: ["jquery"],
        	exports: "Conmio"
        },
        moment: {
            exports: "moment"
        },
        "socket.io": {
            exports: "socket.io"
        }
    },
    deps: ["backbone.marionette.handlebars", "juissi", "moment", "socket.io"]
});