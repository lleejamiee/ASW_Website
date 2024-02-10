import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export default async function OurEvents() {
    const ourEvents = await getProject("our-events");
    const educate = await getProject("educate");
    const social = await getProject("social");
    const network = await getProject("network");

    return (
        <div className="OurEvents">
            <div className="OurEventsHeading">{ourEvents.name}</div>
            <div className="flex flex-row w-100vw h-75">
                <div className="EventTextContainer">
                    <div className="EventTypeContainer">
                        <div className="EventTypeHeading">{educate.name}</div>
                        <hr className="flex h-px bg-gray-200"></hr>
                        <div className="EventTypeContent">
                            <PortableText value={educate.content} />
                        </div>
                    </div>
                    <div className="EventTypeContainer">
                        <div className="EventTypeHeading">{social.name}</div>
                        <hr className="flex h-px bg-gray-200"></hr>
                        <div className="EventTypeContent">
                            <PortableText value={social.content} />
                        </div>
                    </div>
                    <div className="EventTypeContainer">
                        <div className="EventTypeHeading">{network.name}</div>
                        <hr className="flex h-px bg-gray-200"></hr>
                        <div className="EventTypeContent">
                            <PortableText value={network.content} />
                        </div>
                    </div>
                </div>
                <div className="EventImageContainer">
                    {ourEvents.image && (
                        <Image
                            src={ourEvents.image}
                            alt={ourEvents.name}
                            width={0}
                            height={0}
                            sizes="100%"
                            style={{ width: "100%", height: "auto" }}
                        />
                    )}
                </div>
            </div>
            <div className="PaddingLeft-5 w-fit">
                <Link href={"/events"}>
                    <button className="Button hover:Button">
                        View more events
                    </button>
                </Link>
            </div>
        </div>
    );
}
