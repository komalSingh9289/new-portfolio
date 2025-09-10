import React from "react";
import {
  LayoutPanelTop,
  FolderCode,
  Paintbrush,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import TechStackCards from "../components/TechStackCards";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutPage = () => {
  return (
    <section>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto my-12 px-4 gap-8">
        {/* Timeline */}
        <motion.div
          className="md:w-1/2 text-center md:text-left pl-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl text-green-300 font-bold mb-4"
            variants={fadeUp}
          >
            About Me
          </motion.h2>
          <div className="max-w-2xl mx-auto my-12">
            <div className="relative border-l border-gray-700">
              {/* Present */}
              <div className="ml-6 mt-2 mb-5">
                <div className="absolute w-3 h-3 bg-pink-500 rounded-full -left-1.5 border border-gray-900"></div>
                <time className="mb-1 text-sm text-gray-400">Present</time>
                <p className="text-gray-300 text-lg">Seeking new opportunities</p>
              </div>

              {/* 2025 */}
              <div className="mb-5 ml-6">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-1.5 border border-gray-900"></div>
                <time className="mb-1 text-sm text-gray-400">2025</time>
                <p className="text-gray-300 text-lg">
                  Got 6-month internship & started MCA
                </p>
              </div>

              {/* 2024 */}
              <div className="mb-5 ml-6">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 border border-gray-900"></div>
                <time className="mb-1 text-sm text-gray-400">2024</time>
                <p className="text-gray-300 text-lg">Graduated with BCA</p>
              </div>

              {/* 2022 */}
              <div className="mb-2 ml-6">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-gray-900"></div>
                <time className="mb-1 text-sm text-gray-400">2022</time>
                <p className="text-gray-300 text-lg">Wrote my first code</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative rounded-xl overflow-hidden flex flex-col items-center shadow-lg bg-white font-Roboto-light w-72">
            {/* Header */}
            <div className="h-24 w-full bg-gray-900 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="/banner.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* Profile Icon */}
            <div className="relative -mt-12 flex flex-col items-center gap-2 px-5 py-5">
              <div className="bg-green-200 rounded-full p-4">
                <img src="/avatar.svg" width={100} height={100} />
              </div>

              {/* Name & Bio */}
              <div className="text-center">
                <p className="text-black font-medium text-lg">Komal Singh</p>
                <p className="text-xs text-gray-500">
                  Software Developer | MERN
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition"
                >
                  <IoMdMail size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tagline */}
      <motion.h1
        className="text-3xl font-bold px-12 mb-5 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        I'm a developer, problem-solver, & code nerd.
      </motion.h1>

      {/* Info Cards */}
      <motion.div
        className="w-full flex justify-center py-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-[100%] px-12 text-center text-white">
          <div className="flex flex-col ">
            <div className="flex items-center  w-full">
              <span className="px-3 text-xl uppercase opacity-70 tracking-wide font-semibold">
                Experience
              </span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>
            <p className="text-lg text-start ml-5 mt-2 font-thin">⏳ 6 months</p>
          </div>

          <div className="flex flex-col ">
            <div className="flex items-center w-full">
              <span className="px-3 text-xl uppercase opacity-70 tracking-wide font-semibold">
                Location
              </span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>
            <p className="text-lg text-start ml-5 mt-2 font-thin">📍 India</p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center w-full">
              <span className="px-3 text-xl uppercase opacity-70 tracking-wide font-semibold">
                Freelance
              </span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>
            <p className="text-lg text-start ml-5 mt-2 font-thin">👋 Available</p>
          </div>
        </div>
      </motion.div>

      {/* Services & Tech Stack */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-12 ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-xl font-bold text-gray-300 mb-2">My Services</h2>
          <hr className="border-t border-gray-600 w-full mb-8" />

          <div className="group p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
              <LayoutPanelTop /> Web Development
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Building modern, responsive, and scalable <br />
              websites. Choose the tech stack, I’ll make it happen.
            </p>

            <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
              <FolderCode /> Backend Development
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              APIs, authentication, and secure backend <br /> systems for your
              projects.
            </p>

            <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
              <Paintbrush /> UI/UX Implementation
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Creating clean, intuitive user interfaces <br /> with smooth
              animations.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-xl font-bold text-gray-300 mb-2">My Tech Stack</h2>
          <hr className="border-t border-gray-600 w-full mb-8" />
          <TechStackCards />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
