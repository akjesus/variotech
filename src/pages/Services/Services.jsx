import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, Sofa, Ruler, Hammer, Box, X } from "lucide-react";
import ProcessSection from "./Processes";

const services = [
  {
    title: "Residential Design",
    icon: Home,
    short: "Elegant and personalized home interiors.",
    details:
      "We design living spaces tailored to your lifestyle, blending comfort, elegance, and functionality. From bedrooms to full homes, we bring your vision to life.",
  },
  {
    title: "Commercial Design",
    icon: Building2,
    short: "Modern and functional business environments.",
    details:
      "We create professional spaces that enhance productivity and reflect your brand identity, including offices, retail spaces, and hospitality interiors.",
  },
  {
    title: "Furniture & Decor",
    icon: Sofa,
    short: "Curated furniture and styling solutions.",
    details:
      "From furniture selection to decor styling, we ensure every detail contributes to a cohesive and luxurious design.",
  },
  {
    title: "Space Planning",
    icon: Ruler,
    short: "Smart layouts for maximum efficiency.",
    details:
      "We optimize your space with strategic layouts that improve flow, usability, and aesthetics.",
  },
  {
    title: "Renovation",
    icon: Hammer,
    short: "Transform outdated spaces into modern designs.",
    details:
      "Complete remodeling solutions with attention to detail, quality materials, and expert execution.",
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
            We design beautiful, functional spaces tailored to your lifestyle
            and business needs.
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

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-600 px-8 py-3 rounded-lg hover:bg-yellow-700"
        >
          Get a Free Consultation
        </motion.button>
      </section>
    </div>
  );
};

export default Services;
