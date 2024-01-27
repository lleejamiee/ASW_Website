import Footer from "./component/Footer";
import ASWIntroduction from "./component/LandingPage/ASWIntroduction";
import GeneralSponsors from "./component/LandingPage/GeneralSponsors";
import OurEvents from "./component/LandingPage/OurEvents";
import NavBar from "./component/NavBar";

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
                <Footer />
            </body>
        </>
    );
}
