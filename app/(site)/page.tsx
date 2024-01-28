import ASWIntroduction from "./(components)/LandingPage/ASWIntroduction";
import GeneralSponsors from "./(components)/LandingPage/GeneralSponsors";
import NavBar from "./(components)/NavBar";
import OurEvents from "./(components)/LandingPage/OurEvents";

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
