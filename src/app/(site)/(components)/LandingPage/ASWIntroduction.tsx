import styles from "@/src/app/(site)/css/home-page.module.css";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function ASWIntroduction({ children }: Props) {
    return <div className={styles["introduction"]}>{children}</div>;
}
