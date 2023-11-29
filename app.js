/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyApp.Application',

    name: 'MyApp',

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],

    // The name of the initial view to create.
    //mainView: 'MyApp.view.main.Main'
    
    launch: function() {
        this.showLogin();
    },
    showLogin: function() {
        let win = Ext.create('MyApp.view.authentication.Login');
        win.show();
    },   
    showApp: function() {
        //debugger;
        Ext.create('MyApp.view.main.Main');
    }
});
