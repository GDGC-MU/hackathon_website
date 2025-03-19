import Countdown from "react-countdown";
import EarthCanvas from "./EarthCanvas";
export const Hero = () => {
  return (
    <div className=" bg-offWhite bg-auto flex flex-col md:flex-row justify-around pt-40 pb-20" id="home">
      <div className="h-150 w-150 flex flex-col items-center text-center">
        <div>
          <h1 className="font-extrabold text-5xl pt-20 ">Google Developer Group on Campus at MU</h1>
          <h1 className="font-extrabold text-5xl pt-10 mb-10">
            <span className="text-black">&lt;</span>
            <span className="text-googleGreen">M</span>
            <span className="text-googleYellow">U</span>
            <span className="text-googleRed">H</span>
            <span className="text-googleBlue">4</span>
            <span className="text-googleGreen">G</span>&nbsp;
            <span className="text-black">/&gt;</span>
          </h1>
        </div>
        <div className="font-extrabold text-5xl mb-15">
          <h1>HACKATHON 2025</h1>
        </div>
        <div className="flex items-center justify-center w-full gap-1.5 count-down-main ">
          <Countdown
            date={new Date("2025-04-26T00:00:00")}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="flex space-x-4 text-2xl font-bold">
                <div className="rounded-xl bg-jetBlack py-3 min-w-[96px] w-10 flex items-center justify-center flex-col gap-1 aspect-square px-3 text-white">{days}&nbsp; Days</div>
                <div className="pt-8">:</div>
                {/* bg-gradient-to-b from-indigo-600 to-purple-600 */}
                <div className="rounded-xl  bg-jetBlack py-3 min-w-[96px] w-10 flex items-center justify-center flex-col gap-1 aspect-square px-3 text-white">{hours}&nbsp; Hours</div>
                <div className="pt-8">:</div>
                <div className="rounded-xl bg-jetBlack py-3 min-w-[96px] w-10 flex items-center justify-center flex-col gap-1 aspect-square px-3 text-white">{minutes}&nbsp; Mins</div>
                <div className="pt-8">:</div>
                <div className="rounded-xl bg-jetBlack py-3 min-w-[96px] w-10 flex items-center justify-center flex-col gap-1 aspect-square px-3 text-white">{seconds}&nbsp; Secs</div>
              </div>
            )}
          />
        </div>
      </div>
      <div className="flex items-center justify-center md:w-1/2">
        <div className="w-full h-120 md:h-[600px]">
          <EarthCanvas />
        </div>
      </div>

    </div>
  )
}
export default Hero;             