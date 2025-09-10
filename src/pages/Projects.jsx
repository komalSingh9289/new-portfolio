import { ArrowUpRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Online Bookstore",
    description:
      "Developed a full-stack online bookstore platform that allows users to browse, search, and purchase books with integrated payment gateway.",
    image: "/bookstore.png",
    stack:
      "REACT | NODEJS | EXPRESS | TAILWIND CSS | MONGODB | CASHFREE PAYMENT GATEWAY",
    link: "https://gitlab.com/komalSingh9289/bookstore.git",
  },
  {
    title: "ECOMMERCE [VOGUEVIBE]",
    description:
      "Designed & Developed an e-commerce website tailored to women's fashion, focused on providing a seamless shopping experience.",
    stack: "REACT | NODEJS | EXPRESS | TAILWIND CSS | MONGODB",
    image: "/ecom.png",
    link: "https://github.com/komalSingh9289/Ecom-VogueVibe-.git",
  },
  {
    title: "Expense Tracker",
    description:
      "A web application to manage personal finances effectively. Track daily expenses with charts and reports.",
    stack:
      "REACT | NODEJS | EXPRESS | TAILWIND CSS | MONGODB | JWT | RESTful | Charts",
    image: "/ecom-site.png",
    link: "https://github.com/komalSingh9289/Expense-Tracker",
  },
  {
    title: "Blog CMS",
    description:
      "A dynamic platform for creating, editing, and managing blog posts with user authentication, category management, and comment moderation.",
    stack: "HTML | CSS | JavaScript | Bootstrap | PHP | MySQL",
    image: "/blog-cms.png",
    link: "https://github.com/komalSingh9289/blog-cms.git",
  },
  {
    title: "Netflix Clone",
    description:
      "A replica of Netflix's landing page featuring a sleek design with hero sections, promotional content, and responsive layout.",
    stack: "HTML | CSS | JavaScript",
    image: "/netflix.png",
    link: "https://github.com/komalSingh9289/Netflix-clone.git",
  },
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 my-12 h-auto">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl text-gray-300 text-center font-bold mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flip-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index} // pass index for stagger delay
          >
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>

              {/* Back */}
              <div className="flip-card-back">
                <h3 className="text-lg font-semibold mb-2 text-green-500">
                  {project.title}
                </h3>
                <p className="text-sm mb-2 text-center">
                  {project.description}
                </p>
                <p className="text-xs font-mono mb-3 text-center font-semibold text-sky-500">
                  {project.stack}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block px-4 py-2 border border-gray-300 text-white rounded overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                  <span className="relative z-10 flex gap-2 group-hover:text-gray-900 transition-colors duration-500">
                    View Project <ArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
