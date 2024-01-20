import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import "@/app/(site)/css/homepageLayout.css";
import Image from "next/image";

export default async function ASWIntroduction() {
    const intro = await getProject("asw-introduction");

    return (
        <div className="ASWIntroduction">
            <div className="flex items-center h-screen">
                <div className="ASWLogo">
                    {intro.image && (
                        <Image src={intro.image} alt={intro.name} fill={true} />
                    )}
                </div>
                <div className="ml-15">
                    <PortableText value={intro.content} />
                </div>
            </div>
        </div>
    );
}
