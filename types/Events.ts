import { PortableTextBlock } from "sanity";

export type Events = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    gallery: { url: string; altText: string }[];
    url: string;
    content: PortableTextBlock[];
};

// url: string; alt: string
