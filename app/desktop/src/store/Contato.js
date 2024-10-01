Ext.define('ExtMVC.store.Contato', {
    extend: 'Ext.data.Store',

    model: 'ExtMVC.model.Contato',

    proxy: {
        type: 'ajax',
        url: 'php/listaContatos.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
})