import styles from "@/src/app/(site)/(components)/Events/events-page.module.css";
import { getEvents } from "@/sanity/sanity-utils";
import { Event } from "@/types/Events";
import { Events, Years } from "../(components)/Events/Events";

export default async function Page() {
    const eventsMap = await getEventsMap();
    const yearList = getYearList(eventsMap);

    return (
        <div className={styles["events-page"]}>
            <h1 className={styles["events-heading"]}>Events</h1>
            <div style={{ display: `block` }}>
                <div className={styles["events-grid"]}>
                    <div className={styles["year-list"]}>
                        <Years years={yearList} />
                    </div>
                    <div className={styles["events-list"]}>
                        {yearList.map((year) => (
                            <Events key={year} events={eventsMap} year={year} />
                        ))}
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

function getYearList(events: Map<string, Event[]>) {
    let years = Array.from(events.keys());

    return years.sort().reverse();
}
