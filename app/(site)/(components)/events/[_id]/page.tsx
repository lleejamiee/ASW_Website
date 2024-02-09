"use client";

import "@/app/(site)/css/eventPageLayout.css";
import { getEvent } from "@/sanity/sanity-utils";
import { Event } from "@/types/Events";
import { PortableText } from "@portabletext/react";
import {
    ArrowBigLeft,
    ChevronLeftCircle,
    ChevronRightCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, useContext, useEffect, useState } from "react";
import { EventsPropsContext } from "../EventsContext";

interface EventPageProps {
    params: { _id: string };
}

const EventPage: FC<EventPageProps> = ({ params }) => {
    const [event, setEvent] = useState<Event>();
    const [activeIndex, setActiveIndex] = useState(0);
    const { state } = useContext(EventsPropsContext);
    const router = useRouter();

    console.log(state.isUpcomingEvent);

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
    };

    const handleClick = () => {
        router.push("/events");
    };

    useEffect(() => {
        console.log("isUpcomingEvent: ", state.isUpcomingEvent);
        const fetchEvent = async () => {
            const fetchedEvent = await getEvent(params._id);

            setEvent(fetchedEvent);
        };

        fetchEvent();
    }, [params._id, state]);

    return (
        <div className="Background">
            <button
                className="BackToEventsButton"
                onClick={() => handleClick()}
            >
                <ArrowBigLeft /> Back to Events
            </button>
            <div className="Container">
                <div className="SideContainer">
                    <div className="CarouselContainer">
                        <div
                            className="Inner"
                            style={{
                                transform:
                                    "translate(-" + activeIndex * 100 + "%)",
                            }}
                        >
                            {event?.gallery.map((image) => (
                                <div className="CarouselItem">
                                    <img
                                        className="CarouselImg"
                                        src={image.url}
                                    />
                                </div>
                            ))}
                        </div>
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
                <div className="EventDetail">
                    <div className="Heading">{event?.name}</div>
                    <div className="Date">{event?.date}</div>
                    {event && (
                        <div className="Description">
                            <p>
                                <PortableText value={event.content} />
                            </p>
                        </div>
                    )}
                    {state.isUpcomingEvent && (
                        <button className="SignUpButton">
                            Click here to sign up!
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventPage;
