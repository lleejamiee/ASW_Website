const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { souce: "name" },
        },
        {
            name: "image",
            tile: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            name: "gallery",
            title: "Gallery",
            type: "object",
            fields: [
                {
                    name: "images",
                    title: "Images",
                    type: "array",
                    of: [
                        {
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true,
                            },
                            fields: [
                                {
                                    name: "altText",
                                    title: "Alternate Text",
                                    type: "string",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: "url",
            title: "URL",
            type: "url",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};

export default project;
