import styles from "@/src/app/(site)/(components)/team/team-page.module.css";
import { getExecutives } from "@/sanity/sanity-utils";
import { Executive } from "@/types/Executive";
import Image from "next/image";
import LinkedIn from "@/src/app/(site)/assets/photos/LinkedIn.svg";

export default async function TeamMembers() {
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
        <div className={styles["team-page"]}>
            <h1 className={styles.heading}>ASW Executives</h1>
            <Presidents presidents={presidents} />
            <Executives executives={executives} />
        </div>
    );
}

function Presidents({ presidents }: { presidents: Executive[] }) {
    return (
        <>
            <div className={styles["presidents-grid"]}>
                {presidents.map((president) => (
                    <div key={president.name}>
                        <img
                            key={president._id}
                            src={president.image}
                            className={styles.photo}
                        />
                        <p key={president._id} className={styles.name}>
                            {president.name}
                        </p>
                        <p key={president._id} className={styles.role}>
                            {president.role}
                        </p>
                        <a
                            key={president._id}
                            href={president.url}
                            target="_blank"
                        >
                            <Image
                                key={president._id}
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

function Executives({ executives }: { executives: Executive[] }) {
    return (
        <div className={styles["executives-grid"]}>
            {executives.map((executive) => (
                <div key={executive._id}>
                    <img
                        key={executive._id}
                        src={executive.image}
                        className={styles["execs-photo"]}
                    />
                    <p key={executive._id} className={styles.name}>
                        {executive.name}
                    </p>
                    <p key={executive._id} className={styles.role}>
                        {executive.role}
                    </p>
                    <a
                        key={executive._id}
                        href={executive.url}
                        target="_blank"
                        className={styles["linkedIn-container"]}
                    >
                        <Image
                            key={executive._id}
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
