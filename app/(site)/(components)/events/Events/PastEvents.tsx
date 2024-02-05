import { useContext, useEffect, useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { getEventYears } from "@/sanity/sanity-utils";
import { DropdownPropsContext } from "../Dropdown/DropdownContext";

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
    }, [dispatch]);

    return (
        <div className="EventsContainer">
            <Dropdown />
        </div>
    );
}
