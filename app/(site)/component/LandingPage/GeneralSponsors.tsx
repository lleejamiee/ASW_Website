import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function GeneralSponsors() {
    const heading = await getProject("sponsor-heading");
    const diamond = await getProject("diamond");
    const platinum = await getProject("platinum");
    const gold = await getProject("gold");

    // console.log("Gallery: ", diamond.gallery);

    return (
        <div className="GeneralSponsors">
            <div className="SponsorHeading">
                <PortableText value={heading.content} />
            </div>
            <div className="Diamond">{diamond.name}</div>
            <div className="flex items-center relative h-1/5 w-screen">
                {diamond.gallery.map(
                    (url) =>
                        ({ url } && (
                            <div className="CompanyLogo relative h-full aspect-square">
                                <Image
                                    src={url}
                                    alt="Diamond"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="left center"
                                />
                            </div>
                        ))
                )}
            </div>
        </div>
    );
}
