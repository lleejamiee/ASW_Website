import { useContext, useEffect, useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { getEventYear, getEventYears } from "@/sanity/sanity-utils";
import { EventsPropsContext } from "../EventsContext";
import { Events } from "@/types/Events";
import { useRouter } from "next/navigation";

export function PastEvents() {
    const [eventYears, setEventYears] = useState<string[]>([""]);
    const { dispatch } = useContext(EventsPropsContext);

    useEffect(() => {
        const fetchEventYears = async () => {
            const events = await getEventYears();
            const filteredYears = events?.map((event) => event.year);
            const sortedYears = filteredYears?.sort().reverse();

            if (sortedYears) {
                setEventYears(sortedYears);

                dispatch({ type: "SET_YEARS", payload: sortedYears });
            }
        };

        fetchEventYears();
    }, [dispatch, eventYears]);

    return (
        <div className="EventsContainer">
            <Dropdown />
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
                <div className="EventsListContainer">
                    {eventsList.events.map((event) => (
                        <button
                            key={event._id}
                            className="EventContainer"
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
