import styles from "@/src/app/(site)/(components)/Events/event-detail.module.css";
import { getEvent } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Carousel from "./Craousel";

export default async function EventDetails({
    params,
}: {
    params: { _id: string };
}) {
    const event = await getEvent(params._id);
    const gallery = event.gallery;

    return (
        <div className={styles["event-detail"]}>
            <a href="/events" className={styles["return-button"]}>
                <i className="fa fa-arrow-left fa-3x" aria-hidden="true"></i>
                Return to Events
            </a>
            <div className={styles.grid}>
                <Carousel gallery={gallery} />
                <div className={styles.right}>
                    <h1 className={styles.name}>{event.name}</h1>
                    <p>{event.date}</p>
                    <span>
                        <PortableText value={event.content} />
                    </span>
                    {isUpcomingEvent(event.date) && (
                        <a
                            href={event.url}
                            target="_blank"
                            className={styles["signup-button"]}
                        >
                            Sign up here!
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function isUpcomingEvent(eventDate: string) {
    const date = new Date();
    const currentDate =
        String(date.getFullYear()) +
        "-" +
        String(date.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(date.getDate()).padStart(2, "0");

    return eventDate >= currentDate;
}
