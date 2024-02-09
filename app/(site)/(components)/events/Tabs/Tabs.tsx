import { memo } from "react";
import "@/app/(site)/css/eventsPageLayout.css";
import classNames from "classnames";

export interface Tab {
    id: number;
    label: string;
}

interface TabProps {
    selectedId: number;
    tabs: Tab[];
    onClick?: (id: number) => void;
}

const TabsComponent: React.FC<TabProps> = ({ selectedId, tabs, onClick }) => {
    return (
        <div className="TabsContainer">
            {tabs &&
                tabs.map((tab: Tab) => (
                    <div
                        className={classNames("Tab", {
                            Tab__selected: tab.id === selectedId,
                        })}
                        key={tab.id}
                        onClick={onClick ? () => onClick(tab.id) : undefined}
                    >
                        <button>{tab.label}</button>
                    </div>
                ))}
        </div>
    );
};

// memo: Memorises version of a component. It skips re-rendering the component when its props are unchanged.
export const Tabs = memo(TabsComponent);
