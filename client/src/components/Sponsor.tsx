import { motion } from "framer-motion";
import NYC from '../assets/nyc.svg';
import Peg from '../assets/peg.gif';
export const Sponsor = () => {
  return (
    <div className="bg-googleGreen h-screen border-b-2" id="sponsorship">
      <div className="pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-bold mb-10 text-black text-5xl py-2 px-5 flex flex-row justify-center bg-offWhite rounded-3xl border-1"
        >
          <img src={Peg} className="w-auto h-12 mt-2" />&nbsp;
          <h1 className="text-center mt-4">Sponsors</h1>&nbsp;
          <img src={Peg} className="w-auto h-12 mt-2" />
        </motion.div>
      </div>
      <h1 className="text-center text-6xl font-extrabold"> COMING SOON!!!</h1>
      <img src={NYC} className="pb-0 m-0 md:pt-2" />
    </div>
  )
}
export default Sponsor;