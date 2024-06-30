import styles from "@/src/app/(site)/css/team-page.module.css";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export function Team({ children }: Props) {
    return (
        <div className={styles["team-page"]}>
            <h1 className={styles.heading}>ASW Executives</h1>
            {children}
        </div>
    );
}
