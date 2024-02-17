import ASWIntroduction from "./(components)/LandingPage/ASWIntroduction";
import GeneralSponsors from "./(components)/LandingPage/GeneralSponsors";
import OurEvents from "./(components)/LandingPage/OurEvents";

export default function Home() {
    return (
        <div>
            <ASWIntroduction />
            <GeneralSponsors />
            <OurEvents />
        </div>
    );
}
