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
    // mainView: 'MyApp.view.authentication.Login',

    launch: function() {
        this.showLogin();
    },
    showLogin: function() {
        let win = Ext.create('MyApp.view.authentication.Login', {
            listeners: {
                scope:this,
                doLogin: function(ventana, datos) {
                    win.close();
                    this.showApp(datos);
                    console.log("estoy aqui")
                }
            }
        });
        win.show();
    },   
    showApp: function(datos) {
        //debugger;
        Ext.create('MyApp.view.main.Main',{
            datos:datos,
        });
    }
});
