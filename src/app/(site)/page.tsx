import ASWIntroduction from "./(components)/LandingPage/ASWIntroduction";
import GeneralSponsors from "./(components)/LandingPage/GeneralSponsors";
import OurEvents from "./(components)/LandingPage/OurEvents";
import { Events, Introduction, Sponsors } from "./util/fetchProjects";

export default function Home() {
    return (
        <>
            <ASWIntroduction>
                <Introduction />
            </ASWIntroduction>
            <GeneralSponsors>
                <Sponsors />
            </GeneralSponsors>
            <OurEvents>
                <Events />
            </OurEvents>
        </>
    );
}
