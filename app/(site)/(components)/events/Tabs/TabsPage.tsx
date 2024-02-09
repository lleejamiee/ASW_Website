"use client";

import { useContext, useEffect, useState } from "react";
import { Tab, Tabs } from "./Tabs";
import { UpcomingEvents } from "../Events/UpcomingEvents";
import { PastEvents } from "../Events/PastEvents";
import { EventsPropsContext } from "../EventsContext";
import { Dropdown } from "../Dropdown/Dropdown";

export default function TabsPage() {
    const { state, dispatch } = useContext(EventsPropsContext);

    const tabs: Tab[] = [
        { id: 0, label: "Upcoming Events" },
        { id: 1, label: "Past Events" },
    ];

    const [selectedTabId, setSelectedTabId] = useState(-1);

    const handleTabClick = (id: number) => {
        setSelectedTabId(id);

        if (selectedTabId === 0) {
            dispatch({ type: "SET_SELECTED_YEAR", payload: "" });
        }
    };

    useEffect(() => {
        if (selectedTabId === 0) {
            dispatch({ type: "SET_IS_UPCOMING_EVENT", payload: true });
            console.log("TabsPage", state.isUpcomingEvent);
        }

        if (selectedTabId === 1) {
            dispatch({ type: "SET_IS_UPCOMING_EVENT", payload: false });
            console.log("TabsPage", state.isUpcomingEvent);
        }
    }, [selectedTabId]);

    return (
        <div className="Container">
            <div className="SideContainer">
                <Tabs
                    selectedId={selectedTabId}
                    tabs={tabs}
                    onClick={handleTabClick}
                />
                {selectedTabId === tabs[1].id && <Dropdown />}
            </div>
            {selectedTabId === tabs[0].id && <UpcomingEvents />}
            {selectedTabId === tabs[1].id && <PastEvents />}
        </div>
    );
}
