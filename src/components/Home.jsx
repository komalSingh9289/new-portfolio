import { ArrowUpRight } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-32 pb-12 px-6">
      {/* Subtitle */}
      <p className="text-green-500 text-sm tracking-wider mb-3">
        ● CURRENTLY LEARNING @ NEXT.JS
      </p>

      {/* Main Title */}
      <h2 className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-400 bg-clip-text text-transparent">
        KOMAL SINGH
      </h2>

      {/* Role */}
      <p className="text-gray-400 text-2xl md:text-4xl font-medium mb-8">
        Software Developer <br /> Full Stack - MERN
      </p>

      {/* Button */}
      <button className="bg-white text-black px-8 py-3 flex gap-2 rounded-full font-medium hover:bg-gray-200 transition">
        Get in touch <ArrowUpRight />
      </button>

      
    </section>
  );
};

export default Home;
