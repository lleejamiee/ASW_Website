import ASWIntroduction from "./(components)/LandingPage/ASWIntroduction";
import GeneralSponsors from "./(components)/LandingPage/GeneralSponsors";
import OurEvents from "./(components)/LandingPage/OurEvents";
import NavBar from "./(components)/NavBar";

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
