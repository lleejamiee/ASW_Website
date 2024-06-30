import { getProject, getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import goldDivider from "@/src/app/(site)/assets/photos/Gold.svg";
import platinumDivider from "@/src/app/(site)/assets/photos/Platinum.svg";
import diamondDivider from "@/src/app/(site)/assets/photos/Diamond.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import styles from "@/src/app/(site)/css/home-page.module.css";

export async function Introduction() {
    const intro = await getProject("asw-introduction");
    return (
        <>
            {intro && intro.image && (
                <img
                    src={intro.image}
                    alt={intro.name}
                    className={styles["asw-logo"]}
                />
            )}
            <span className={styles["introduction-content"]}>
                {intro && <PortableText value={intro.content} />}
            </span>
        </>
    );
}

export async function Sponsors() {
    const data = await getProjects();
    const heading = data.find((project) => project.slug === "sponsor-heading");
    const diamond = data.find((project) => project.slug == "diamond");
    const platinum = data.find((project) => project.slug == "platinum");
    const gold = data.find((project) => project.slug == "gold");

    return (
        <>
            <h1 className={styles["sponsor-heading"]}>
                {heading && <PortableText value={heading.content} />}
            </h1>
            {diamond && renderSponsorTier(diamond, diamondDivider)}
            {platinum && renderSponsorTier(platinum, platinumDivider)}
            {gold && renderSponsorTier(gold, goldDivider)}
        </>
    );
}

function renderSponsorTier(
    sponsorTier: Project,
    divider: string | StaticImport
) {
    return (
        <>
            <h2 className={styles["Diamond"]}>{sponsorTier.name}</h2>
            <div className={styles["logo-grid"]}>
                {sponsorTier.gallery.map((item) => (
                    <a
                        key={item.url}
                        href={item.altText}
                        target="_blank"
                        className={styles["logo-box"]}
                    >
                        <img
                            src={item.url}
                            alt={sponsorTier.name}
                            className={styles["individual-logo"]}
                        />
                    </a>
                ))}
            </div>
            <div className={styles["divider"]}>
                <Image src={divider} alt="divider" fill={true} />
            </div>
        </>
    );
}

export async function Events() {
    const data = await getProjects();
    const heading = data.find((project) => project.slug === "our-events");
    const educate = data.find((project) => project.slug === "educate");
    const social = data.find((project) => project.slug === "social");
    const network = data.find((project) => project.slug === "network");

    return (
        <>
            <h1 className={styles["events-heading"]}>
                {heading && heading.name}
            </h1>
            <div className={styles["events-grid"]}>
                <div className={styles["left"]}>
                    {educate && renderEventType(educate)}
                    {social && renderEventType(social)}
                    {network && renderEventType(network)}
                </div>
                <div className={styles["right"]}>
                    {heading && <img src={heading.image} />}
                </div>
            </div>
            <a href="/events" className={styles["more-events-button"]}>
                View More Events
            </a>
        </>
    );
}

function renderEventType(eventType: Project) {
    return (
        <>
            <h2 className={styles["event-type-heading"]}>{eventType.name}</h2>
            <hr className={styles["line"]} />
            <span className={styles["event-type-content"]}>
                <PortableText value={eventType.content} />
            </span>
        </>
    );
}
