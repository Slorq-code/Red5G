Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'MyApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        items: [
        {
            xtype: 'mainlist',
        },
        {
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Agregar nuevo nombre',
            allowBlank: false, 
        },
        {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'nuevo correo',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'nuevo telefono',
            allowBlank: false
        },
    ]
    }],
    buttonAlign: 'left',
    buttons:[{
        text:'guardar',
        listeners: {
            click: function(){
              console.log("back")
            }
        },
    }]
});


/*


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
        },
    ],
    },

*/