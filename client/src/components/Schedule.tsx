import { motion } from "framer-motion";
import Fire from "../assets/fire.gif";

export const Schedule = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <div className="bg-googleYellow pt-20 pb-40 px-4 border-b-2 relative overflow-hidden" id="schedule">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-bold mb-10 text-black text-5xl py-2 px-5 flex flex-row justify-center bg-offWhite rounded-3xl border-1 items-center w-auto"
      >
        <img src={Fire} width="60px" alt="Dragon" />
        <h1 className="text-center mt-4">Schedule</h1>
        <img src={Fire} width="60px" alt="Dragon" />
      </motion.div>

      <div className="flex flex-col items-center relative z-10">
        <div className="w-full max-w-4xl flex flex-col gap-6 items-center relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-stone-500 -translate-x-1/2 z-0" />

          {[
            {
              title: "Registration",
              time: "12:00 PM - 1:00 PM",
            },
            {
              title: "Opening Ceremony",
              time: "1:00 PM - 2:00 PM",
              shadowColor: "googleRed",
            },
            {
              title: "Team formation & Icebreakers",
              time: "2:00 PM - 2:30 PM",
              shadowColor: "googleGreen",
            },
            {
              title: "Hackathon Kickoff",
              time: "2:30 PM - 3:00 PM",
              shadowColor: "googleBlue",
            },
            {
              title: "Hacking Begins",
              time: "3:00 PM - 6:00 PM",
              shadowColor: "googleRed",
            },
            {
              title: "Dinner & Networking",
              time: "6:00 PM - 7:00 PM",
              shadowColor: "googleGreen",
            },
            {
              title: "Hacking Continues",
              time: "7:00 PM - 11:00 PM",
              shadowColor: "googleBlue",
            },
            {
              title: "Late-night Activities",
              time: "11:00 PM - 12:00 AM",
              shadowColor: "googleRed",
            },
            {
              title: "Breakfast",
              time: "7:30 AM - 8:30 AM",
              shadowColor: "googleGreen",
            },
            {
              title: "Hacking Continues",
              time: "8:30 AM - 12:00 PM",
              shadowColor: "googleBlue",
            },
            {
              title: "Lunch & Final Touches",
              time: "12:00 PM - 1:00 PM",
              shadowColor: "googleRed",
            },
            {
              title: "Project Presentations",
              time: "1:00 PM - 3:00 PM",
              shadowColor: "googleGreen",
            },
            {
              title: "Judging & Prizes",
              time: "3:00 PM - 4:00 PM",
              shadowColor: "googleBlue",
            },
          ].map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative flex flex-col bg-offWhite shadow-lg border-jetBlack w-[49%] rounded-2xl p-6 z-20 border-2 sm:justify-center 
                ${index % 2 === 0 ? "md:translate-x-[-65%]" : "md:translate-x-[65%]"} sm:translate-x-0
              `}
              
            >
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 flex justify-center items-center rounded-full border-2 border-jetBlack bg-white shadow-lg
        ${index % 2 === 0 ? "md:right-[-20%]" : "md:left-[-20%]"} hidden md:block`}
              >
                <div className={`absolute top-1/2 w-12 h-[2px] bg-jetBlack -z-10 ${index % 2 === 0 ? "right-full" : "left-full"}`}
                ></div>
                <img src={Fire} alt="Event Icon" className="w-6 h-6 m-0 p-0 border-jetBlack" />
              </div>
              <h6 className="text-slate-800 text-3xl font-bold mb-3">
                {event.title}
              </h6>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-4">
                {event.time}
              </p>
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${event.shadowColor === "googleYellow"
                  ? "group-hover:shadow-[0_4px_6px_rgba(255,255,0,0.4),0_4px_10px_rgba(255,255,0,0.6),0_4px_20px_rgba(255,255,0,0.8)]"
                  : "group-hover:shadow-[0_4px_6px_rgba(0,0,255,0.4),0_4px_10px_rgba(0,0,255,0.6),0_4px_20px_rgba(0,0,255,0.8)]"
                  }`}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Schedule;

/* 
In medium and smaller change so the icons are hidden + the horizontal line and make it be in the middle of the screen 
*/