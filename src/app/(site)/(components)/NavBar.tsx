"use client";

import Link from "next/link";
import Image from "next/image";
import "@/src/app/(site)/css/navbarLayout.css";
import { useEffect, useState } from "react";
import LogoWithoutName from "@/src/app/(site)/assets/photos/LogoWithoutName.png";
import { fetchMemberSignupLink } from "../util/fetchMemberSignupLink";
import { Menu } from "lucide-react";

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [link, setLink] = useState("");

    const menuHandler = () => {
        setOpenMenu(!openMenu);
        console.log(openMenu);
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

        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {!isMobile && (
                <div className={scrolling ? "scrollNavbar" : "navbar"}>
                    <ul className={scrolling ? "scrollPages" : "pages"}>
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
                            <Link href="/team">Team</Link>
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
            )}
            {isMobile && (
                <div className={"scrollNavbar"}>
                    <div className="logo">
                        <Image
                            src={LogoWithoutName}
                            alt={"ASW Logo"}
                            fill={true}
                        />
                    </div>
                    <button className="menu" onClick={() => menuHandler()}>
                        <Menu />
                    </button>
                    {openMenu && (
                        <ul className={`overlay ${openMenu ? "show" : ""}`}>
                            <li className="list" onClick={() => menuHandler()}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className="list" onClick={() => menuHandler()}>
                                <Link href="/team">Team</Link>
                            </li>
                            <li className="list" onClick={() => menuHandler()}>
                                <Link href="/events">Events</Link>
                            </li>
                            <li className="list" onClick={() => menuHandler()}>
                                <Link href={link} target="_blank">
                                    Become a Member
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            )}
        </>
    );
};

export default NavBar;
