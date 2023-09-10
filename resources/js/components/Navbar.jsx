import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import navbarlogo2 from "../../images/navbarlogo2.png";

function Navbar() {
    const [nav, setNav] = useState(false);
    const [playSublist, setPlaySublist] = useState(false);
    const [playersSublist, setPlayersSublist] = useState(false);
    const [moreSublist, setMoreSublist] = useState(false);

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
                        <li className="font-bold text-3xl p-8 text-white">
                            <a onClick={togglePlaySublist} className="ml-4 text-blue">PLAY</a>
                        </li>
                        {playSublist && (
                          <ul className="text-orange-500 font-bold text-2xl p-2">
                            <li><a href="/">GAMES</a></li>
                            <li><a href="/">TOURNAMENTS</a></li>
                            <li><a href="/">ARENAS</a></li>
                            <li><a href="/">CHALLENGES</a></li>
                          </ul>
                        )}
                        <li className="font-bold text-3xl p-8 text-white">
                          <a href="/">NEWS</a>
                        </li>
                        <li className="font-bold text-3xl p-8 text-white">
                          <a href="/">WATCH</a>
                        </li>
                        <li className="font-bold text-3xl p-8 text-white">
                          <a onClick={togglePlayersSublist} className="ml-4 text-blue">PLAYERS</a>
                        </li>
                        {playersSublist && (
                          <ul className="text-orange-500 font-bold text-2xl p-2">
                            <li><a href="/">TEAMS</a></li>
                            <li><a href="/">FREE AGENTS</a></li>
                          </ul>
                        )}
                        <li className="font-bold text-3xl p-8 text-white">
                          <a onClick={toggleMoreSublist} className="ml-4 text-blue">MORE</a>
                        </li>
                        {moreSublist && (
                          <ul className="text-orange-500 font-bold text-2xl p-2">
                            <li><a href="/">ABOUT US</a></li>
                            <li><a href="/">TERMS OF USE</a></li>
                            <li><a href="/">PRIVACY POLICY</a></li>
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
