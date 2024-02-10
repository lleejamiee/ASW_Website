"use client";

import Link from "next/link";
import Image from "next/image";
import "@/app/(site)/css/navbarLayout.css";
import { useEffect, useState } from "react";
import LogoWithoutName from "@/app/(site)/assets/photos/LogoWithoutName.png";
import { fetchMemberSignupLink } from "../utill/fetchMemberSignupLink";

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [link, setLink] = useState("");

    const menuHandler = () => {
        setOpenMenu(!openMenu);
    };

    useEffect(() => {
        const fetchLink = async () => {
            const data = await fetchMemberSignupLink();
            setLink(data);
        };

        fetchLink();
    }, [link]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={scrolling ? "scrollNavbar" : "navbar"}>
            <ul className="pages">
                {scrolling && (
                    <li className="logo">
                        <Image
                            src={LogoWithoutName}
                            alt={"ASW Logo"}
                            fill={true}
                        />
                    </li>
                )}
                <li className="pagesList">
                    <Link href="/">Home</Link>
                </li>
                <li className="pagesList">
                    <Link href="/staff">Team</Link>
                </li>
                <li className="pagesList">
                    <Link href="/events">Events</Link>
                </li>
                <li className="pagesList">
                    <Link href={link} target="_blank">
                        Become a Member
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
