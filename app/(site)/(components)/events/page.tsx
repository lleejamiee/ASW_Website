import "@/app/(site)/css/eventsPageLayout.css";
import { Accordion } from "./Accordion";
import { getEventYears } from "@/sanity/sanity-utils";

export default async function Events() {
    const eventYears = await getEventYears();

    return (
        <div className="BackgroundColour">
            <div className="Heading">ASW Events</div>
            <Accordion eventYears={eventYears} />
        </div>
    );
}
