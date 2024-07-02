"use client";

import styles from "@/src/app/(site)/(components)/events/[_id]/event-detail.module.css";
import { useState } from "react";

export default function Carousel({
    gallery,
}: {
    gallery: { url: string; altText: string }[];
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const length = gallery.length;

    function updateIndex(newIndex: number) {
        let newActiveIndex;
        if (newIndex < 0) {
            newActiveIndex = length - 1;
        } else if (newIndex >= length) {
            newActiveIndex = 0;
        } else {
            newActiveIndex = newIndex;
        }

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
                        {gallery.map((image) => (
                            <img
                                key={image.url}
                                src={image.url}
                                alt={image.altText}
                                className={styles.image}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles["button-grid"]}>
                    <button
                        onClick={() => {
                            updateIndex(activeIndex - 1);
                        }}
                    >
                        previous
                    </button>
                    <button
                        onClick={() => {
                            updateIndex(activeIndex + 1);
                        }}
                    >
                        next
                    </button>
                </div>
            </div>
        </>
    );
}
