const executive = {
    name: 'executive',
    title: 'Executives',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                name: 'alt',
                title: 'Alt',
                type: 'string'
                }
            ]
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        }
    ]
}

export default executive;