Ext.define('ExtMVC.view.ContatosGrid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.contatosgrid',

    store: 'Contatos',

    title: 'Contatos',

    iconCls: 'icon-grid',

    columns: [
        {
            text: 'ID',
            width: 35,
            dataIndex: 'id'
        },
        {
            text: 'Nome',
            width: 170,
            flex: 1,
            dataIndex: 'name'
        },
        {
            text: 'Telefone',
            width: 100,
            dataIndex: 'phpne'
        },
        {
            text: 'Email',
            width: 170,
            dataIndex: 'email'
        }
    ]

})