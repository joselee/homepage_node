/* This is the outtermost layout of the page.
 This layout gets appended directly to the body. */

define(
    [
        "backbone.marionette",
        "hbs!templates/mainLayoutTemplate",
        "views/common/headerView",
        "views/home/homeView",
        "views/personlist/personsCollectionView",
        "views/profile/profileCollectionView",
        "views/localStorage/localStorageView",
        "views/chat/chatView",
        "views/about/aboutView",
        "views/contact/contactView",
		"vent"
    ],
    function MainLayout(
		Marionette,
		MainLayoutTemplate,
		headerView,
        homeView,
		personsCollectionView,
        ProfileCollectionView,
        localStorageView,
        chatView,
        aboutView,
        contactView,
		Vent
		) {
		"use strict";
		
        var MainLayout = Marionette.Layout.extend({
            template:MainLayoutTemplate,
            className: "mainLayout",
            regions:{
                headerRegion:"#headerRegion",
                mainContentRegion:"#mainContentRegion"
            },
			initialize: function(){
				_.bindAll(this);
			},
            onShow:function () {
                this.headerRegion.show(headerView);
            },
			showHome: function(){
				this.mainContentRegion.show(homeView);
			},
            showPersonList: function(){
                this.mainContentRegion.show(personsCollectionView);
            },
			showProfileCarousel: function(profileId){
                var profileCollectionView = new ProfileCollectionView({profileId:profileId});
                this.mainContentRegion.show(profileCollectionView);
			},
            showLocalStorage: function(){
                this.mainContentRegion.show(localStorageView);
            },
            showChat: function(){
                this.mainContentRegion.show(chatView);
            },
            showAbout: function(){
                this.mainContentRegion.show(aboutView);
            },
            showContact: function(){
                this.mainContentRegion.show(contactView);
            }
        });

        var mainLayout = new MainLayout();
        mainLayout.listenTo(Vent, "show:home", mainLayout.showHome);
		mainLayout.listenTo(Vent, "show:personList", mainLayout.showPersonList);
        mainLayout.listenTo(Vent, "show:profile", mainLayout.showProfileCarousel);
		mainLayout.listenTo(Vent, "show:localStorage", mainLayout.showLocalStorage);
        mainLayout.listenTo(Vent, "show:chat", mainLayout.showChat);
        mainLayout.listenTo(Vent, "show:about", mainLayout.showAbout);
		mainLayout.listenTo(Vent, "show:contact", mainLayout.showContact);

        return mainLayout;
    }
);
