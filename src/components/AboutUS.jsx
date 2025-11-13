import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";

const AboutUS = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Innovation",
      desc: "We stay at the forefront of HVAC technology to deliver modern, efficient, and sustainable climate solutions.",
    },
    {
      icon: "🤝",
      title: "Commitment",
      desc: "We work closely with every client to understand their needs and exceed expectations in every project.",
    },
    {
      icon: "💡",
      title: "Excellence",
      desc: "Quality, precision, and safety guide every installation and service we perform.",
    },
    {
      icon: "🚀",
      title: "Continuous Improvement",
      desc: "We constantly enhance our processes to provide greater comfort, efficiency, and long-term reliability in every solution.",
    },
  ];

  return (
    <motion.div
      id="about-us"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-4 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-800 dark:text-white"
    >
      <Title
        title="About Us"
        desc="Duct Solution is a professional HVAC service company in Maryland dedicated to delivering reliable, efficient, and high-quality air conditioning and ventilation solutions for both residential and commercial clients."
      />

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[320px] sm:h-[380px] lg:h-[460px]">
            <img
              src={assets.about_image}
              alt="About Duct Solution"
              className="w-full h-full object-cover object-center rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Your Partner in{" "}
            <span className="text-primary">Climate Efficiency</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We combine technical expertise with personalized service to ensure
            every HVAC project delivers comfort, performance, and long-term
            energy efficiency. Our commitment is to provide reliable solutions,
            precise installations, and timely maintenance — always prioritizing
            customer satisfaction and safety.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            With years of hands-on experience and a strong focus on quality, we
            bring innovation and efficiency to every system we install. From air
            conditioning and ventilation to duct cleaning and repair, we’re your
            trusted partner for complete climate solutions.
          </p>

          {/* Facebook CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2"
          >
            <a
              href="https://www.facebook.com/ductsolution"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#1877F2] text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-[#1877F2]/40"
              aria-label="Visit our Facebook page"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/15 group-hover:bg-white/25 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M22 12.06C22 6.49 17.52 2 11.94 2 6.37 2 1.89 6.49 1.89 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.43V9.83c0-2.4 1.43-3.73 3.62-3.73 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.19 0-1.56.74-1.56 1.5v1.8h2.65l-.42 2.91h-2.23V22c4.78-.81 8.46-4.95 8.46-9.94Z" />
                </svg>
              </span>
              <span className="tracking-wide">Visit our Facebook page</span>
            </a>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                  {stat.number}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Our Values */}
      <div className="w-full mt-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8"
        >
          Our Core Values
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-105 transition-all duration-300"
            >
              <span className="text-4xl mb-4">{value.icon}</span>
              <h4 className="font-bold text-lg mb-2">{value.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUS;
