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
        <>
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

                <div className="md:hidden">
                    <button
                        className="text-gray-700"
                        onClick={menuHandler}
                        aria-label="Menu"
                    >
                        {openMenu ? <Menu /> : <Menu />}
                    </button>
                </div>
            </div>
            {openMenu ? (
                <div
                    onClick={menuHandler}
                    className="h-screen w-screen absolute top-0 left-0 z-10"
                ></div>
            ) : null}
        </>
    );
};

export default NavBar;
