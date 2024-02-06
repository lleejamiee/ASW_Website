import "@/app/(site)/css/eventsPageLayout.css";
import TabsPage from "./Tabs/TabsPage";
import { EventsPropsProvider } from "./EventsContext";

export default function Events() {
    return (
        <EventsPropsProvider>
            <div className="BackgroundColour">
                <div className="Heading">ASW Events</div>
                <TabsPage />
            </div>
        </EventsPropsProvider>
    );
}
