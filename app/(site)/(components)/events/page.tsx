import "@/app/(site)/css/eventsPageLayout.css";
import TabsPage from "./Tabs/TabsPage";
import { DropdownPropsProvider } from "./Dropdown/DropdownContext";

export default function Events() {
    return (
        <DropdownPropsProvider>
            <div className="BackgroundColour">
                <div className="Heading">ASW Events</div>
                <TabsPage />
            </div>
        </DropdownPropsProvider>
    );
}
