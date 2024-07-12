import { getMemberSignUpLink } from "@/sanity/sanity-utils";
import styles from "@/src/app/(site)/(components)/Navbar/navbar.module.css";

export default async function NavBar() {
    const signupLink = (await getMemberSignUpLink()).map((link) => link.link);

    return (
        <header className={styles["sticky-header"]}>
            <nav>
                <div>
                    <a href="/">HOME</a>
                </div>
                <div>
                    <a href="/team">TEAM</a>
                </div>
                <div>
                    <a href="/events">EVENTS</a>
                </div>
                <div>
                    <a href={`${signupLink[0]}`} target="_blank">
                        JOIN US
                    </a>
                </div>
            </nav>
        </header>
    );
}
