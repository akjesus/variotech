import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "Living Room", "Bedroom", "Office"];

const projects = [
  {
    id: 1,
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
  },
  {
    id: 2,
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 3,
    category: "Office",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  },
  {
    id: 4,
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  },
  {
    id: 5,
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
  },
  {
    id: 6,
    category: "Office",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
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
      <section className="py-20 bg-black text-white text-center">
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
