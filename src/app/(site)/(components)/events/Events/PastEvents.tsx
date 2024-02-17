import { useContext, useEffect, useState } from "react";
import { getEventYear } from "@/sanity/sanity-utils";
import { EventsPropsContext } from "../EventsContext";
import { Events } from "@/types/Events";
import { useRouter } from "next/navigation";
import { getPastEvents } from "@/src/app/(site)/util/fetchEvents";

export function PastEvents() {
    const { dispatch } = useContext(EventsPropsContext);

    useEffect(() => {
        const fetchEventYears = async () => {
            const events = await getPastEvents();
            const filteredYears = events?.map((event) => event.year);
            const sortedYears = filteredYears?.sort().reverse();

            if (sortedYears) {
                dispatch({ type: "SET_YEARS", payload: sortedYears });
            }
        };

        fetchEventYears();
    }, [dispatch]);

    return (
        <div className="DisplayedEventsContainer">
            <DisplayPastEventsList />
        </div>
    );
}

export function DisplayPastEventsList() {
    const [eventsList, setEventsList] = useState<Events>();
    const { state } = useContext(EventsPropsContext);
    const router = useRouter();

    useEffect(() => {
        const fetchEventsList = async () => {
            const events = await getEventYear(state.selectedYear);

            setEventsList(events);
        };

        fetchEventsList();
    }, [state.selectedYear]);

    const handleClick = (_id: string) => {
        router.push("events/" + [_id]);
    };

    return (
        <>
            {eventsList ? (
                <div className="EventsList">
                    {eventsList.events.map((event) => (
                        <button
                            key={event._id}
                            className="EventSelector"
                            onClick={() => handleClick(event._id)}
                        >
                            <h1>{event.name}</h1>
                            <p>{event.date}</p>
                        </button>
                    ))}
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
}
