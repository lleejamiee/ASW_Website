import { getEventYear, getEvents } from "@/sanity/sanity-utils";
import { useEffect, useState } from "react";

export function UpcomingEvents() {
    const date = new Date();
    const currentYear = date.getFullYear().toString();
    const currentDate =
        date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        async function fetchEvents() {
            const eventsData = await getEventYear(currentYear);
            // setEvents(eventsData);
        }

        fetchEvents();
    }, []);
}
