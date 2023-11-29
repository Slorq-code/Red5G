Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'MyApp.view.main.List',
        'MyApp.store.Personnel'
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
            name: 'newName',
            fieldLabel: 'Agregar nuevo nombre',
            allowBlank: false, 
        },
        {
            xtype: 'textfield',
            name: 'newMail',
            fieldLabel: 'nuevo correo',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'newPhone',
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


                let elemento1 = document.getElementById("textfield-1020");
                let elemento2 = document.getElementById("textfield-1021");
                let elemento3 = document.getElementById("textfield-1022");
                let elemento4 = document.getElementById("toolbar-1024");
                elemento1.style.display = 'none';
                elemento2.style.display = 'none';
                elemento3.style.display = 'none';
                elemento4.style.display = 'none';

                let text = document.getElementById("mainlist-1012")
                text.style.display = 'block';


                var store = this.getView().down('mainlist').getStore();
                store.add({
                    name: 'Nuevo Nombre',
                    email: 'nuevo@email.com',
                    phone: '555-555-5555'
                });
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