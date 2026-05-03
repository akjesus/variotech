import { useState, useEffect } from "react";
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

export default function Home() {
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
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
  ];

  return (
    <div className="pt-0">
      {/* HERO */}
      <section
        className="h-[90vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Transforming Spaces into Masterpieces
            </h1>
            <p className="mb-6 text-lg">
              Luxury Solutions design for homes and businesses.
            </p>
            <div className="flex gap-4">
              <button className="bg-yellow-600 px-6 py-3 rounded-lg hover:bg-yellow-700">
                View Projects
              </button>
              <button className="border border-white px-6 py-3 rounded-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[#330202] text-white">
        <div id="default-carousel" class="relative " data-carousel="slide">
          <div class="relative h-96 overflow-hidden rounded-base md:h-96">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/slider/1.jpg"
                class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/slider/2.jpg"
                class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/slider/3.jpg"
                class="absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/slider/4.jpg"
                class="absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/slider/5.jpg"
                class="absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>

          <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              class="w-3 h-3 rounded-base"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-base"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-base"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-base"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-base"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-5 h-5 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-5 h-5 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
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
                <House className="w-12 h-12 text-[#330202] mx-auto" />
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-[#330202]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt="Solutions"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
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
            src={selectedImage}
            alt="preview"
            className="max-w-4xl w-full rounded-lg"
          />
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
        <button className="bg-yellow-600 px-8 py-3 rounded-lg hover:bg-yellow-700">
          Get in Touch
        </button>
      </section>
    </div>
  );
}
