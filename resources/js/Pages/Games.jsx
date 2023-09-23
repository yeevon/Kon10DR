import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";
import { FiHeart } from "react-icons/fi";
import gamecard from "../../images/gamecard.jpg";

export default function Games({ auth, laravelVersion, phpVersion }) {
    const [likedGames, setLikedGames] = useState([]);

    const toggleLike = (index) => {
        if (likedGames.includes(index)) {
            setLikedGames((prev) => prev.filter((id) => id !== index));
        } else {
            setLikedGames((prev) => [...prev, index]);
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen min-w-full flex flex-col items-center justify-center">
            <Head title="Games" />
            <Navbar />
            <h1 className="text-white text-4xl mb-2">GAMES</h1>
            <h2 className="text-orange-500 text-xl mb-8">
                List of games we currently support
            </h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array.from({ length: 16 }).map((_, index) => (
                    <div
                        key={index}
                        className="relative p-4 hover:border-orange-500 transition duration-300 cursor-pointer rounded"
                        onClick={() => toggleLike(index)}
                    >
                        <FiHeart
                            className={`absolute top-2 left-2 ${
                                likedGames.includes(index)
                                    ? "text-red-500"
                                    : "text-gray-400"
                            } hover:text-red-500 transition duration-300`}
                            size={24}
                        />
                        {/* Image container with aspect ratio */}
                        <div className="flex items-center justify-center h-48 mb-2 bg-gray-800">
                            <img
                                src={gamecard}
                                alt={`Game ${index + 1}`}
                                className="max-h-full w-auto"
                            />
                        </div>
                        <div className="text-center text-white">
                            Game {index + 1}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
