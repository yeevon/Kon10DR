import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";
import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaDiscord,
} from "react-icons/fa";
import YouTube from "react-youtube";
import Footer from "@/components/Footer";

export default function Watch({ auth, laravelVersion, phpVersion }) {
    const videoUrls = [
        "https://www.youtube.com/watch?v=M6PeXliz4qE",
        "https://www.youtube.com/watch?v=M6PeXliz4qE",
        "https://www.youtube.com/watch?v=M6PeXliz4qE",
        "https://www.youtube.com/watch?v=M6PeXliz4qE",
    ];

    const extractVideoID = (url) => {
        const match = url.match(/(v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return match ? match[2] : null;
    };

    return (
        <div className="bg-gray-900 min-h-screen min-w-full flex flex-col">
            <Head title="Watch" />
            <Navbar />
            <div className="container mx-auto px-4 py-10">
                <div className="text-center pb-10">
                    <h2 className="text-6xl font-bold mb-4 text-white">
                        WATCH
                    </h2>
                    <div className="text-center mb-8">
                        <h3 className="text-white mb-2">Share</h3>
                        <div className="flex justify-center items-center mb-4">
                            <button className="hover:bg-gray-800 p-2 rounded mr-2 transition">
                                <FaTwitter className="text-white" />
                            </button>
                            <button className="hover:bg-gray-800 p-2 rounded mr-2 transition">
                                <FaFacebook className="text-white" />
                            </button>
                            <button className="hover:bg-gray-800 p-2 rounded transition">
                                <FaLinkedin className="text-white" />
                            </button>
                        </div>
                        <p className="text-white">
                            Content!! Content!! Content!!
                        </p>
                    </div>
                </div>

                <h3 className="text-xl text-white mb-4 text-center">
                    Past Live Streams
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {videoUrls.map((url) => {
                        const videoId = extractVideoID(url);
                        return videoId ? (
                            <div className="w-full mb-6">
                                <YouTube
                                    key={videoId}
                                    videoId={videoId}
                                    opts={{
                                        height: "195",
                                        width: "100%",
                                    }}
                                    className="max-w-full sm:max-w-xs md:max-w-sm"
                                />
                            </div>
                        ) : null;
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}
