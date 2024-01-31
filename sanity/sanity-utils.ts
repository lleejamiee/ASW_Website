import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { Executive } from "@/types/Executive";
import { createClient, groq } from "next-sanity";
import { Event, Events } from "@/types/Events";
import clientConfig from "./config/client-config";

// Returns all the projects
export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "gallery": gallery[] {
                "url": asset->url
            },
            url,
            content
        }`
    );
}

// Returns single project
export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "gallery": gallery[] {
                "url": asset->url
            },
            url,
            content
        }`,
        { slug }
    );
}

// Returns all pages
export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`
    );
}

// Returns single page
export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"&& slug.current == $slug][0]]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        { slug }
    );
}

// Returns all Executives
export async function getExecutives(): Promise<Executive[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "executive"]{
            _id,
            _createdAt,
            name,
            "image": image.asset->url,
            role,
            url
        }`
    );
}

// Returns all Events
export async function getEvents(): Promise<Event[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "event"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
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
export async function getEvent(slug: string): Promise<Event> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "event" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "gallery": gallery[] {
                "url": image.asset->url,
                "altText": alt
            },
            url,
            content
        }`,
        { slug }
    );
}

// Returns events from all the years. E.g, this will return all the events that are stored in Events document in Event[].
export async function getEventYears(): Promise<Events[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "events"] {
            _id,
            _createdAt,
            year,
            slug,
            "events": events[]
          }`
    );
}

// Returns single event year. E.g, when slug = 2017, this will retreive all the events from 2017.
export async function getEventYear(slug: string): Promise<Event> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "events" && slug.current == $slug][0] {
            _id,
            _createdAt,
            year,
            slug,
            "events": event[]-> {
              _id,
              name,
              "slug": slug.current,
              "image": image.asset->url,
              "gallery": gallery.images[] {
                "url": image.asset->url,
                "altText": altText
              },
              url,
              content
            }
          }`,
        { slug }
    );
}
