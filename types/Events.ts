import { PortableTextBlock } from "sanity";

export type Event = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    date: string;
    image: string;
    thumbnail: string;
    gallery: { url: string; altText: string }[];
    url: string;
    content: PortableTextBlock[];
};

export type Events = {
    _id: string;
    _createdAt: Date;
    year: string;
    slug: string;
    events: Event[];
};
