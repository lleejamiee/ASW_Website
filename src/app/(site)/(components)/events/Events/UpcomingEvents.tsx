import "@/src/app/(site)/css/eventListLayout.css";
import { getUpcomingEvents } from "@/src/app/(site)/util/fetchEvents";
import { Event } from "@/types/Events";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function UpcomingEvents() {
    const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
    const router = useRouter();

    const handleClick = (_id: string) => {
        router.push("events/" + [_id]);
    };

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
                <div className="EventsListContainer">
                    {upcomingEvents.map((event) => (
                        <button
                            key={event._id}
                            className="EventContainer"
                            onClick={() => handleClick(event._id)}
                        >
                            <div>{event.name}</div>
                            <div>{event.date}</div>
                        </button>
                    ))}
                </div>
            ) : (
                <div>No Upcoming Events</div>
            )}
        </div>
    );
}
