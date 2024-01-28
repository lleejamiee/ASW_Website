import "@/app/(site)/css/navbarLayout.css";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="navbar">
            <ul className="pages">
                <Link href="/">
                    <li>Home</li>
                </Link>
                <a href="/staff">
                    <li>Team</li>
                </a>
                <Link href="/events">
                    <li>Events</li>
                </Link>
                <a href="/">
                    <li>Join Us</li>
                </a>
            </ul>
        </div>
    );
};

export default NavBar;
