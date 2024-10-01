Ext.define('ExtMVC.controller.Main', {
    extend: 'Ext.app.Controller',

    models: [
        'ExtMVC.model.Contato'
    ],

    stores: [
        'ExtMVC.store.Contato'
    ],

    views: [
        'ExtMVC.view.main.MainView'
    ]
})