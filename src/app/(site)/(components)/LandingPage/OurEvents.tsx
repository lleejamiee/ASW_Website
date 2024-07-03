import { getProjects } from "@/sanity/sanity-utils";
import styles from "@/src/app/(site)/(components)/LandingPage/home-page.module.css";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";

export default async function OurEvents() {
    const data = await getProjects();
    const heading = data.find((project) => project.slug === "our-events");
    const educate = data.find((project) => project.slug === "educate");
    const social = data.find((project) => project.slug === "social");
    const network = data.find((project) => project.slug === "network");

    return (
        <div className={styles["our-events"]}>
            <h1 className={styles["events-heading"]}>
                {heading && heading.name}
            </h1>
            <div className={styles["events-grid"]}>
                <div className={styles["left"]}>
                    {educate && RenderEventType(educate)}
                    {social && RenderEventType(social)}
                    {network && RenderEventType(network)}
                </div>
                <div className={styles["right"]}>
                    {heading && (
                        <img
                            src={heading.image}
                            className={styles["event-image"]}
                        />
                    )}
                </div>
            </div>
            <a href="/events" className={styles["more-events-button"]}>
                View More Events
            </a>
        </div>
    );
}

function RenderEventType(eventType: Project) {
    return (
        <>
            <h2 className={styles["event-type-heading"]}>{eventType.name}</h2>
            <span className={styles["event-type-content"]}>
                <PortableText value={eventType.content} />
            </span>
        </>
    );
}
