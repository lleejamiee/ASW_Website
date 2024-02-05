import { getUpcomingEvents } from "@/app/(site)/util/fetchEvents";
import { Event } from "@/types/Events";
import { useEffect, useState } from "react";

export function UpcomingEvents() {
    const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

    useEffect(() => {
        async function fetchData() {
            const upcoming = await getUpcomingEvents();

            setUpcomingEvents(upcoming);
        }

        fetchData();
    }, []);

    return (
        <div className="EventsContainer">
            {upcomingEvents ? (
                <div>Upcoming Events List</div>
            ) : (
                <div>No Upcoming Events</div>
            )}
        </div>
    );
}
