import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, Sofa, Ruler, Hammer, Box, X } from "lucide-react";
import ProcessSection from "./Processes";

const services = [
  {
    title: "Kitchen Design",
    icon: Home,
    short: "Fitted Kitchen, Planning, Design and Implementation.",
    details:
      "We design living spaces tailored to your lifestyle, blending comfort, elegance, and functionality. From bedrooms to full homes, we bring your vision to life.",
  },
  {
    title: "Living Room",
    icon: Building2,
    short: "Living Room & Bedroom Design and Arrangement.",
    details:
      "We design living spaces tailored to your lifestyle, blending comfort, elegance, and functionality. From bedrooms to full homes, we bring your vision to life.",
  },
  {
    title: "Bathroom and Vanity Design",
    icon: Sofa,
    short: "Bathroom and Vanity Design and Arrangement.",
    details:
      "We design functional and stylish bathrooms that maximize space and enhance your daily routine, from modern vanities to spa-like retreats.",
  },
  {
    title: "Office Planning",
    icon: Ruler,
    short: "Office Planning, Setup and Spatial Management.",
    details:
      "We create efficient and functional office spaces that support productivity and reflect your brand identity.",
  },
  {
    title: "Closets and Wardrobes",
    icon: Hammer,
    short: "Custom Closets and Wardrobe Design.",
    details:
      "We create custom closet and wardrobe solutions that maximize storage and enhance the aesthetics of your space.",
  },
  {
    title: "Turnkey Solutions",
    icon: Box,
    short: "End-to-end design and execution.",
    details:
      "We manage everything from concept to completion, ensuring a seamless and stress-free experience.",
  },
];

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="relative bg-[#330202] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-300"
          >
            Our services are geared towards making your space cozy, organised
            and efficient.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-300"
          >
            They Include
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow cursor-pointer"
                onClick={() => setSelected(service)}
              >
                <Icon className="mb-4 text-yellow-600" size={32} />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.short}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* MODAL / DETAIL VIEW */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white max-w-lg w-full p-8 rounded-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              <selected.icon className="mb-4 text-yellow-600" size={40} />

              <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>

              <p className="text-gray-600 leading-relaxed">
                {selected.details}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ProcessSection />

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Transform Your Space?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-gray-300"
        >
          Let’s bring your vision to life with elegance and precision.
        </motion.p>
        <a href="/contact">
          <motion.button
            whileHover={{ scale: 1.15 }}
            className="bg-[#B34C0D] px-8 py-3 rounded-lg hover:bg-yellow-700"
          >
            Get a Free Consultation
          </motion.button>
        </a>
      </section>
    </div>
  );
};

export default Services;
