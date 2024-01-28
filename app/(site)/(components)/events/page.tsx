import { getEvents } from "@/sanity/sanity-utils";
import NavBar from "../NavBar";

export default async function Events() {
    const events = await getEvents();

    return (
        <>
            <NavBar />
            <div>ASW Events</div>
        </>
    );
}
