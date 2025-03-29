import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { navItems } from "./navData";
import Dino from "../assets/dino.gif";
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
            className={`z-50 w-full top-0 fixed start-0 flex flex-wrap flex-row justify-between md:justify-around items-center backdrop-blur shadow-lg transition-all duration-300
                ${scrolled ? "bg-lightGrey/60" : "bg-platinum/30"}`}
        >
            <button onClick={() => window.location.replace("/#home")}>
                <img src={Logo} height="80px" width="120px" alt="Logo" />
            </button>


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
            <div className="hidden md:flex space-x-6 z-50 top-0">
                {navItems.map((item) => (
                    <div key={item.label} className="relative">
                        <button
                            onClick={() => window.location.replace(item.href)}
                            className="text-jetBlack hover:text-blue-700 focus:outline-none z-50 top-0"
                        >
                            {item.label}
                        </button>
                    </div>
                ))}
            </div>

            {/* Mobile Menu  */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 top-25 mx-4 rounded-3xl backdrop-blur shadow-lg bg-lightGrey/60 bg-opacity-75 flex h-fit w-max-full py-20 justify-center z-50">
                    <div className="text-center items-center space-y-4 pt-8 font-bold ">
                        {navItems.map((item) => (
                            <div key={item.label}>
                                <button
                                    onClick={() => scrollToSection(item.href)}
                                    className="block text-jetBlack border-2 bg-white py-2 w-40 rounded-2xl hover:text-blue-600 focus:outline-none"
                                >
                                    {item.label}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:flex">
                        <button
                            onClick={() => navigate("/signup")}
                            className="text-black font-bold bg-googleGreen hover:bg-googleRed border-2 px-6 py-0 rounded-3xl h-10"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}
            {/* <div className="hidden md:flex">
                <button
                    onClick={() => navigate("/signup")}
                    className="text-black font-bold bg-googleGreen hover:bg-googleRed border-2 px-6 py-0 rounded-3xl h-12 mt-2"
                >
                    Apply
                </button>
            </div> */}
            <div className="hidden md:flex z-50 top-0">
                <img src={Dino} width="50" />
            </div>
        </nav>
    );
};

export default Navbar;
