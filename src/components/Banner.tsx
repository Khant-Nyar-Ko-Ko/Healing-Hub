import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import banner from "../assets/old-patient-suffering-from-parkinson 1.png";

const Banner = () => {
  return (
    <>
      {/* Background overlay animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="w-screen h-[500px] absolute bg-primary z-10"
      ></motion.div>

      {/* Text and button animation container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-screen h-[500px] z-20 absolute"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-[30%] left-[12%] text-primary text-4xl font-bold font-serif"
        >
          Healing Hub
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-[40%] left-[12%] text-slate-800 font-serif"
        >
          Where your journey to mental well-being begins,
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute top-[45%] left-[12%] text-slate-800 font-serif"
        >
          with support every step of the way
        </motion.p>

        <NavLink to="/empty-chat">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute top-[55%] left-[12%] text-white px-4 py-2 bg-primary rounded-lg"
          >
            Consult
          </motion.button>
        </NavLink>
      </motion.div>

      {/* Image animation */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        src={banner}
        className="w-screen h-[500px] object-cover"
        alt="Banner"
      />
    </>
  );
};

export default Banner;
