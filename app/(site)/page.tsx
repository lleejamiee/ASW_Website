import ASWIntroduction from "./component/LandingPage/ASWIntroduction";
import GeneralSponsors from "./component/LandingPage/GeneralSponsors";
import NavBar from "./component/LandingPage/NavBar";
import OurEvents from "./component/LandingPage/OurEvents";

export default function Home() {
    return (
        <>
            <head>
                <link rel="layout" href="app/(site)/css/homepageLayout.css" />
            </head>
            <body>
                <NavBar />
                <ASWIntroduction />
                <GeneralSponsors />
                <OurEvents />
            </body>
        </>
    );
}
