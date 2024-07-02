import styles from "@/src/app/(site)/(components)/Footer/footer.module.css";
import Instagram from "@/src/app/(site)/assets/photos/instagram.svg";
import Facebook from "@/src/app/(site)/assets/photos/Facebook.svg";
import LinkedIn from "@/src/app/(site)/assets/photos/Square-LinkedIn.svg";
import Email from "@/src/app/(site)/assets/photos/Email.svg";
import Image from "next/image";

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
                        <Image
                            src={Instagram}
                            alt="Instagram"
                            height={40}
                            width={40}
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/autstemwomen"
                        target="_blank"
                    >
                        <Image
                            src={Facebook}
                            alt="Facebook"
                            height={40}
                            width={40}
                        />
                    </a>
                    <a
                        href="https://nz.linkedin.com/company/aut-stem-women"
                        target="_blank"
                    >
                        <Image
                            src={LinkedIn}
                            alt="LinkedIn"
                            height={40}
                            width={40}
                        />
                    </a>
                    <a href="mailto:stemwomen@outlook.com" target="_blank">
                        <Image src={Email} alt="Email" height={40} width={40} />
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
