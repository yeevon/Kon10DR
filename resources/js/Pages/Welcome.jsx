import { Link, Head } from "@inertiajs/react";
import dashboard2 from "../../images/dashboard2.jpeg";
import gamingController from "../../images/gamingController.jpg";
import Navbar from "@/components/Navbar";
import navbarlogo2 from "../../images/navbarlogo2.png";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <div className="w-full g-screen">
                <img
                    className="top-0 left-0 w-full h-screen object-cover"
                    src={dashboard2}
                    alt="dashboard"
                />
                <div className="bg-black/30 absolute top-0 left-o w-full h-screen" />
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                    <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
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
                        <button className="bg-orange-500">Sign Up</button>
                        <button>Login</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 m-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-start space-y-8 lg:space-y-0 lg:space-x-8">
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
                        <p className="text-white text-center">Paid to gamers</p>
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
                        We are dedicated to empowering gamers and providing them
                        with opportunities to not only showcase their skills but
                        also earn substantial rewards. Our commitment to
                        fostering a thriving gaming community drives us to
                        create lucrative tournaments and events where gamers can
                        compete at the highest level and have a chance to earn
                        significant monetary rewards. Whether you're a casual
                        gamer or a professional esports athlete, we believe in
                        your potential and are here to support you on your
                        journey to success. Join us today and unlock the
                        possibilities of earning money doing what you love.
                    </div>
                </div>
            </div>
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
