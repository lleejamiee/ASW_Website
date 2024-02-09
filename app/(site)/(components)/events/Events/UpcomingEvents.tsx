import { getUpcomingEvents } from "@/app/(site)/util/fetchEvents";
import { Event } from "@/types/Events";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { EventsPropsContext } from "../EventsContext";

export function UpcomingEvents() {
    const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
    const { dispatch } = useContext(EventsPropsContext);
    const router = useRouter();

    const handleClick = (_id: string) => {
        dispatch({ type: "SET_IS_UPCOMING_EVENT", payload: true });
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
