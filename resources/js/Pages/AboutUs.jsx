import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";
import aboutus1stimage from "../../images/aboutus1stimage.jpeg";
import Sidney from "../../images/Sidney.jpeg";
import Aboutus from "../../images/Aboutus.png";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";

export default function AboutUs({ auth, laravelVersion, phpVersion }) {
    return (
        <div className="bg-gray-900 min-h-screen min-w-full flex flex-col">
            <Head title="About Us" />
            <Navbar />
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row m-10 p-4 items-center">
                    <div className="text-white mb-6 md:mb-0 md:mr-6 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                        <h2 className="text-6xl font-bold mb-4">
                            PASSIONATE & COMMITED
                        </h2>
                        <p className="text-2xl">
                            We are building an all-inclusive platform for
                            gamers. Our team of esports experts provide the
                            latest news, exciting tournaments, engaging content,
                            and a seamless shopping experience for gaming and
                            esports items. Join our team and help us take
                            esports to new heights!
                        </p>
                    </div>
                    <img
                        src={aboutus1stimage}
                        alt="about us"
                        className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mt-6 md:mt-0 rounded shadow-lg"
                    />
                </div>
            </div>
            <div className="bg-orange-400">
                <div className="container mx-auto flex flex-col items-center md:flex-row m-10 p-4 md:items-center">
                    <div className="font-bold text-white text-4xl mb-6 md:mb-0 md:mr-6">
                        OUR VALUES
                    </div>

                    <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-4 sm:space-y-0">
                        <div className="flex flex-col space-y-4">
                            <Box
                                title="INNOVATION AND EXCELLENCE:"
                                description="We embrace innovation to drive the esports industry forward and constantly strive for excellence in everything we do."
                            />
                            <Box
                                title="EMPOWERMENT AND GROWTH:"
                                description="We empower gamers to unlock their full potential, supporting their personal and professional growth through skill development, mentorship, and opportunities to succeed."
                            />
                            <Box
                                title="ENGAGING AND IMMERSIVE EXPERIENCES:"
                                description="We create engaging and immersive experiences that captivate and thrill gamers, providing memorable moments and unforgettable adventures."
                            />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <Box
                                title="PASSION FOR GAMING:"
                                description="We are fueled by our shared passion for gaming and are committed to creating an environment that honors and celebrates the love for the game."
                            />
                            <Box
                                title="COMMUNITY AND INCLUSIVITY:"
                                description="We foster a vibrant and inclusive community that celebrates diversity, encourages collaboration, and provides a safe space for gamers to connect and grow."
                            />
                            <Box
                                title="INTEGRITY AND FAIR PLAY:"
                                description="We uphold the highest standards of integrity, promoting fair play, sportsmanship, and ethical conduct in all our tournaments and interactions."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col m-10 p-4 items-center">
                    <div className="text-white mb-6 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                        <h2 className="text-6xl font-bold mb-4">OUR TEAM</h2>
                        <p className="text-2xl">
                            Meet the amazing people behind the product.
                        </p>
                    </div>
                    <div className="relative w-2/3 md:w-1/4 lg:w-1/5 xl:w-1/6 mt-6 rounded shadow-lg">
                        <img
                            src={Sidney}
                            alt="Sidney"
                            className="w-full h-full rounded"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gray-700 bg-opacity-80 text-white p-2 rounded-b">
                            <p className="font-bold">SIDNEY ESIRI</p>
                            <p>Founder/CEO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-orange-400">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row m-10 p-4 items-center">
                        <div className="text-white mb-6 md:mb-0 md:mr-6 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                            <h2 className="text-6xl font-bold mb-4">
                                OUR VISION
                            </h2>
                            <p className="text-2xl">
                                "To be the premier online platform that
                                revolutionizes the esports industry, empowering
                                gamers to realize their full potential and
                                connect with a global community driven by
                                passion, competition, and unparalleled gaming
                                experiences."
                            </p>
                        </div>
                        <img
                            src={Aboutus}
                            alt="Our vision"
                            className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mt-6 md:mt-0 rounded shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row m-10 p-4 items-center">
                    <div className="text-white mb-6 md:mb-0 md:mr-6 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                        <h2 className="text-6xl font-bold mb-4">
                            mission Statement:
                        </h2>
                        <p className="text-2xl">
                            "Our mission is to create an inclusive and dynamic
                            online environment where gamers of all levels can
                            thrive. We aim to provide top-notch esports news,
                            cutting-edge tournaments, and a platform for gamers
                            to connect, compete, and excel. Through our
                            dedication to innovation, integrity, and
                            community-building, we strive to elevate the esports
                            landscape, nurture talent, and foster a new
                            generation of esports champions."
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 ease-in-out px-5 py-4 rounded-full border-none">
                            JOIN US
                        </button>
                    </div>
                    <img
                        src={Aboutus}
                        alt="Our vision"
                        className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mt-6 md:mt-0 rounded shadow-lg"
                    />
                </div>
            </div>
            <div className="bg-orange-400">
                <div className="container mx-auto py-8 flex items-center justify-center">
                    <form className="bg-gray-900 p-6 rounded-md flex-grow">
                        <div className="flex flex-wrap -mx-2 mb-4">
                            {/* First Name Input */}
                            <div className="w-1/2 px-2">
                                <label
                                    className="block text-white mb-2"
                                    htmlFor="firstName"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    className="w-full p-2 border-2 border-blue-500 bg-gray-700 rounded-md"
                                />
                            </div>
                            {/* Last Name Input */}
                            <div className="w-1/2 px-2">
                                <label
                                    className="block text-white mb-2"
                                    htmlFor="lastName"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Last Name"
                                    className="w-full p-2 border-2 border-blue-500 bg-gray-700 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-2 mb-4">
                            {/* Email Input */}
                            <div className="w-1/2 px-2">
                                <label
                                    className="block text-white mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email Address"
                                    className="w-full p-2 border-2 border-blue-500 bg-gray-700 rounded-md"
                                />
                            </div>
                            {/* Phone Input */}
                            <div className="w-1/2 px-2">
                                <label
                                    className="block text-white mb-2"
                                    htmlFor="phone"
                                >
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Phone Number"
                                    className="w-full p-2 border-2 border-blue-500 bg-gray-700 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            {/* Subject Input */}
                            <label
                                className="block text-white mb-2"
                                htmlFor="subject"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                                className="w-full p-2 border-2 border-blue-500 bg-gray-700 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            {/* Message Input */}
                            <label
                                className="block text-white mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Type your message..."
                                className="w-full p-2 border-2 border-blue-500 bg-gray-700 rounded-md"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600"
                        >
                            Submit
                        </button>
                    </form>
                    <div className="ml-8">
                        <h2 className="text-5xl font-bold text-white">
                            Have a question for us?
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <FAQItem />
            </div>
            <Footer />
        </div>
    );
}

function Box({ title, description }) {
    return (
        <div className="bg-gray-900 p-4 w-[217px] h-[290px] lg:w-[354px] lg:h-[184px] xl:w-[530px] xl:h-[157] flex flex-col justify-between rounded-xl">
            <h3 className="text-white font-bold mb-2 text-lg">{title}</h3>
            <p className="text-white text-sm">{description}</p>
        </div>
    );
}
