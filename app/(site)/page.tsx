import NavBar from "./component/NavBar";
import "@/app/(site)/css/homepageLayout.css";
import "@/app/(site)/css/navbarLayout.css";

export default function Home() {
    return (
        <>
            <head>
                <link rel="layout" href="app/(site)/css/homepageLayout.css" />
            </head>
            <body>
                <NavBar />
                <div className="section1">
                    <div className="flex items-center h-screen ml-15">
                        <img
                            className="object-center-left h-2/5 aspect-square"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                            alt="logo"
                        />
                        <div>ASW Introduction</div>
                    </div>
                </div>
                <div className="section2">2024 General Sponsor</div>
                <div className="section3">Our Events</div>
            </body>
        </>
    );
}
