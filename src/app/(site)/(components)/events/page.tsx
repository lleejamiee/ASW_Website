import "@/src/app/(site)/css/eventListLayout.css";
import TabsPage from "./Tabs/TabsPage";
import { EventsPropsProvider } from "./EventsContext";

export default function Events() {
    return (
        <EventsPropsProvider>
                <div className="EventsHeader">ASW Events</div>
                <TabsPage />
        </EventsPropsProvider>
    );
}
