import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Laptop,
  CreditCard,
  House,
} from "lucide-react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { X } from "lucide-react";
import clsx from "clsx";
import parse from "html-react-parser";
import moment from "moment";
import ExperienceSection from "./Experience";
import { desc } from "framer-motion/client";
import ImageSlider from "./Slider";

export default function Home() {
  const Navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const services = [
    {
      title: "Residential Design",
      desc: "Elegant and personalized home Solutionss.",
    },
    {
      title: "Commercial Spaces",
      desc: "Functional and stylish business environments.",
    },
    {
      title: "Furniture & Decor",
      desc: "Curated furniture and decor solutions.",
    },
  ];
  const images = [
    {image : "/gallery/console/1.jpg", desc: "Console Table Design"},
    {image : "/gallery/bathroom/1.jpg", desc: "Bathroom Design"},
    {image : "/gallery/kitchens/1.jpg", desc: "Kitchen Design"},
    {image : "/gallery/livingroom/1.jpg", desc: "Living Room Design"},
    {image : "/gallery/console/1.jpg", desc: "Console Table Design"},
    {image : "/gallery/office/1.jpg", desc: "Office Design"},
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section
        className="h-[90vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/home-hero.jpg')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              It's not just a space, it's an experience
            </motion.h1>
            <p className="mb-6 text-lg">
              Designed with your home and office in mind
            </p>
            <div className="flex gap-4">
              <a href="/portfolio">
                <button className="bg-[#B34C0D] px-6 py-3 rounded-lg hover:bg-[#9A3B0C]">
                  View Our Portfolio
                </button>
              </a>
              <a href="/contact">
                <button className="border border-white px-6 py-3 rounded-lg">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <ExperienceSection />
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Work Highlights
        </h2>

        <ImageSlider />
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#330202]">
            Our Services
          </h2>
          <p className="text-black-600 max-w-3xl mx-auto">
            We combine creativity and functionality to deliver luxurious spaces
            tailored to your lifestyle. Our expert team ensures every detail
            reflects beauty, comfort, and purpose.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div className="p-6 bg-white shadow rounded-2xl">
                <House className="w-12 h-12 text-[#B34C0D] mx-auto" />
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-[#330202]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.image}
                alt={img.desc}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
              <p className="text-center mt-2 text-gray-600">{img.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          <img
            src={selectedImage.image}
            alt="preview"
            className="max-w-4xl w-full rounded-lg"
          />
          <p className="text-center mt-2 text-gray-600">{selectedImage.desc}</p>
        </div>
      )}

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="mb-6 text-gray-300">
          Let’s create something beautiful together.
        </p>
        <a href="/contact">
          <button className="bg-[#B34C0D] px-8 py-3 rounded-lg hover:bg-[#9A3B0C]">
            Get in Touch
          </button>
        </a>
      </section>
    </div>
  );
}
