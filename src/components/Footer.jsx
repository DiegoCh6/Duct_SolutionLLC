import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* footer top  */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            src={theme === "dark" ? assets.logodarkduct : assets.logoduct}
            className="w-60 sm:w-67"
            alt=""
          />
          <p className="max-w-md">
            From planning to execution, we provide comprehensive HVAC services
            focused on energy efficiency, reliability, and comfort.
          </p>

          <ul className="flex gap-8">
            <li>
              <a className="hover:text-primary" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#our-work">
                Our Work
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#about-us">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 space-y-4 w-full max-w-md text-left"
        >
          <h3 className="font-semibold">Need immediate HVAC support?</h3>
          <p className="text-sm leading-relaxed">
            Our team is ready to assist you with installation, maintenance or
            emergency repair. Get in touch now and speak with a specialist.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="sms:+12406715172"
              className="group inline-flex items-center gap-3 bg-primary text-white px-5 py-3 rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              aria-label="Send a message"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/15 group-hover:bg-white/25 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M3.5 5c0-1.1.9-2 2-2h2.2c.9 0 1.7.6 1.9 1.5l.6 2.3c.2.9-.2 1.8-.9 2.3l-1.2.9c1.2 2.3 3.1 4.2 5.4 5.4l.9-1.2c.5-.7 1.4-1.1 2.3-.9l2.3.6c.9.2 1.5 1 1.5 1.9V18.5c0 1.1-.9 2-2 2H18c-8.3 0-15-6.7-15-15V5Z" />
                </svg>
              </span>
              <span className="tracking-wide">Send a message</span>
            </a>
            <a
              href="https://wa.me/12406715172"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              aria-label="Chat on WhatsApp"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/15 group-hover:bg-white/25 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.47 3.42 1.29 4.86L2 22l5.33-1.4c1.37.75 2.94 1.18 4.62 1.18 5.52 0 10-4.48 10-10s-4.48-10-9.91-10Zm5.66 14.41c-.24.68-1.39 1.29-1.93 1.37-.49.07-1.1.1-1.77-.11-.41-.13-.94-.3-1.62-.59-2.85-1.23-4.7-4.09-4.84-4.28-.14-.19-1.16-1.54-1.16-2.94 0-1.4.74-2.08 1-2.36.27-.28.59-.35.78-.35.19 0 .39.01.56.01.18.01.42-.07.66.5.24.57.82 1.97.89 2.11.07.14.12.31.02.5-.09.19-.14.31-.27.48-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.24 2.21 1.38.28.14.45.12.62-.07.17-.19.72-.84.91-1.13.19-.28.39-.24.66-.14.28.09 1.76.83 2.06.98.3.14.5.22.57.35.08.14.08.79-.16 1.47Z" />
                </svg>
              </span>
              <span className="tracking-wide">WhatsApp</span>
            </a>
            <a
              href="https://www.facebook.com/ductsolution"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#1877F2] text-white px-5 py-3 rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              aria-label="Visit our Facebook page"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/15 group-hover:bg-white/25 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M22 12.06C22 6.49 17.52 2 11.94 2 6.37 2 1.89 6.49 1.89 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.43V9.83c0-2.4 1.43-3.73 3.62-3.73 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.19 0-1.56.74-1.56 1.5v1.8h2.65l-.42 2.91h-2.23V22c4.78-.81 8.46-4.95 8.46-9.94Z" />
                </svg>
              </span>
              <span className="tracking-wide">Facebook</span>
            </a>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Available 24/7 for urgent assistance.
          </p>
        </motion.div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600  my-6" />

      {/* footer bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p>Copyright 2025 © HVAC Duct Solution LLC - All Right Reserved.</p>
        <div className="flex items-center justify-between gap-4">
          <a href="https://www.facebook.com/ductsolution" target="_blank" rel="noopener noreferrer">
            <img src={assets.facebook_icon} alt="Facebook" />
          </a>
          {/* <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" /> */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
