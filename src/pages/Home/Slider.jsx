import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/slider/1.jpg",
  "/slider/2.jpg",
  "/slider/3.jpg",
  "/slider/4.jpg",
  "/slider/5.jpg",
];

const ImageSlider = ({ autoPlay = true, interval = 4000 }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Auto play
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* IMAGE */}
      <div className="overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="slider"
            className="w-full h-[400px] object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -100) next();
              if (offset.x > 100) prev();
            }}
          />
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-yellow-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
