export const event = {
    name: "event",
    title: "Event",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Event Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name", maxLength: 96 },
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

export const events = {
    name: "events",
    title: "Events",
    type: "document",
    fields: [
        {
            name: "year",
            title: "Year",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "year", maxLength: 96 },
        },
        {
            name: "event",
            title: "Event",
            type: "array",
            of: [{ type: "reference", to: [{ type: "event" }] }],
        },
    ],
};
