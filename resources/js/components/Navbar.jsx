import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import navbarlogo2 from "../../images/navbarlogo2.png";

function Navbar() {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav((prevState) => !prevState);
    };

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
                            PLAY
                        </li>
                        <li className="font-bold text-3xl p-8 text-white">
                            NEWS
                        </li>
                        <li className="font-bold text-3xl p-8 text-white">
                            WATCH
                        </li>
                        <li className="font-bold text-3xl p-8 text-white">
                            PLAYERS
                        </li>
                        <li className="font-bold text-3xl p-8 text-white">
                            MORE
                        </li>
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
