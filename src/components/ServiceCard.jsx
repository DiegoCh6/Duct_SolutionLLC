import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ServiceCard = ({ service, index, onOpen }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false); // fallback only when no onOpen is provided

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  // Close modal with ESC key (fallback modal only)
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay:0.7 }}
      viewport={{ once: true }}
      className="relative overflow-hidden m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />

      <div className="flex flex-col gap-4 p-6 hover:p-5.5 transition-all rounded-xl bg-white dark:bg-gray-900 z-10 relative">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold text-lg tracking-tight">
            {service.title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {service.description}
        </p>
        {service.image && (
          <div
            className="group relative cursor-pointer rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 shadow-sm"
            onClick={() => onOpen ? onOpen() : setOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (onOpen ? onOpen() : setOpen(true))}
          >
            <img
              src={service.image}
              alt={service.alt || service.title}
              className="w-full h-40 md:h-48 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-2 right-2 text-[10px] px-2 py-1 rounded-full bg-white/85 dark:bg-gray-800/85 text-gray-700 dark:text-gray-200 shadow">
              Click to view
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && service.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={service.image}
                alt={service.alt || service.title}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl bg-black"
              />
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium hover:bg-white dark:hover:bg-gray-700 transition"
              >
                Close
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-xl">
                <h4 className="text-white font-semibold text-sm">
                  {service.title}
                </h4>
                <p className="text-white/80 text-xs mt-1">
                  {service.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;
