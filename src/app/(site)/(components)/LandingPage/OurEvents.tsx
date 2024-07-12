import { getProject } from "@/sanity/sanity-utils";
import styles from "@/src/app/(site)/(components)/LandingPage/home-page.module.css";
import { Project, projectSlug } from "@/types/Project";
import { PortableText } from "@portabletext/react";

export default async function OurEvents() {
    const heading = await getProject(projectSlug.eventsHeading);
    const educate = await getProject(projectSlug.educate);
    const social = await getProject(projectSlug.social);
    const network = await getProject(projectSlug.network);

    return (
        <div className={styles["our-events"]}>
            <h1 className={styles["events-heading"]}>
                {heading && heading.name}
            </h1>
            <div className={styles["events-grid"]}>
                <div className={styles["left"]}>
                    {educate && <EventType eventType={educate} />}
                    {social && <EventType eventType={social} />}
                    {network && <EventType eventType={network} />}
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

function EventType({ eventType }: { eventType: Project }) {
    return (
        <>
            <h2 className={styles["event-type-heading"]}>{eventType.name}</h2>
            <span className={styles["event-type-content"]}>
                <PortableText value={eventType.content} />
            </span>
        </>
    );
}
