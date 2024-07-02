import { Executive } from "@/types/Executive";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Event } from "@/types/Events";
import { MemberSignUp } from "@/types/MemberSignUp";
import { Project } from "@/types/Project";

const client = createClient(clientConfig);

// Returns all the projects
export async function getProjects(): Promise<Project[]> {
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "gallery": gallery.images[] {
                "url": asset->url,
                "altText": altText
            },
            url,
            content
        }`
    );
}

// Returns single project
export async function getProject(slug: string): Promise<Project> {
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "gallery": gallery.images[] {
                "url": asset->url,
                "altText": altText
            },
            url,
            content
        }`,
        { slug }
    );
}

// Returns all Executives
export async function getExecutives(): Promise<Executive[]> {
    return client.fetch(
        groq`*[_type == "executive"]{
            _id,
            _createdAt,
            name,
            year,
            "image": image.asset->url,
            role,
            url
        }`
    );
}

// Returns all Events
export async function getEvents(): Promise<Event[]> {
    return client.fetch(
        groq`*[_type == "event"]{
            _id,
            _createdAt,
            name,
            year,
            "slug": slug.current,
            date,
            "thumbnail": image.asset->url,
            "gallery": gallery.images[] {
                "url": asset->url,
                "altText": alt
            },
            url,
            content
        }`
    );
}

// Returns single Event
export async function getEvent(_id: string): Promise<Event> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "event" && _id == $_id][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            date,
            "gallery": gallery.images[] {
                "url": asset->url,
                "altText": alt,
            },
            url,
            content
        }`,
        { _id }
    );
}

// Returns membership sign up link
export async function getMemberSignUpLink(): Promise<MemberSignUp[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "membershipSignUpLink"] {
            name,
            link
        }`
    );
}
