import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { navItems } from "./navData";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
            setDropdownOpen(null);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full top-0 fixed start-0 flex flex-wrap flex-row justify-between md:justify-around items-center backdrop-blur shadow-lg transition-all duration-300
                ${scrolled ? "bg-lightGrey/60" : "bg-platinum/30"}`}
        >
            <img src={Logo} height="80px" width="120px" alt="Logo" />

            {/* Hamburger might change the toggle menu to something better*/}
            <div className="md:hidden flex items-center pr-8">
                <button
                    className="text-black focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Desktop Navbar */}
            <div className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                    <div key={item.label} className="relative">
                        <button
                            onClick={() => scrollToSection(item.href)}
                            className="text-jetBlack hover:text-blue-700 focus:outline-none"
                        >
                            {item.label}
                        </button>
                    </div>
                ))}
            </div>

            {/* Mobile Menu  */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-pink-400 bg-opacity-75 flex justify-end items-end h-100 w-50">
                    <div className="text-center space-y-4">
                        {navItems.map((item) => (
                            <div key={item.label}>
                                <button
                                    onClick={() => scrollToSection(item.href)}
                                    className="block text-gray-700 hover:text-blue-600 focus:outline-none"
                                >
                                    {item.label}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:flex">
                        <button
                            onClick={() => navigate("/signup")}
                            className="text-black font-bold bg-googleGreen hover:bg-googleRed border-2 px-6 py-0 rounded-3xl h-12 mt-2"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}

            {/* Apply Button that will direct to auth form */}
            <div className="hidden md:flex">
                <button
                    onClick={() => navigate("/signup")}
                    className="text-black font-bold bg-googleGreen hover:bg-googleRed border-2 px-6 py-0 rounded-3xl h-12 mt-2"
                >
                    Apply
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
