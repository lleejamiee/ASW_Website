import { getProject } from "@/sanity/sanity-utils";
import styles from "@/src/app/(site)/(components)/LandingPage/home-page.module.css";
import { Project, projectSlug } from "@/types/Project";
import { PortableText } from "@portabletext/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import goldDivider from "@/src/app/(site)/assets/photos/Gold.svg";
import platinumDivider from "@/src/app/(site)/assets/photos/Platinum.svg";
import diamondDivider from "@/src/app/(site)/assets/photos/Diamond.svg";
import Image from "next/image";

export default async function GeneralSponsors() {
    const heading = await getProject(projectSlug.sponsorHeadong);
    const diamond = await getProject(projectSlug.diamond);
    const platinum = await getProject(projectSlug.platinum);
    const gold = await getProject(projectSlug.gold);

    return (
        <div className={styles["general-sponsors"]}>
            <h1 className={styles["sponsor-heading"]}>
                {heading && <PortableText value={heading.content} />}
            </h1>
            {diamond && (
                <SponsorTier sponsorTier={diamond} divider={diamondDivider} />
            )}
            {platinum && (
                <SponsorTier sponsorTier={platinum} divider={platinumDivider} />
            )}
            {gold && <SponsorTier sponsorTier={gold} divider={goldDivider} />}
        </div>
    );
}

function SponsorTier({
    sponsorTier,
    divider,
}: {
    sponsorTier: Project;
    divider: string | StaticImport;
}) {
    return (
        <>
            <div className={styles["divider"]}>
                <Image src={divider} alt="divider" fill={true} />
            </div>
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
                            key={item.altText}
                            src={item.url}
                            alt={sponsorTier.name}
                            className={styles["individual-logo"]}
                        />
                    </a>
                ))}
            </div>
        </>
    );
}
