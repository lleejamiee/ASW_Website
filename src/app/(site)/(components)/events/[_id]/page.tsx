"use client";

import "@/src/app/(site)/css/eventPageLayout.css";
import { getEvent } from "@/sanity/sanity-utils";
import { Event } from "@/types/Events";
import { PortableText } from "@portabletext/react";
import {
    ArrowBigLeft,
    ChevronLeftCircle,
    ChevronRightCircle,
} from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import Image from "next/image";

interface EventPageProps {
    params: { _id: string };
}

const EventPage: FC<EventPageProps> = ({ params }) => {
    const [event, setEvent] = useState<Event>();
    const [activeIndex, setActiveIndex] = useState(0);
    const currentDate = moment().format("YYYY-MM-DD");
    const router = useRouter();

    const isUpcomingEvent = event && event.date >= currentDate;

    const updateIndex = (newIndex: number) => {
        const numImages = event?.gallery.length || 0;
        let newIndexAdjusted = newIndex;
    
        if (numImages === 0) return;
    
        if (newIndex < 0) {
            newIndexAdjusted = numImages - 1;
        } else if (newIndex >= numImages) {
            newIndexAdjusted = 0;
        }
    
        setActiveIndex(newIndexAdjusted);
        console.log("New activeIndex:", newIndexAdjusted); // Log the new active index
    };
    
    

    const handleClick = () => {
        router.push("/events");
    };

    useEffect(() => {
        const fetchEvent = async () => {
            const fetchedEvent = await getEvent(params._id);

            setEvent(fetchedEvent);
        };

        fetchEvent();
    }, [params._id]);

    return (
        <div>
            <div className="BackButtonContainer">
                <button
                    className="BackToEventsButton"
                    onClick={() => handleClick()}
                >
                    <ArrowBigLeft /> Back to Events
                </button>
            </div>
            <div className="CurrentEvent">
                <div className="CarouselContainer">
                <div className="CarouselInner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                        {event?.gallery.map((image, index) => (
                            <div key={image.url} className="CarouselItem">
                                <img
                                    className="CurrentImage"
                                    src={image.url}
                                    alt={"Event Image"}
                                />
                            </div>
                        ))}
                    </div>
                    {event && event?.gallery.length > 1 && (
                        <div className="CarouselButton">
                            <button
                                className="ButtonArrow"
                                onClick={() => {
                                    updateIndex(activeIndex - 1);
                                }}
                            >
                                <span>
                                    <ChevronLeftCircle />
                                </span>
                            </button>

                            <button
                                className="ButtonArrow"
                                onClick={() => {
                                    updateIndex(activeIndex + 1);
                                }}
                            >
                                <span>
                                    <ChevronRightCircle />
                                </span>
                            </button>
                        </div>
                    )}
                </div>
                <div className="EventContent">
                    <div className="CurrentEventTitle">{event?.name}</div>
                    <div className="CurrentEventDate">{event?.date}</div>
                    {event && (
                        <div className="CurrentEventDescription">
                            <span>
                                <PortableText value={event.content} />
                            </span>
                        </div>
                    )}
                    {isUpcomingEvent && (
                        <Link href={event.url} target="_blank">
                            <button className="SignUpButton">
                                Click here to sign up!
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventPage;
