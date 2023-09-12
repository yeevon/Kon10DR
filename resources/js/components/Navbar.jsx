import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import navbarlogo2 from "../../images/navbarlogo2.png";
import NavLink from "./NavLink"

function Navbar() {
    const [nav, setNav] = useState(false);
    const [playSublist, setPlaySublist] = useState(false);
    const [playersSublist, setPlayersSublist] = useState(false);
    const [moreSublist, setMoreSublist] = useState(false);
    const navMenuStyling = "font-bold text-3xl p-6 text-orange-500";

    const toggleNav = () => {
      setNav((prevState) => !prevState);
    };

    const togglePlaySublist = () => {
      setPlaySublist((prevState) => !prevState);
    };

    const togglePlayersSublist = () => {
      setPlayersSublist((prevState) => !prevState)
    }
    
    const toggleMoreSublist = () => {
      setMoreSublist((prevState) => !prevState)
    }

    return (
        <div className="relative w-full">
            <div className="absolute flex justify-between p-4 items-center w-full">
                <img
                    src={navbarlogo2}
                    alt="Navbar Logo"
                    className="w-24 z-20"
                />
                {!nav && (
                    <HiMenuAlt3
                        onClick={toggleNav}
                        className="z-20 text-white cursor-pointer hover:bg-orange-600 transition duration-300 ease-in-out"
                        size={50}
                    />
                )}
            </div>
            {nav && (
                <div className="fixed left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-20">
                    <ul className="flex flex-col w-full h-full items-center justify-center backdrop-blur-md backdrop-filter">
                        <li className={navMenuStyling} onClick={togglePlaySublist}>PLAY</li>
                        {playSublist && (
                          <ul>
                            <li><NavLink href="/Games">GAMES</NavLink></li>
                            <li><NavLink href="/Tournaments">TOURNAMENTS</NavLink></li>
                            <li><NavLink href="/Arenas">ARENAS</NavLink></li>
                            <li><NavLink href="/Challenges">CHALLENGES</NavLink></li>
                          </ul>
                        )}
                        <li><NavLink href="/News">NEWS</NavLink></li>
                        <li><NavLink href="/Watch">WATCH</NavLink></li>
                        <li className={navMenuStyling}>
                          <div onClick={togglePlayersSublist}>PLAYERS</div>
                        </li>
                        {playersSublist && (
                          <ul>
                            <li><NavLink href="/Teams">TEAMS</NavLink></li>
                            <li><NavLink href="/FreeAgents">FREE AGENTS</NavLink></li>
                          </ul>
                        )}
                        <li className={navMenuStyling}>
                          <div onClick={toggleMoreSublist}>MORE</div>
                        </li>
                        {moreSublist && (
                          <ul>
                            <li><Link href="/AboutUs">ABOUT US</Link></li>
                            <li><NavLink href="/TermsOfUse">TERMS OF USE</NavLink></li>
                            <li><NavLink href="/PrivacyPolicy">PRIVACY POLICY</NavLink></li>
                          </ul>
                        )}
                    </ul>
                    <div className="absolute top-4 right-4 z-30">
                        <HiMenuAlt3
                            onClick={toggleNav}
                            className="text-white cursor-pointer hover:bg-orange-600 transition duration-300 ease-in-out"
                            size={50}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
