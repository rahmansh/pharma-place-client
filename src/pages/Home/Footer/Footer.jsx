import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12 px-5">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-2xl font-semibold">PharmaPlace</h2>
                    <p className="text-sm mt-2">Your trusted online pharmacy for all your health needs</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 mb-8 md:mb-0">
                    <ul className="flex flex-col items-center md:items-start">
                        <li><a href="/" className="text-sm text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="/about" className="text-sm text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
                        <li><a href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a></li>
                    </ul>

                    <ul className="flex gap-4">
                        <li>
                            <a href="#" className="text-xl text-gray-400 hover:text-white">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-xl text-gray-400 hover:text-white">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-xl text-gray-400 hover:text-white">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-xl text-gray-400 hover:text-white">
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-gray-700 py-4 text-center mt-4">
                <p className="text-sm text-gray-300">© 2025 PharmaPlace. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
