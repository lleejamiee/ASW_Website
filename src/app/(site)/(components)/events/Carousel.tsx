"use client";

import styles from "@/src/app/(site)/(components)/events/event-detail.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

export default function Carousel({
    gallery,
}: {
    gallery: { url: string; altText: string }[];
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const length = gallery?.length | 0;

    function updateIndex(newIndex: number) {
        const newActiveIndex = newIndex % length;

        setActiveIndex(newActiveIndex);
    }

    return (
        <>
            <div className={styles.left}>
                <div className={styles["carousel-container"]}>
                    <div
                        className={styles["image-container"]}
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                        }}
                    >
                        {gallery?.map((image) => (
                            <img
                                key={image.url}
                                src={image.url}
                                alt={image.altText}
                                className={styles.image}
                            />
                        ))}
                    </div>
                </div>
                {length > 1 && (
                    <div className={styles["button-grid"]}>
                        <a
                            onClick={() => {
                                updateIndex(activeIndex - 1);
                            }}
                        >
                            <ArrowBackIcon />
                        </a>

                        <a
                            className="fa fa-solid fa-arrow-right fa-2x"
                            onClick={() => {
                                updateIndex(activeIndex + 1);
                            }}
                        >
                            <ArrowForwardIcon />
                        </a>
                    </div>
                )}
            </div>
        </>
    );
}
