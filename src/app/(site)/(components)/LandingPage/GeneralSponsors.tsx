import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export default async function GeneralSponsors() {
    const heading = await getProject("sponsor-heading");
    const diamond = await getProject("diamond");
    const platinum = await getProject("platinum");
    const gold = await getProject("gold");

    return (
        <div className="GeneralSponsors">
            <div className="SponsorHeading">
                <PortableText value={heading.content} />
            </div>
            <div className="Diamond">{diamond.name}</div>
            <div className="LogoContainer">
                {diamond.gallery.map(
                    (item) =>
                        ({ item } && (
                            <Link
                                key={item.url}
                                href={item.altText}
                                target="_blank"
                                className="CompanyLogo"
                            >
                                <Image
                                    src={item.url}
                                    alt="Diamond"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    style={{ width: "auto", height: "100%" }}
                                />
                            </Link>
                        ))
                )}
            </div>
            <hr className="hr" />
            <div className="Platinum">{platinum.name}</div>
            <div className="LogoContainer">
                {platinum.gallery.map(
                    (item) =>
                        ({ item } && (
                            <Link
                                key={item.url}
                                href={item.altText}
                                target="_blank"
                                className="CompanyLogo"
                            >
                                <Image
                                    src={item.url}
                                    alt="Platinum"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    style={{
                                        width: "auto",
                                        height: "100%",
                                    }}
                                />
                            </Link>
                        ))
                )}
            </div>
            <hr className="hr" />
            <div className="Gold">{gold.name}</div>
            <div className="LogoContainer">
                {gold.gallery.map(
                    (item) =>
                        ({ item } && (
                            <Link
                                key={item.url}
                                href={item.altText}
                                target="_blank"
                                className="CompanyLogo"
                            >
                                <Image
                                    src={item.url}
                                    alt="Gold"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    style={{ width: "auto", height: "100%" }}
                                />
                            </Link>
                        ))
                )}
            </div>
        </div>
    );
}
