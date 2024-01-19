import ASWIntroduction from "./component/LandingPage/ASWIntroduction";
import GeneralSponsors from "./component/LandingPage/GeneralSponsors";
import NavBar from "./component/LandingPage/NavBar";

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
                <div className="section3">Our Events</div>
            </body>
        </>
    );
}
