import "@/app/(site)/css/navbarLayout.css";

const NavBar = () => {
    return (
        <div className="navbar">
            <ul className="pages">
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/">
                    <li>About</li>
                </a>
                <a href="/staff">
                    <li>Team</li>
                </a>
                <a href="/">
                    <li>Events</li>
                </a>
                <a href="/">
                    <li>Join Us</li>
                </a>
            </ul>
        </div>
    );
};

export default NavBar;
