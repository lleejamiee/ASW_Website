export const executive = {
    name: "executive",
    title: "Executive",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
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
            name: "role",
            title: "Role",
            type: "string",
        },
        {
            name: "url",
            title: "URL",
            type: "url",
        },
    ],
};

export const executives = {
    name: "executives",
    title: "Executives",
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
            name: "executive",
            title: "Executive",
            type: "array",
            of: [{ type: "reference", to: [{ type: "executive" }] }],
        },
    ],
};
