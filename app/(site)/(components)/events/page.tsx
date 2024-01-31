import "@/app/(site)/css/eventsPageLayout.css";
import {
    getEvent,
    getEventYear,
    getEventYears,
    getEvents,
} from "@/sanity/sanity-utils";
import NavBar from "../NavBar";

export default async function Events() {
    return (
        <div className="BackgroundColour">
            <NavBar />
            <div className="Heading">ASW Events</div>
        </div>
    );
}
