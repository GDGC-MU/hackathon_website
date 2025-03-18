import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Battlebots from "../assets/battlebot_run.gif";
import Mentor from "../assets/mentor.gif";
import Attendee from "../assets/wizard.gif";

export const Registration = () => {
  const navigate = useNavigate();
  const cardVariants = (direction: number) => ({
    hidden: { opacity: 0, x: direction },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { opacity: 0, x: -direction, transition: { duration: 0.6, ease: "easeInOut" } },
  });

  return (
    <div className="bg-googleRed h-auto pt-20 pb-40 px-4 border-b-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-bold mb-10 text-black text-5xl py-2 px-5 flex flex-row justify-center bg-offWhite rounded-3xl border-1"
      >
        <img src={Battlebots} width="80px" alt="Dragon" />
        <h1 className="text-center mt-4">Registration</h1>
        <img src={Battlebots} width="80px" alt="Dragon" />
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            title: "Attendee Registration",
            description: "Register as an attendee and be part of the hackathon experience at Manhattan University.",
            shadowColor: "googleYellow",
            navigate: "/signup",
            character: Attendee,
          },
          {
            title: "Mentor Registration",
            description: "Sign up as a mentor and guide participants throughout the event.",
            navigate: "https://forms.gle/RpBRQp8C59VWyDx19",
            shadowColor: "googleBlue",
            character: Mentor,
          },
        ].map((registration, index) => (
          <motion.div
            key={index}
            variants={cardVariants(index % 2 === 0 ? -100 : 100)} // Left for even, right for odd
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }} // Trigger animation
            whileHover={{ scale: 1.05 }}
            className="relative flex flex-col bg-offWhite shadow-lg border border-slate-200 rounded-2xl w-full max-w-md p-6 group"
          >
            <h6 className="text-slate-800 text-3xl font-bold text-center mb-3">
              {registration.title}
            </h6>
            <p className="text-slate-600 text-sm leading-relaxed font-light mb-4">
              {registration.description}
            </p>

            <motion.div whileHover={{ scale: 1.1 }} className="flex justify-center items-center mb-4">
              <img src={registration.character} className="w-36 h-40 object-contain" alt={registration.title} />
            </motion.div>

            {/* Navigation Handling */}
            {registration.navigate.startsWith("http") ? (
              <a
                href={registration.navigate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-googleBlue px-4 py-2 mb-6 rounded-xl text-center font-semibold hover:bg-blue-700 transition z-10"
              >
                Register
              </a>
            ) : (
              <button
                onClick={() => navigate(registration.navigate)}
                className="text-white bg-googleYellow px-4 py-2 rounded-xl text-center font-semibold hover:bg-yellow-500 transition z-10"
              >
                Register
              </button>
            )}

            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${registration.shadowColor === "googleYellow"
                ? "group-hover:shadow-[0_4px_6px_rgba(255,255,0,0.4),0_4px_10px_rgba(255,255,0,0.6),0_4px_20px_rgba(255,255,0,0.8)]"
                : "group-hover:shadow-[0_4px_6px_rgba(0,0,255,0.4),0_4px_10px_rgba(0,0,255,0.6),0_4px_20px_rgba(0,0,255,0.8)]"
                }`}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Registration;
