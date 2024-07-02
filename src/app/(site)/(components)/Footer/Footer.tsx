import styles from "@/src/app/(site)/(components)/Footer/footer.module.css";
import Instagram from "@/src/app/(site)/assets/photos/instagram.svg";
import Facebook from "@/src/app/(site)/assets/photos/Facebook.svg";
import LinkedIn from "@/src/app/(site)/assets/photos/Square-LinkedIn.svg";
import Email from "@/src/app/(site)/assets/photos/Email.svg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className={styles["follow-us"]}>
                <p>Follow Us</p>
                <div>
                    <a
                        href="https://www.instagram.com/autstemwomen/"
                        target="_blank"
                    >
                        {insertImage(Instagram, "Instagram")}
                    </a>
                    <a
                        href="https://www.facebook.com/autstemwomen"
                        target="_blank"
                    >
                        {insertImage(Facebook, "Facebook")}
                    </a>
                    <a
                        href="https://nz.linkedin.com/company/aut-stem-women"
                        target="_blank"
                    >
                        {insertImage(LinkedIn, "LinkedIn")}
                    </a>
                    <a href="mailto:stemwomen@outlook.com" target="_blank">
                        {insertImage(Email, "Email")}
                    </a>
                </div>
            </div>
            <div className={styles["powered-by"]}>
                <p>
                    Powered by ASW using React, TypeScript, NextJS, Sanity CMS
                </p>
                <p>&copy; {currentYear} AUT STEM Women</p>
            </div>
        </footer>
    );
}

function insertImage(image: string | StaticImport, name: string) {
    return <Image src={image} alt={name} height={40} width={40} />;
}
