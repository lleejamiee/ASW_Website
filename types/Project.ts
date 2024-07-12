import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    gallery: { url: string; altText: string }[];
    url: string;
    content: PortableTextBlock[];
};

type ProjectSlug = {
    introduction: string;
    sponsorHeadong: string;
    diamond: string;
    platinum: string;
    gold: string;
    eventsHeading: string;
    educate: string;
    social: string;
    network: string;
};

export const projectSlug: ProjectSlug = {
    introduction: "asw-introduction",
    sponsorHeadong: "sponsor-heading",
    diamond: "diamond",
    platinum: "platinum",
    gold: "gold",
    eventsHeading: "our-events",
    educate: "educate",
    social: "social",
    network: "network",
};
