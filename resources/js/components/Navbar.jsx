import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import navbarlogo2 from "../../images/navbarlogo2.png";

function Navbar() {
    // Introduce the missing state variable and its setter function
    const [nav, setNav] = useState(false);

    // Toggle the state when the menu icon is clicked
    const toggleNav = () => {
        setNav((prevState) => !prevState);
    };

    return (
        <div className="absolute w-full flex justify-between p-4 items-center">
            <img src={navbarlogo2} alt="Navbar Logo" className="w-24 z-20" />
            <HiMenuAlt3
                onClick={toggleNav}
                className="z-20 text-white cursor-pointer"
                size={25}
            />
            <div
                className={
                    nav
                        ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
                        : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
                }
            >
                <ul className="flex flex-col fixed w-full h-full items-center justify-center">
                    <li className="font-bold text-3xl p-8">PLAY</li>
                    <li className="font-bold text-3xl p-8">NEWS</li>
                    <li className="font-bold text-3xl p-8">WATCH</li>
                    <li className="font-bold text-3xl p-8">PLAYERS</li>
                    <li className="font-bold text-3xl p-8">MORE</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
