Ext.define('MyApp.view.authentication.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'MyApp.view.authentication.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 1000,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick', 
            }
        }]
    }
});