export type Executive = {
    _id: string;
    _createdAt: Date;
    name: string;
    image: string;
    role: string;
    url: string;
};

export type Executives = {
    _id: string;
    _createdAt: Date;
    year: string;
    slug: string;
    executives: Executive[];
};
