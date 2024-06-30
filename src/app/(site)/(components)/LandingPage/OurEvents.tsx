import styles from "@/src/app/(site)/css/home-page.module.css";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function OurEvents({ children }: Props) {
    return <div className={styles["our-events"]}>{children}</div>;
}
