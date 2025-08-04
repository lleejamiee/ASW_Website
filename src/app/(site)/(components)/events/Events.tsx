import styles from "@/src/app/(site)/(components)/events/events-page.module.css";
import { Event } from "@/types/Events";

export function Events({
    events,
    year,
}: {
    events: Map<string, Event[]>;
    year: string;
}) {
    const filteredEvents = events.get(year)
        ? events.get(year)!.sort((a, b) => b.date?.localeCompare(a.date))
        : [];

    return (
        <>
            <h2 id={year}>{year}</h2>
            <dl>
                {filteredEvents &&
                    filteredEvents.map((event) => (
                        <a
                            key={event._id}
                            href={`/events/${event._id}`}
                            className={styles.link}
                        >
                            <dt key={event._id}>{event.name}</dt>
                            <dd key={event.name} className={styles["sub-list"]}>
                                {event.date}
                            </dd>
                        </a>
                    ))}
            </dl>
        </>
    );
}

export function Years({ years }: { years: string[] }) {
    return (
        <ul className={styles.list}>
            {years.map((year) => (
                <a key={year} href={`#${year}`}>
                    <li key={year}>{year}</li>
                </a>
            ))}
        </ul>
    );
}
