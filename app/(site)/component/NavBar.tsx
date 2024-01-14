"use client";

import { useState } from "react";

const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    return (
        <nav>
            <ul>
                <a href="/">
                    <li>Home</li>
                </a>
            </ul>
        </nav>
    );
};

export default NavBar;
