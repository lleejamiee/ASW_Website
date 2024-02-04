"use client";

import { useState } from "react";
import { Tab, Tabs } from "./Tabs";

export default function TabsPage() {
    const tabs: Tab[] = [
        { id: 0, label: "Upcoming Events" },
        { id: 1, label: "Past Events" },
    ];

    const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

    const handleTabClick = (id: number) => {
        setSelectedTabId(id);
    };

    return (
        <div className="Container">
            <Tabs
                selectedId={selectedTabId}
                tabs={tabs}
                onClick={handleTabClick}
            />
            {/* <div>
                {selectedTabId === tabs[0].id && (
                    <div>
                        <UpcomingEvents />
                    </div>
                )}
            </div> */}
        </div>
    );
}
