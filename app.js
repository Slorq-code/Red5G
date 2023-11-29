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
    mainView: 'MyApp.view.main.Main',

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
                    console.log("estoy aqui");
                    let elemento1 = document.getElementById("textfield-1020");
                    let elemento2 = document.getElementById("textfield-1021");
                    let elemento3 = document.getElementById("textfield-1022");
                    let elemento4 = document.getElementById("toolbar-1024");
                    elemento1.style.display = 'none';
                    elemento2.style.display = 'none';
                    elemento3.style.display = 'none';
                    elemento4.style.display = 'none';
                }
            }
        });
        win.show();
    },   
    showApp: function(datos) {
        // debugger;
         let hom = Ext.create('MyApp.view.main.Main',{
             datos:datos,
         });
          hom.show();
    }
});
