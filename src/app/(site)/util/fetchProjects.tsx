"use server";

import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export async function Projects() {
    const data = await getProjects();
    const intro = data.find((project) => project.slug === "asw-intro");
    return (
        <>
            <div className="ASWLogo">
                {intro && intro.image && (
                    <Image src={intro.image} alt={intro.name} fill={true} />
                )}
            </div>
            <div className="ASWIntroductionContent">
                <span>{intro && <PortableText value={intro.content} />}</span>
            </div>
        </>
    );
}
