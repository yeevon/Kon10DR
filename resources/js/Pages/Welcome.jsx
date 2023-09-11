import { Link, Head } from "@inertiajs/react";
import dashboard2 from "../../images/dashboard2.jpeg";
import gamingController from "../../images/gamingController.jpg";
import Navbar from "@/components/Navbar";
import navbarlogo2 from "../../images/navbarlogo2.png";
import carousalimage from "../../images/carousalimage.jpg";
import carousalimage2 from "../../images/carousalimage2.jpg";
import carousalimage3 from "../../images/carousalimage3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "@/components/Footer";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
    };

    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <div
                className="fixed top-0 left-0 w-full h-screen bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${dashboard2})` }}
            >
                <div className="bg-black/30 w-full h-full" />
            </div>
            <div className="relative z-10 pt-screen">
                {" "}
                {/* pt-screen ensures content starts below the viewport */}
                <div className="w-full h-screen flex flex-col justify-center text-white">
                    <div className="md:left-[10%] max-w-[1100px] m-auto p-4">
                        <p style={{ color: "#d97706" }}>
                            Your Ultimate Esports Destination
                        </p>
                        <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
                            KON10dr.com
                        </h1>
                        <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
                            Every Champion was once a Kon10dr so start your
                            Esports career here
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 ease-in-out px-4 py-2 rounded-full border-none">
                            Sign Up
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out px-4 py-2 border border-gray-800 rounded-full">
                            Login
                        </button>
                    </div>
                </div>
                <div className="bg-gray-900 px-4 py-12 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="relative overflow-hidden rounded-lg mb-4 lg:mb-0">
                        <img
                            src={gamingController}
                            alt="Controller"
                            className="object-cover rounded-lg border-2 border-purple-500 hover:border-purple-600 transition duration-500 ease-in-out w-96 h-96"
                        />
                        <div className="absolute bottom-10 left-10 bg-black/40 p-1 rounded-lg">
                            <span className="text-white font-bold text-5xl md:text-7xl drop-shadow-2xl">
                                N50M+
                            </span>
                            <p className="text-white text-center">
                                Paid to gamers
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <img
                            src={navbarlogo2}
                            alt="Logo"
                            className="w-24 h-auto mb-2"
                        />
                        <p className="text-white font-bold text-3xl">
                            WE MAKE IT RAIN!!
                        </p>
                        <div className="flex-1 text-white p-6 max-w-xl">
                            We are dedicated to empowering gamers and providing
                            them with opportunities to not only showcase their
                            skills but also earn substantial rewards. Our
                            commitment to fostering a thriving gaming community
                            drives us to create lucrative tournaments and events
                            where gamers can compete at the highest level and
                            have a chance to earn significant monetary rewards.
                            Whether you're a casual gamer or a professional
                            esports athlete, we believe in your potential and
                            are here to support you on your journey to success.
                            Join us today and unlock the possibilities of
                            earning money doing what you love.
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-10 pt-20 p-4 flex flex-col items-center">
                <div className="bg-opacity-60 p-20 rounded-lg text-center backdrop-blur-sm border border-blue-500">
                    <h2 className="text-3xl mb-4 text-white font-bold">
                        Never miss a beat.
                    </h2>
                    <p className="mb-6 text-white">
                        Sign up for our newsletter and get access to the best
                        things first.
                    </p>
                    <form className="inline-flex items-center border-2 border-orange-500 rounded-full py-1 w-full mx-auto bg-black bg-opacity-60 p-2 backdrop-blur-sm">
                        <input
                            type="email"
                            placeholder="e.g. name@site.com"
                            className="flex-grow p-3 text-white outline-none focus:outline-none focus:ring-0 border-0 rounded-l-full bg-black bg-opacity-0 "
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 hover:text-black transition duration-300 ease-in-out px-2 sm:px-4 py-3 border-none rounded-full"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>

            <div className="relative bg-gray-900 px-4 py-12 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
                <div className="flex flex-col items-center space-y-4 lg:flex-grow lg:pr-8">
                    <img
                        src={navbarlogo2}
                        alt="Logo"
                        className="w-24 h-auto mb-2"
                    />
                    <p className="text-white font-bold text-3xl relative">
                        Here at kon10dr...
                    </p>
                    <div className="flex-1 text-white p-6 max-w-xl relative">
                        ...we are passionate about esports and committed to
                        providing an all-inclusive platform for gamers. Our team
                        of esports experts brings you the latest news, exciting
                        tournaments, engaging content, and a seamless shopping
                        experience for gaming and esports items. Join our
                        vibrant community and take your esports journey to new
                        heights!
                    </div>
                    <button className="relative bg-orange-500 hover:bg-orange-600 hover:text-black transition duration-300 ease-in-out px-2 sm:px-4 py-3 rounded-full border-none">
                        Get Started
                    </button>
                </div>
                <div className="relative overflow-hidden rounded-lg mb-4 lg:mb-0 w-full lg:w-1/3 px-4">
                    <Slider {...settings}>
                        <div className="relative">
                            <img
                                src={carousalimage3}
                                alt="Controller"
                                className="cursor-pointer object-cover rounded-lg shadow-lg border-2 border-purple-500 hover:border-purple-600 transition-transform duration-500 ease-in-out w-96 h-96 transform perspective-1000 rotateY-0"
                            />

                            <div className="absolute bottom-2 left-2 bg-black/40 p-1 rounded-lg z-50">
                                <span className="text-white font-bold text-5xl md:text-7xl drop-shadow-2xl">
                                    15,000
                                </span>
                                <p className="text-white text-center">
                                    Community Members
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={carousalimage}
                                alt="New Image"
                                className="cursor-pointer object-cover rounded-lg border-2 border-purple-500 hover:border-purple-600 transition duration-500 ease-in-out w-96 h-96"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/40 p-1 rounded-lg z-50">
                                <span className="text-white font-bold text-5xl md:text-7xl drop-shadow-2xl">
                                    2021
                                </span>
                                <p className="text-white text-center">
                                    FOUNDED
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={carousalimage2}
                                alt="New Image"
                                className="cursor-pointer object-cover rounded-lg border-2 border-purple-500 hover:border-purple-600 transition duration-500 ease-in-out w-96 h-96"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/40 p-1 rounded-lg z-50">
                                <span className="text-white font-bold text-5xl md:text-7xl drop-shadow-2xl">
                                    30,000
                                </span>
                                <p className="text-white text-center">
                                    Something Else
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="relative py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                            Get started for free
                        </h2>
                        <p className="text-base text-white font-bold tracking-wide uppercase ">
                            Start for free and scale for a good price.
                        </p>
                    </div>

                    <div className="mt-10 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
                        {/* Standard Plan */}
                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden border-2 border-blue-500 bg-gray-900">
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-white">
                                        Standard
                                    </h3>
                                    <ul className="mt-3 text-base leading-6 text-gray-400">
                                        <li>Get access to the site</li>
                                        <li>Host and Compete in Tournaments</li>
                                        <li>
                                            Stay Updated with Latest Esports
                                            News
                                        </li>
                                        <li>Dive into Esports Content</li>
                                        <li>
                                            Shop for Gaming and Esports Items
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <span className="text-3xl leading-8 font-bold text-white">
                                        Free
                                    </span>
                                    <span className="text-base leading-6 font-medium text-gray-500">
                                        Forever!
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <button className="w-full bg-orange-500 hover:bg-orange-600 hover:text-black transition duration-300 ease-in-out px-2 sm:px-4 py-3 border-none rounded-full">
                                        Choose Plan
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Premium Plan */}
                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden border-2 border-blue-500 bg-gray-900">
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-white">
                                        Premium
                                    </h3>
                                    <p className="mt-3 text-base leading-6 text-red-500">
                                        (coming soon)
                                    </p>
                                    <ul className="mt-3 text-base leading-6 text-gray-400">
                                        <li>Access to premium tournaments</li>
                                        <li>
                                            Higher rewards, including KEC Points
                                            and our unique currency
                                        </li>
                                        <li>
                                            Exclusive Merchandise and Discounts
                                        </li>
                                        <li>
                                            Additional customization options for
                                            their profiles, including unique
                                            badges, avatars
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <span className="text-3xl leading-8 font-bold text-white">
                                        TBD
                                    </span>
                                    <span className="text-base leading-6 font-medium text-gray-500">
                                        /mo billed monthly
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <button className="w-full bg-orange-500 hover:bg-orange-600 hover:text-black transition duration-300 ease-in-out px-2 sm:px-4 py-3 border-none rounded-full">
                                        Choose Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

{
    /* <div
                className="bg-cover bg-center h-96"
                style={{ backgroundImage: `url(${dashboard2})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="flex justify-center items-center h-full">
                    <div className="p-10 w-100 h-120 bg-white bg-opacity-40 backdrop-blur-md border border-blue-500 rounded text-center">
                        <h2 className="text-orange-600 mb-4">
                            Your Ultimate Esports Destination
                        </h2>
                        <p className="text-white text-xl mb-4">KON10dr.com</p>
                        <p className="text-white">
                            Every Champion was once a Kon10dr so start your
                            Esports career here
                        </p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div> */
}
