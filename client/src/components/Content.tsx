import { useNavigate } from "react-router-dom"

export default function Content() {
    return (
        <div className='bg-jetBlack py-8 px-12 h-full w-full flex flex-col justify-between'>
            <Section1 />
            <Section2 />
        </div>
    )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <div>
                <h1 className="font-extrabold text-5xl pt-10 mb-10">
                    <span className="text-offWhite">&lt;</span>
                    <span className="text-googleGreen">M</span>
                    <span className="text-googleYellow">U</span>
                    <span className="text-googleRed">H</span>
                    <span className="text-googleBlue">4</span>
                    <span className="text-googleGreen">G</span>&nbsp;
                    <span className="text-offWhite">/&gt;</span>&nbsp;
                </h1>
                <h1 className="font-extrabold text-5xl pt-10 mb-10">
                    <span className="text-googleGreen">G</span>
                    <span className="text-googleYellow">D</span>
                    <span className="text-googleRed">G</span>
                    <span className="text-googleBlue">C</span>&nbsp;
                    <span className="text-offWhite">at</span>&nbsp;
                    <span className="text-jasperGreen">Manhattan University</span>
                </h1>
            </div>
            <p className="text-offWhite">©copyright</p>

        </div>
    )
}

const Nav = () => {
    const navigate = useNavigate();
    return (
        <div className='flex shrink-0 gap-30'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-offWhite font-extrabold'>About</h3>
                <a className="hover:text-googleGreen text-offWhite font-bold" onClick={() => navigate("")}>Our Mission</a>
                <a className="hover:text-googleYellow text-offWhite font-bold" onClick={() => navigate("")}>Contact Us</a>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-offWhite font-extrabold'>Social Media</h3>
                <a className="hover:text-googleRed text-offWhite font-bold" href={"https://www.instagram.com/gdgc_mu/"}>Instagram</a>
                <a className="hover:text-googleBlue text-offWhite font-bold" href={"https://www.linkedin.com/in/GDGCManhattan"}>Linkedin</a>
                <a className="hover:text-googleGreen text-offWhite font-bold" href={"https://gdg.community.dev/gdg-on-campus-manhattan-college-riverdale-united-states/"}>GDGC Website</a>

            </div>
        </div>
    )
}