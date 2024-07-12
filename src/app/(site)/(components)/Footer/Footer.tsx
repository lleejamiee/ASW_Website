import styles from "@/src/app/(site)/(components)/Footer/footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className={styles["follow-us"]}>
                <p style={{ fontSize: "larger" }}>Follow Us</p>
                <div>
                    <a
                        href="https://www.instagram.com/autstemwomen/"
                        target="_blank"
                    >
                        <InstagramIcon
                            sx={{ color: "black" }}
                            fontSize={"large"}
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/autstemwomen"
                        target="_blank"
                    >
                        <FacebookIcon
                            sx={{ color: "black" }}
                            fontSize={"large"}
                        />
                    </a>
                    <a
                        href="https://nz.linkedin.com/company/aut-stem-women"
                        target="_blank"
                    >
                        <LinkedInIcon
                            sx={{ color: "black" }}
                            fontSize={"large"}
                        />
                    </a>
                    <a href="mailto:stemwomen@outlook.com" target="_blank">
                        <MailIcon sx={{ color: "black" }} fontSize={"large"} />
                    </a>
                </div>

                <p style={{ fontSize: "small" }}>
                    &copy; {currentYear} AUT STEM Women
                </p>
            </div>
        </footer>
    );
}
