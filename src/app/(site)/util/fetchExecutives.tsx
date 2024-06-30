import styles from "@/src/app/(site)/css/team-page.module.css";
import { getExecutives } from "@/sanity/sanity-utils";
import { Executive } from "@/types/Executive";
import Image from "next/image";
import LinkedIn from "@/src/app/(site)/assets/photos/LinkedIn.svg";

export async function TeamMembers() {
    const years: string = "2024";
    const data = await getExecutives();
    const allExecutives: Executive[] = data.filter(
        (executive) => executive.year === years
    );
    const presidents: Executive[] = allExecutives.filter((executive) =>
        executive.role.includes("President")
    );
    const executives: Executive[] = allExecutives.filter(
        (executive) => !executive.role.includes("President")
    );

    return (
        <>
            {renderPresidents(presidents)}
            {renderExecutives(executives)}
        </>
    );
}

function renderPresidents(presidents: Executive[]) {
    return (
        <>
            <div className={styles["presidents-grid"]}>
                {presidents.map((president) => (
                    <div key={president.name}>
                        <img src={president.image} className={styles.photo} />
                        <p className={styles.name}>{president.name}</p>
                        <p className={styles.role}>{president.role}</p>
                        <a
                            href={president.url}
                            className={styles["linkedIn-container"]}
                            target="_blank"
                        >
                            <Image
                                src={LinkedIn}
                                alt="LinkedIn"
                                className={styles["linkedIn-logo"]}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}

function renderExecutives(executives: Executive[]) {
    return (
        <div className={styles["executives-grid"]}>
            {executives.map((executive) => (
                <div key={executive._id}>
                    <img
                        src={executive.image}
                        className={styles["execs-photo"]}
                    />
                    <p className={styles.name}>{executive.name}</p>
                    <p className={styles.role}>{executive.role}</p>
                    <a
                        href={executive.url}
                        target="_blank"
                        className={styles["linkedIn-container"]}
                    >
                        <Image
                            src={LinkedIn}
                            alt="LinkedIn"
                            className={styles["linkedIn-logo"]}
                        />
                    </a>
                </div>
            ))}
        </div>
    );
}
