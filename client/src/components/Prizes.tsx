import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Treasure from "../assets/treasure.gif";
import Grand from "../assets/grand.gif";
import Regular from "../assets/regular.gif";

export const Prizes = () => {
  const navigate = useNavigate();

  const grandPrizeVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.6, ease: "easeIn" } },
  };

  const trackPrizeVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.6, ease: "easeIn" } },
  };

  return (
    <div className="bg-googleBlue h-auto pt-20 pb-40 px-4 border-b-2" id="prizes">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-bold mb-10 text-black text-5xl py-2 px-5 flex flex-row justify-center bg-offWhite rounded-3xl border-1"
      >
        <img src={Treasure} width="80px" alt="Dragon" />
        <h1 className="text-center mt-4">Prizes</h1>
        <img src={Treasure} width="80px" alt="Dragon" />
      </motion.div>
      <div className="flex justify-center mb-10">
        <motion.div
          variants={grandPrizeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="relative flex flex-col bg-offWhite shadow-lg border border-slate-200 rounded-2xl w-full max-w-md p-4 group items-center"
        >
          <h6 className="text-slate-800 text-3xl font-bold text-center mb-3">Grand Prize</h6>
          <p className="text-slate-600 text-sm leading-relaxed font-light mb-4 text-center">
            Coming Soon
          </p>
          <img src={Grand} className="w-50"/>
          <motion.div whileHover={{ scale: 1.1 }} className="flex justify-center items-center mb-4">
            {/* <img className="w-36 h-40 object-contain" alt="Grand Prize" /> */}
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {["AI for Good Prize",
          "Blockchain & Web3 Prize",
          "Tech for Sustainability Prize"].map((title, index) => (
            <motion.div
              key={index}
              variants={trackPrizeVariant}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative flex flex-col bg-offWhite shadow-lg border border-slate-200 rounded-2xl w-full max-w-md p-4 group items-center"
            >
              <h6 className="text-slate-800 text-3xl font-bold text-center mb-3">{title}</h6>
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-4 text-center">
                Coming Soon
              </p>
              <img src={Regular} className="w-50" />
              <motion.div whileHover={{ scale: 1.1 }} className="flex justify-center items-center mb-4">
                {/*  <img src={Mentor} className="w-36 h-40 object-contain" alt={title} /> */}
              </motion.div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Prizes;
