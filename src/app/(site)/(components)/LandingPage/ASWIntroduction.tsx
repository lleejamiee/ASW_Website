import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import "@/src/app/(site)/css/homepageLayout.css";
import Image from "next/image";

export default async function ASWIntroduction() {
    const intro = await getProject("asw-introduction");

    return (
        <div className="ASWIntroduction">
                <div className="ASWLogo">
                    {intro.image && (
                        <Image src={intro.image} alt={intro.name} fill={true} />
                    )}
                </div>
                <div className="ASWIntroductionContent">
                    <PortableText value={intro.content} />
                </div>
        </div>
    );
}
