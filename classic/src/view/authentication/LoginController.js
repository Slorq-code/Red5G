Ext.define('MyApp.view.authentication.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {
        this.fireViewEvent('doLogin', this, {user:"andres@red5g.com"})
    }
});
 





    // // This would be the ideal location to verify the user's credentials via
    // // a server-side lookup. We'll just move forward for the sake of this example.

    // // Set the localStorage value to true
    // localStorage.setItem("MyAppLoggedInStatus", true);

    // // Remove Login Window
    // this.getView().destroy();

    // // Add the main view to the viewport
    // Ext.widget('app-main');