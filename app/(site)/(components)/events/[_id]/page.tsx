"use client";

import "@/app/(site)/css/eventPageLayout.css";
import { getEvent } from "@/sanity/sanity-utils";
import { Event } from "@/types/Events";
import { FC, useEffect, useState } from "react";

interface EventPageProps {
    params: { _id: string };
}

const EventPage: FC<EventPageProps> = ({ params }) => {
    const [event, setEvent] = useState<Event>();
    let slideIndex = 1;

    showSlides(slideIndex);

    function plusSlides(n: number) {
        showSlides((slideIndex += n));
    }

    function currentSlide(n: number) {
        showSlides((slideIndex = n));
    }

    function showSlides(n: number) {
        let slides: HTMLCollectionOf<HTMLDivElement> =
            document.getElementsByClassName(
                "myCarousel"
            ) as HTMLCollectionOf<HTMLDivElement>;

        if (slides.length === 0) {
            return;
        }

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
        }
    }

    useEffect(() => {
        const fetchEvent = async () => {
            const fetchedEvent = await getEvent(params._id);

            setEvent(fetchedEvent);
        };

        fetchEvent();
    }, [params._id]);

    return (
        <div className="Background">
            <div className="Heading">{event?.name}</div>
            <div className="Container">
                <div className="CarouselContainer fade">
                    {event?.gallery ? (
                        event?.gallery.map((image) => <img src={image.url} />)
                    ) : (
                        <div>Nothing</div>
                    )}
                </div>

                {event?.gallery && event?.gallery.length > 1 ? (
                    <>
                        <a className="prev" onClick={() => plusSlides(-1)}>
                            &#10094;
                        </a>
                        <a className="next" onClick={() => plusSlides(1)}>
                            &#10095;
                        </a>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default EventPage;
