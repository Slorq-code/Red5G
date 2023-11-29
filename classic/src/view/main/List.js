/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Personnell',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    },

    buttonAlign: 'center',
    buttons:[{
        text:'agregar',
        listeners: {
            click: function(){
                let text = document.getElementById("mainlist-1012")
                text.style.display = 'none';
                console.log("pruebadeboton")
                let elemento1 = document.getElementById("textfield-1020");
                let elemento2 = document.getElementById("textfield-1021");
                let elemento3 = document.getElementById("textfield-1022");
                let elemento4 = document.getElementById("toolbar-1024");
                elemento1.style.display = 'block';
                elemento2.style.display = 'block';
                elemento3.style.display = 'block';
                elemento4.style.display = 'block';
            }
        },
    }]
});
