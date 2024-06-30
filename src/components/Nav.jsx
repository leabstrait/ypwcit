import React from "react";

import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

import { navLinks } from "../constants";

const Nav = () => {
    return (
        <header className="absolute padding-x py-8 z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <div className="flex items-center">
                        <img
                            src={headerLogo}
                            alt="Logo"
                            width={38}
                            height={38}
                        />
                        <span className="ml-1 font-lato font-bold">YPWCTI</span>
                    </div>
                </a>
                <ul className="flex flex-1 justify-end items-center gap-16 max-lg:hidden">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="font-lato leading-normal text-lg text-slate-600"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img
                        src={hamburger}
                        alt="Nav Menu"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Nav;
