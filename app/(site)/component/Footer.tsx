import "@/app/(site)/css/footerLayout.css";
import Image from "next/image";
import React from "react";
import Instagram from "/app/(site)/assets/photos/Instagram.png";
import Facebook from "/app/(site)/assets/photos/Facebook.png";
import LinkedIn from "/app/(site)/assets/photos/LinkedIn.png";
import Outlook from "/app/(site)/assets/photos/Outlook.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="joinUs">
                <p className="flex">Join Us</p>
                <div className="logoContainer">
                    <div className="logo">
                        <a
                            href="https://www.instagram.com/autstemwomen/"
                            target="_blank"
                        >
                            <Image
                                src={Instagram}
                                alt="Instagram"
                                fill={true}
                            />
                        </a>
                    </div>
                    <div className="logo">
                        <a
                            href="https://www.facebook.com/autstemwomen"
                            target="_blank"
                        >
                            <Image src={Facebook} alt="Facebook" fill={true} />
                        </a>
                    </div>
                    <div className="logo">
                        <a
                            href="https://nz.linkedin.com/company/aut-stem-women"
                            target="_blank"
                        >
                            <Image src={LinkedIn} alt="LinkedIn" fill={true} />
                        </a>
                    </div>
                    <div className="logo">
                        <a href="mailto:stemwomen@outlook.com" target="_blank">
                            <Image src={Outlook} alt="Outlook" fill={true} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="poweredBy">
                <p className="flex">
                    Powered by ASW using React, TypeScript, NextJS, Sanity CMS
                </p>
                <p className="flex">
                    &copy; {currentYear} AUT STEM Women, Inc. All rights
                    reserved.
                </p>
            </div>
        </>
    );
}
