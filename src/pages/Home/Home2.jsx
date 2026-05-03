import { useState } from "react";
import { X } from "lucide-react";

const Home = () => {
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
    <div className="bg-[#F8F5F0] text-gray-800">
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

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 leading-relaxed">
            At Elegance Solutionss, we combine creativity and functionality to
            deliver luxurious spaces tailored to your lifestyle. Our expert team
            ensures every detail reflects beauty, comfort, and purpose.
          </p>
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
};

export default Home;
