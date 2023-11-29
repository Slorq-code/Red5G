Ext.define("MyApp.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  requires: [
    "Ext.plugin.Viewport",
    "MyApp.view.main.List",
    "MyApp.store.Personnel",
  ],

  controller: "main",
  viewModel: "main",

  ui: "navigation",

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: "stretchmax",
    },
    title: {
      bind: {
        text: "{name}",
      },
      flex: 0,
    },
    iconCls: "fa-th-list",
  },

  tabBar: {
    flex: 1,
    layout: {
      align: "stretch",
      overflowHandler: "none",
    },
  },

  responsiveConfig: {
    tall: {
      headerPosition: "top",
    },
    wide: {
      headerPosition: "left",
    },
  },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      responsiveConfig: {
        wide: {
          iconAlign: "left",
          textAlign: "left",
        },
        tall: {
          iconAlign: "top",
          textAlign: "center",
          width: 120,
        },
      },
    },
  },

  items: [
    {
      title: "Home",
      iconCls: "fa-home",
      items: [
        {
          xtype: "mainlist",
        },
        {
          xtype: "textfield",
          itemId: "newNameField",
          name: "newName",
          fieldLabel: "Agregar nuevo nombre",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          itemId: "newMailField",
          name: "newMail",
          fieldLabel: "Nuevo correo",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          itemId: "newPhoneField",
          name: "newPhone",
          fieldLabel: "Nuevo teléfono",
          allowBlank: false,
        },
      ],
    },
  ],
  buttonAlign: "left",
  buttons: [
    {
      text: "guardar",
      listeners: {
        click: function () {
          var me = this;

          let elemento1 = document.getElementById("textfield-1020");
          let elemento2 = document.getElementById("textfield-1021");
          let elemento3 = document.getElementById("textfield-1022");
          let elemento4 = document.getElementById("toolbar-1024");
          elemento1.style.display = "none";
          elemento2.style.display = "none";
          elemento3.style.display = "none";
          elemento4.style.display = "none";

          let text = document.getElementById("mainlist-1012");
          text.style.display = "block";

          // Usa Ext.ComponentQuery para encontrar la vista
          let view = Ext.ComponentQuery.query("app-main")[0];

          let newName = view.down("#newNameField").getValue();
          let newMail = view.down("#newMailField").getValue();
          let newPhone = view.down("#newPhoneField").getValue();

          // Obtén la tienda (store) de Personnel
          let store = Ext.getStore('personnel') || Ext.create('MyApp.store.Personnel');


          let newPerson = Ext.create("MyApp.model.Personnel", {
            name: newName,
            email: newMail,
            phone: newPhone,
          });

          // Agrega el nuevo registro a la tienda
          store.add(newPerson);

          // Restablece los valores del formulario
          view.down("#newNameField").setValue("");
          view.down("#newMailField").setValue("");
          view.down("#newPhoneField").setValue("");

          console.log(store.getData().items);
        },
      },
    },
  ],
});
