import { getProject } from "@/sanity/sanity-utils";
import styles from "@/src/app/(site)/(components)/LandingPage/home-page.module.css";
import { projectSlug } from "@/types/Project";
import { PortableText } from "@portabletext/react";

export default async function Introduction() {
    const intro = await getProject(projectSlug.introduction);
    return (
        <div className={styles["introduction"]}>
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
        </div>
    );
}
