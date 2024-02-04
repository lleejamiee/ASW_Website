import "@/app/(site)/css/eventsPageLayout.css";
import TabsPage from "./Tabs/TabsPage";

export default function Events() {
    const date = new Date();
    const currentDate =
        date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    return (
        <div className="BackgroundColour">
            <div className="Heading">ASW Events</div>
            <TabsPage />
        </div>
    );
}
