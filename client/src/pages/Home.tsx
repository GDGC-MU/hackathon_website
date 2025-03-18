import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Track from "../components/Track";
import Registration from "../components/Registration";
import Schedule from "../components/Schedule";
import Prizes from "../components/Prizes";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Footer from "../components/Footer";
import Marquee from "../components/marquee";
import Sponsor from "../components/Sponsor";
import FAQ from "../components/FAQ";

export const Home = () => {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
            smoothWheel: true,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1,
            gestureOrientation: "vertical",
        });

        lenis.on("scroll", (e) => {
            console.log(e);
        });
        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="scroll-smooth overflow-y-hidden">
            <Navbar />
            <Hero />
            <Marquee />
            <Track />
            <Registration />
            <Schedule />
            <Prizes />
            <Sponsor />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;
