Ext.define('ExtMVC.view.main.MainView', {
  extend: 'Ext.Container',

  requires: [
    'Ext.layout.Fit',
    'ExtMVC.view.ContatosGrid'
  ],

  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },

  layout: {
    type: 'fit'
  },

  items: [{
    xtype: 'contatosgrid'
  }]
});
