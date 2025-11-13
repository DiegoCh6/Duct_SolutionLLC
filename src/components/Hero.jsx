import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex flex-col items-center gap-6 pt-20 pb-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white min-h-[72vh] lg:min-h-[80vh]"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <img
          src={assets.image_hero}
          alt=""
          className="w-full h-full object-cover transform-gpu scale-[1.02]"
        />
        {/* Remove blur and increase contrast of overlay so content pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent dark:from-black/55 dark:via-black/25 dark:to-transparent"></div>
      </motion.div>

      <div className="relative z-10 w-full flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-gray-300/80 bg-white/70 dark:bg-black/40 backdrop-blur-sm p-1.5 pr-4 rounded-full shadow-sm"
        >
          <img className="w-20" src={assets.group_profile} alt="" />
          <p className="text-xs font-medium">
            Trusted by 1k+ people in Maryland US
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-extrabold xl:leading-[95px] max-w-5xl text-white dark:text-white text-outline drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
        >
          Reliable and customized{" "}
          <span className="text-[#FFD700] drop-shadow-[0_0_12px_rgba(255,215,0,0.35)]">
            HVAC
          </span>{" "}
          solutions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-lg font-medium text-gray-700 dark:text-white/85 bg-white/70 dark:bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm max-w-4/5 sm:max-w-lg"
        >
          We guarantee efficient climate control for your home or business,
          backed by top-level technical service.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
