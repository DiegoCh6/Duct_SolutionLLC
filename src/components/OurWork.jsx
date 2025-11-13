import React, { useState, useEffect } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion, AnimatePresence } from "motion/react";

const OurWork = () => {
  const workData = [
    {
      title: "Commercial Duct Installation",
      description:
        "High-capacity supply and return ducts installed with acoustic insulation for optimal airflow and reduced noise.",
      image: assets.job1ducts,
      location: "Miami, FL",
    },
    {
      title: "Industrial Ventilation Upgrade",
      description:
        "Upgraded ventilation lines and dampers to improve extraction efficiency and meet compliance standards.",
      image: assets.job2ducts,
      location: "San Diego, CA",
    },
    {
      title: "Residential HVAC Retrofit",
      description:
        "Energy-efficient retrofit with new return path and sealed joints for improved comfort and performance.",
      image: assets.job3ducts,
      location: "Austin, TX",
    },
    {
      title: "Kitchen Exhaust System",
      description:
        "Stainless steel ducting and hood exhaust system with certified grease-rated components.",
      image: assets.job4ducts,
      location: "Orlando, FL",
    },
    {
      title: "Warehouse Air Distribution",
      description:
        "Large-format spiral ducts for uniform air distribution across open floor spaces.",
      image: assets.job5ducts,
      location: "Phoenix, AZ",
    },
    {
      title: "Office Air Quality Upgrade",
      description:
        "New filtration stage and rebalanced VAV boxes to enhance indoor air quality.",
      image: assets.job6ducts,
      location: "Seattle, WA",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  // Close modal with ESC
  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) => (prev + 1) % workData.length);
      if (e.key === "ArrowLeft")
        setSelectedIndex(
          (prev) => (prev - 1 + workData.length) % workData.length
        );
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, workData.length]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="Each project we undertake reflects our commitment to excellence and innovation in HVAC systems.
      From installation and maintenance to energy optimization and system upgrades, we deliver reliable and efficient solutions tailored to every client’s needs.
      Our work speaks for itself — efficient, durable, and designed to ensure maximum comfort and performance."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl shadow-gray-100 dark:shadow-white/10 hover:shadow-3xl transition-all focus:outline-none focus:ring-2 focus:ring-primary"
            tabIndex={0}
            onClick={() => setSelectedIndex(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedIndex(index);
              }
            }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={work.image}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                alt={work.title}
              />
              {work.location && (
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/85 dark:bg-gray-800/85 text-gray-800 dark:text-gray-100 shadow">
                  {work.location}
                </div>
              )}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/50 to-transparent transition-opacity"></div>
              <div className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full bg-white/85 dark:bg-gray-800/85 text-gray-700 dark:text-gray-200 shadow opacity-0 group-hover:opacity-100 transition">
                Ver imagen
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-base sm:text-lg font-semibold leading-snug min-h-[2.5rem]">
                {work.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed min-h-[3.25rem]">
                {work.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedIndex !== null &&
          (() => {
            const selected = workData[selectedIndex];
            return (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedIndex(null)}
              >
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  className="relative max-w-5xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full max-h-[75vh] object-contain rounded-xl shadow-2xl bg-black"
                  />
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="absolute top-3 right-3 bg-white/85 dark:bg-gray-800/85 backdrop-blur px-3 py-1 rounded-full text-xs font-medium hover:bg-white dark:hover:bg-gray-700 transition"
                  >
                    Cerrar
                  </button>
                  {/* Prev / Next */}
                  {workData.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedIndex(
                            (prev) =>
                              (prev - 1 + workData.length) % workData.length
                          );
                        }}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shadow"
                        aria-label="Previous image"
                      >
                        &lt;
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedIndex(
                            (prev) => (prev + 1) % workData.length
                          );
                        }}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shadow"
                        aria-label="Next image"
                      >
                        &gt;
                      </button>
                      <div className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded-full bg-black/50 text-white tracking-wide">
                        {selectedIndex + 1} / {workData.length}
                      </div>
                    </>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 rounded-b-xl">
                    <h4 className="text-white font-semibold text-sm">
                      {selected.title}
                    </h4>
                    {selected.location && (
                      <p className="text-white/80 text-xs mt-1">
                        {selected.location}
                      </p>
                    )}
                    <p className="text-white/70 text-xs mt-2">
                      {selected.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
      </AnimatePresence>
    </motion.div>
  );
};

export default OurWork;
