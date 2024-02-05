import Link from "next/link";
import "@/app/(site)/css/navbarLayout.css";

const NavBar = () => {
    return (
        <div className="navbar">
            <ul className="pages">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/staff">Team</Link>
                </li>
                <li>
                    <Link href="/events">Events</Link>
                </li>
                <li>
                    <Link href="/">Join Us</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
