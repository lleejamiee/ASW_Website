import { Executive, Executives } from "@/types/Executive";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Event, Events } from "@/types/Events";
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
    return createClient(clientConfig).fetch(
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

// Returns executives from all year.
export async function getExecutivesByAllYear(): Promise<Executives[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "executives"] {
            _id,
            _createdAt,
            year,
            slug
        }`
    );
}

// Returns executives by year.
export async function getExecutiveByYear(year: string): Promise<Executives> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "executives" && year == $year][0] {
            "executives": executive[] -> {
                _id,
                name,
                "image": image.asset->url,
                role,
                url
            }
        }`,
        { year }
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

// Returns events from all the years. E.g, this will return all the events that are stored in Events document in Event[].
export async function getEventYears(): Promise<Events[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "events"] {
            _id,
            _createdAt,
            year,
            slug,
            "events": event[] -> {
                _id,
                name,
                date
            }
          }`
    );
}

// Returns single event year. E.g, when slug = 2017, this will retreive all the events from 2017.
export async function getEventYear(slug: string): Promise<Events> {
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
              date,
              "thumbnail": image.asset->url,
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

// Returns membership sign up link
export async function getMemberSignUpLink(): Promise<MemberSignUp[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "membershipSignUpLink"] {
            name,
            link
        }`
    );
}
