import { useNavigate } from "react-router-dom";

export default function Content() {
    return (
        <div className='bg-jetBlack py-8 px-6 md:px-12 h-full w-full flex flex-col justify-between'>
            <Section1 />
            <Section2 />
        </div>
    );
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    );
};

const Section2 = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-6 md:mb-0'>
                <h1 className="font-extrabold text-4xl md:text-5xl pt-10 mb-4">
                    <span className="text-offWhite">&lt;</span>
                    <span className="text-googleGreen">M</span>
                    <span className="text-googleYellow">U</span>
                    <span className="text-googleRed">H</span>
                    <span className="text-googleBlue">4</span>
                    <span className="text-googleGreen">G</span>&nbsp;
                    <span className="text-offWhite">/&gt;</span>&nbsp;
                </h1>
                <h1 className="font-extrabold text-4xl md:text-5xl pt-10 mb-4">
                    <span className="text-googleGreen">G</span>
                    <span className="text-googleYellow">D</span>
                    <span className="text-googleRed">G</span>
                    <span className="text-googleBlue">C</span>&nbsp;
                    <span className="text-offWhite">at</span>&nbsp;
                    <span className="text-jasperGreen">Manhattan University</span>
                </h1>
            </div>
            <p className="text-offWhite text-sm md:text-base">©copyright</p>
        </div>
    );
};

const Nav = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-12'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-offWhite font-extrabold'>About</h3>
                <button
                    className="hover:text-googleGreen text-offWhite font-bold text-left"
                    onClick={() => navigate("/mission")}
                >
                    Our Mission
                </button>
                <button
                    className="hover:text-googleYellow text-offWhite font-bold text-left"
                    onClick={() => navigate("")}
                >
                    Contact Us
                </button>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-offWhite font-extrabold'>Social Media</h3>
                <a className="hover:text-googleRed text-offWhite font-bold" href="https://www.instagram.com/gdgc_mu/">
                    Instagram
                </a>
                <a className="hover:text-googleBlue text-offWhite font-bold" href="https://www.linkedin.com/in/GDGCManhattan">
                    Linkedin
                </a>
                <a className="hover:text-googleGreen text-offWhite font-bold" href="https://gdg.community.dev/gdg-on-campus-manhattan-college-riverdale-united-states/">
                    GDGC Website
                </a>
            </div>
        </div>
    );
};
