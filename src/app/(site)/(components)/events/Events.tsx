import styles from "@/src/app/(site)/(components)/events/events-page.module.css";
import { getEvents } from "@/sanity/sanity-utils";
import { Event } from "@/types/Events";

export async function Events() {
    const eventsMap = await getEventsMap();
    const yearList = getYearList(eventsMap);

    return (
        <div className={styles["events-page"]}>
            <h1 className={styles["events-heading"]}>Events</h1>
            <div style={{ display: `block` }}>
                <div className={styles["events-grid"]}>
                    <div className={styles["year-list"]}>
                        {renderYearList(yearList)}
                    </div>
                    <div className={styles["events-list"]}>
                        {yearList.map((year) =>
                            renderEventList(eventsMap, year)
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

async function getEventsMap() {
    const data = await getEvents();

    let eventsMap: Map<string, Event[]> = new Map();

    data.forEach((event) => {
        eventsMap.set(event.year, [
            ...(eventsMap.get(event.year) || []),
            event,
        ]);
    });

    return eventsMap;
}

function renderEventList(events: Map<string, Event[]>, year: string) {
    const filteredEvents = events
        .get(year)
        ?.sort((a, b) => b.date.localeCompare(a.date));

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

function getYearList(events: Map<string, Event[]>) {
    let years = Array.from(events.keys());

    return years.sort().reverse();
}

function renderYearList(years: string[]) {
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
