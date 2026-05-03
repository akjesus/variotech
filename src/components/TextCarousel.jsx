import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const TextCarousel = () => {
  const controls = useAnimation();
  const announcement =
    "Welcome to Variotech Solutionss - Your Trusted Partner in Solutions Design and Renovation Services!";

  // Duplicate the announcement for seamless looping
  const carouselText = `${announcement} • ${announcement} • ${announcement} • ${announcement} • ${announcement}`;

  useEffect(() => {
    const animateCarousel = async () => {
      await controls.start({
        x: "-50%",
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        },
      });
    };
    animateCarousel();
  }, [controls]);

  return (
    <div className="bg-white text-[#330202] py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 ">
        <motion.div
          animate={controls}
          className="whitespace-nowrap"
          style={{ display: "inline-block" }}
        >
          {carouselText}
        </motion.div>
      </div>
    </div>
  );
};

export default TextCarousel;
