import ASWIntroduction from "./(components)/LandingPage/ASWIntroduction";
import GeneralSponsors from "./(components)/LandingPage/GeneralSponsors";
import OurEvents from "./(components)/LandingPage/OurEvents";
import { Projects } from "./util/fetchProjects";

console.log("Hello");

export default function Home() {
    return (
        <div>
            <ASWIntroduction>
                <Projects />
            </ASWIntroduction>
            <GeneralSponsors />
            <OurEvents />
        </div>
    );
}
