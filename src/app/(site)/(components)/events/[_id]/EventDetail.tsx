import styles from "@/src/app/(site)/(components)/events/[_id]/event-detail.module.css";
import { getEvent } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Carousel from "./Craousel";

export default async function EventDetails({
    params,
}: {
    params: { _id: string };
}) {
    const event = await getEvent(params._id);
    const gallery = event.gallery;

    return (
        <div className={styles["event-detail"]}>
            <h1>Back Button</h1>
            <div className={styles.grid}>
                <Carousel gallery={gallery} />
                <div className={styles.right}>
                    <h2 className={styles.name}>{event.name}</h2>
                    <p>{event.date}</p>
                    <PortableText value={event.content} />
                </div>
            </div>
        </div>
    );
}
