"use client";

import { useContext, useEffect, useState } from "react";
import { Tab, Tabs } from "../../../ui/Tabs";
import { UpcomingEvents } from "../Events/UpcomingEvents";
import { PastEvents } from "../Events/PastEvents";
import { EventsPropsContext } from "../EventsContext";
import { EventsDropdown } from "../Dropdown/EventsDropdown";

export default function TabsPage() {
    const { state, dispatch } = useContext(EventsPropsContext);

    const tabs: Tab[] = [
        { id: 0, label: "Upcoming Events" },
        { id: 1, label: "Past Events" },
    ];

    const [selectedTabId, setSelectedTabId] = useState(-1);

    const handleTabClick = (id: number) => {
        setSelectedTabId(id);
    };

    return (
        <div className="EventSelector">
            <div className="EventTypeSelector">
                <Tabs
                    selectedId={selectedTabId}
                    tabs={tabs}
                    onClick={handleTabClick}
                />
                {selectedTabId === tabs[1].id && <EventsDropdown />}
            </div>
            {selectedTabId === tabs[0].id && <UpcomingEvents />}
            {selectedTabId === tabs[1].id && <PastEvents />}
        </div>
    );
}
