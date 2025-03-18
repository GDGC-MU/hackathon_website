import { motion } from "framer-motion";
import Dragon from "../assets/dragon.gif";
import blockchain from "../assets/blockchain.gif";
import computer from "../assets/computer.gif";
import AI from "../assets/AI.gif";

export const Track = () => {
  return (
    <div className="bg-googleBlue h-auto pt-20 pb-40 px-4 border-b-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-bold mb-10 text-black text-5xl py-2 px-5 flex flex-row justify-center bg-offWhite rounded-3xl border-1"
      >
        <img src={Dragon} width="100px" />
        <h1 className="text-center mt-4">TRACKS</h1>
        <img src={Dragon} width="100px" />
      </motion.div>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            title: "AI for Good Track",
            description:
              "This track explores how artificial intelligence can be harnessed to create a positive impact on society. From ethical AI frameworks to natural language processing (NLP) for accessibility, discussions will focus on making AI more inclusive and responsible. Topics include AI-driven education, assistive technologies for people with disabilities, and AI solutions for humanitarian efforts.",
            shadowColor: "googleYellow",
            character: AI,
          },
          {
            title: "Blockchain & Web3 Track",
            description:
              "Dive into the world of decentralized applications (DApps), blockchain-based identity verification, and transparency projects. This track examines how Web3 technologies are reshaping industries by promoting trust, security, and user control. Learn how blockchain innovations enhance privacy, combat fraud, and enable more transparent systems across finance, governance, and beyond.",
            shadowColor: "googleRed",
            character: blockchain,
          },
          {
            title: "Tech for Sustainability Track",
            description:
              "Technology is a powerful tool in the fight against climate change. This track focuses on IoT applications for environmental monitoring, renewable energy analytics, and sustainable innovations. Discover how cutting-edge technologies can drive eco-friendly solutions, optimize energy usage, and create a more sustainable future for our planet.",
            shadowColor: "googleGreen",
            character: computer,
          },
        ].map((track, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative flex flex-col bg-offWhite shadow-lg border border-slate-200 rounded-2xl w-full max-w-md p-6 group"
          >
            <h6 className="text-slate-800 text-3xl font-bold text-center mb-3">
              {track.title}
            </h6>
            <p className="text-slate-600 text-sm leading-relaxed font-light mb-4">
              {track.description}
            </p>

            <motion.div whileHover={{ scale: 1.1 }} className="flex justify-center items-center mb-4">
              <img src={track.character} className="w-36 h-36 object-contain" alt={track.title} />
            </motion.div>

            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${track.shadowColor === "googleYellow"
                ? "group-hover:shadow-[0_4px_6px_rgba(255,255,0,0.4),0_4px_10px_rgba(255,255,0,0.6),0_4px_20px_rgba(255,255,0,0.8)]"
                : track.shadowColor === "googleRed"
                  ? "group-hover:shadow-[0_4px_6px_rgba(255,0,0,0.4),0_4px_10px_rgba(255,0,0,0.6),0_4px_20px_rgba(255,0,0,0.8)]"
                  : track.shadowColor === "googleGreen"
                    ? "group-hover:shadow-[0_4px_6px_rgba(0,255,0,0.4),0_4px_10px_rgba(0,255,0,0.6),0_4px_20px_rgba(0,255,0,0.8)]"
                    : ""
                }`}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Track;
