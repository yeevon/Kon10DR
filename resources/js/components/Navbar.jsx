import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import navbarlogo2 from "../../images/navbarlogo2.png";
import NavLink from "./NavLink";

function Navbar() {
    const [nav, setNav] = useState(false);
    const [playSublistVisible, setPlaySublistVisible] = useState(false);
    const [playersSublistVisible, setPlayersSublistVisible] = useState(false);
    const [moreSublistVisible, setMoreSublistVisible] = useState(false);

    const navMenuStyling = "font-bold text-3xl p-6 text-orange-500";

    const toggleState = (setter) => () => setter((prevState) => !prevState);

    return (
        <div className="relative w-full">
            <div className="flex justify-between items-center p-4 h-16 bg-black/90">
                <img
                    src={navbarlogo2}
                    alt="Navbar Logo"
                    className="w-24 z-20 cursor-pointer"
                    onClick={() => {
                        window.location.href = "/";
                    }}
                />
                {!nav && (
                    <HiMenuAlt3
                        onClick={toggleState(setNav)}
                        className="z-20 text-white cursor-pointer hover:bg-orange-600 transition duration-300 ease-in-out"
                        size={50}
                    />
                )}
            </div>

            {nav && (
                <div className="fixed left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-20">
                    <ul className="flex flex-col w-full h-full items-center justify-center backdrop-blur-md backdrop-filter">
                        <li
                            className={navMenuStyling}
                            onClick={toggleState(setPlaySublistVisible)}
                        >
                            PLAY
                        </li>
                        {playSublistVisible && <PlaySublist />}

                        <li>
                            <NavLink href="/News">NEWS</NavLink>
                        </li>
                        <li>
                            <NavLink href="/Watch">WATCH</NavLink>
                        </li>

                        <li
                            className={navMenuStyling}
                            onClick={toggleState(setPlayersSublistVisible)}
                        >
                            PLAYERS
                        </li>
                        {playersSublistVisible && <PlayersSublist />}

                        <li
                            className={navMenuStyling}
                            onClick={toggleState(setMoreSublistVisible)}
                        >
                            MORE
                        </li>
                        {moreSublistVisible && <MoreSublist />}
                    </ul>

                    <div className="absolute top-4 right-4 z-30">
                        <HiMenuAlt3
                            onClick={toggleState(setNav)}
                            className="text-white cursor-pointer hover:bg-orange-600 transition duration-300 ease-in-out"
                            size={50}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

const PlaySublist = () => (
    <ul>
        <li>
            <NavLink href="/Games">GAMES</NavLink>
        </li>
        <li>
            <NavLink href="/Tournaments">TOURNAMENTS</NavLink>
        </li>
        <li>
            <NavLink href="/Arenas">ARENAS</NavLink>
        </li>
        <li>
            <NavLink href="/Challenges">CHALLENGES</NavLink>
        </li>
    </ul>
);

const PlayersSublist = () => (
    <ul>
        <li>
            <NavLink href="/Teams">TEAMS</NavLink>
        </li>
        <li>
            <NavLink href="/FreeAgents">FREE AGENTS</NavLink>
        </li>
    </ul>
);

const MoreSublist = () => (
    <ul>
        <li>
            <NavLink href="/AboutUs">ABOUT US</NavLink>
        </li>
        <li>
            <NavLink href="/TermsOfUse">TERMS OF USE</NavLink>
        </li>
        <li>
            <NavLink href="/PrivacyPolicy">PRIVACY POLICY</NavLink>
        </li>
    </ul>
);

export default Navbar;
