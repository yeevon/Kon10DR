import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaDiscord,
} from "react-icons/fa";
import navbarlogo2 from "../../images/navbarlogo2.png";

function Footer() {
    return (
        <footer className="relative bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
                <div className="mb-4 sm:mb-0 flex items-center">
                    <img
                        src={navbarlogo2}
                        alt="Footer Logo"
                        className="w-24 h-24 object-contain"
                    />
                </div>
                <div className="flex flex-col text-center sm:text-left">
                    <p className="text-lg mb-2">
                        Every Champion was once a Kon10dr
                    </p>
                    <nav className="flex flex-wrap mb-4">
                        <a href="#" className="mr-4 hover:text-blue-500">
                            Home
                        </a>
                        <a href="#" className="mr-4 hover:text-blue-500">
                            Log In
                        </a>
                        <a href="#" className="mr-4 hover:text-blue-500">
                            Sign Up
                        </a>
                        <a href="#" className="mr-4 hover:text-blue-500">
                            Contact Us
                        </a>
                    </nav>
                    <p className="mb-2">info@kon10dr.com</p>
                    <p className="text-sm">
                        &copy; 2023 Kon10dr Esports Limited. All rights
                        reserved.
                    </p>
                </div>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                        <FaInstagram size={24} />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                        <FaFacebook size={24} />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                        <FaTwitter size={24} />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                        <FaDiscord size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
