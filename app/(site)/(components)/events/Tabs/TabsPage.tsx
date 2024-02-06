"use client";

import { useContext, useState } from "react";
import { Tab, Tabs } from "./Tabs";
import { UpcomingEvents } from "../Events/UpcomingEvents";
import { PastEvents } from "../Events/PastEvents";
import { EventsPropsContext } from "../EventsContext";

export default function TabsPage() {
    const { dispatch } = useContext(EventsPropsContext);

    const tabs: Tab[] = [
        { id: 0, label: "Upcoming Events" },
        { id: 1, label: "Past Events" },
    ];

    const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

    const handleTabClick = (id: number) => {
        setSelectedTabId(id);

        if (selectedTabId === 0) {
            dispatch({ type: "SET_SELECTED_YEAR", payload: "" });
        }
    };

    return (
        <div className="Container">
            <Tabs
                selectedId={selectedTabId}
                tabs={tabs}
                onClick={handleTabClick}
            />
            {selectedTabId === tabs[0].id && <UpcomingEvents />}
            {selectedTabId === tabs[1].id && <PastEvents />}
        </div>
    );
}
