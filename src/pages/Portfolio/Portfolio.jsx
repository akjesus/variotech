import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "Living Room", "Bathroom", "Consoles", "Rooms", "Kitchen", "Office"];

const projects = [
  {
    id: 1,
    category: "Living Room",
    image: "/gallery/livingroom/1.jpg",
  },
  {
    id: 2,
    category: "Bathroom",
    image: "/gallery/bathroom/1.jpg",
  },
  {
    id: 3,
    category: "Consoles",
    image: "/gallery/console/1.jpg",
  },
  {
    id: 4,
    category: "Rooms",
    image: "/gallery/rooms/1.jpg",
  },
  {
    id: 5,
    category: "Kitchen",
    image: "/gallery/kitchens/1.jpg",
  },
  {
    id: 6,
    category: "Office",
    image: "/gallery/office/1.jpg",
  },
  {
    id: 7,
    category: "Living Room",
    image: "/gallery/livingroom/2.jpg",
  },
  {
    id: 8,
    category: "Bathroom",
    image: "/gallery/bathroom/2.jpg",
  },
  {
    id: 9,
    category: "Consoles",
    image: "/gallery/console/2.jpg",
  },
  {
    id: 10,
    category: "Rooms",
    image: "/gallery/rooms/2.jpg",
  },
  {
    id: 11,
    category: "Kitchen",
    image: "/gallery/kitchens/2.jpg",
  },
  {
    id: 12,
    category: "Office",
    image: "/gallery/office/2.jpg",
  },
  {
    id: 13,
    category: "Living Room",
    image: "/gallery/livingroom/3.jpg",
  },
  {
    id: 14,
    category: "Bathroom",
    image: "/gallery/bathroom/3.jpg",
  },
  {
    id: 15,
    category: "Consoles",
    image: "/gallery/console/3.jpg",
  },
  {
    id: 16,
    category: "Rooms",
    image: "/gallery/rooms/3.jpg",
  },
  {
    id: 17,
    category: "Kitchen",
    image: "/gallery/kitchens/3.jpg",
  },
  {
    id: 18,
    category: "Office",
    image: "/gallery/office/3.jpg",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filtered =
    activeCategory === "All" ? projects : (
      projects.filter((p) => p.category === activeCategory)
    );

  const next = () => setSelectedIndex((prev) => (prev + 1) % filtered.length);

  const prev = () =>
    setSelectedIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <div className="bg-[#F8F5F0] text-gray-800">
      {/* HERO */}
      <section className="relative bg-[#330202] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Our Portfolio
          </motion.h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            A curated showcase of our finest interior design work.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <div className="flex justify-center gap-4 py-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              activeCategory === cat ? "bg-yellow-600 text-white" : "bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MASONRY GRID */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 px-6 max-w-6xl mx-auto pb-16">
        <AnimatePresence>
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.02 }}
              className="mb-6 cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="w-full rounded-2xl transition duration-300 hover:brightness-90"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* CLOSE */}
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={32} />
            </button>

            {/* PREV */}
            <button onClick={prev} className="absolute left-6 text-white">
              <ChevronLeft size={40} />
            </button>

            {/* IMAGE */}
            <motion.img
              key={filtered[selectedIndex].image}
              src={filtered[selectedIndex].image}
              className="max-w-5xl w-full rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            />

            {/* NEXT */}
            <button onClick={next} className="absolute right-6 text-white">
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Design Your Dream Space
        </h2>
        <p className="text-gray-300 mb-6">
          Inspired by our work? Let’s bring your vision to life.
        </p>
        <button className="bg-yellow-600 px-8 py-3 rounded-lg hover:bg-yellow-700">
          Start Your Project
        </button>
      </section>
    </div>
  );
};

export default Portfolio;
