import { useContext, useEffect, useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { getEventYear, getEventYears } from "@/sanity/sanity-utils";
import { DropdownPropsContext } from "../Dropdown/DropdownContext";
import { Events } from "@/types/Events";
import Link from "next/link";
import { useRouter } from "next/router";

export function PastEvents() {
    const [eventYears, setEventYears] = useState<string[]>([""]);
    const { dispatch } = useContext(DropdownPropsContext);

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

export const DisplayPastEventsList = () => {
    const [eventsList, setEventsList] = useState<Events>();
    const { state } = useContext(DropdownPropsContext);

    useEffect(() => {
        const fetchEventsList = async () => {
            const events = await getEventYear(state.selectedYear);

            setEventsList(events);
            console.log(events);
        };

        fetchEventsList();
    }, [state.selectedYear]);

    const handleClick = (_id: string) => {
        const router = useRouter();
        router.push(`/${_id}`);
    };

    return (
        <>
            {eventsList ? (
                <div className="EventsListContainer">
                    {eventsList.events.map((event) => (
                        <Link href={"/" + event._id}>
                            <button
                                key={event._id}
                                className="EventContainer"
                                onClick={() => handleClick(event._id)}
                            >
                                <h1>{event.name}</h1>
                                <p>{event.date}</p>
                            </button>
                        </Link>
                    ))}
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
};
