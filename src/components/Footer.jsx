import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 px-8 py-6 mx-12 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Navigation */}
         <nav>
        <ul className="flex items-center space-x-8 text-sm font-medium">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold"
                  : "hover:text-gray-400 transition"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold"
                  : "hover:text-gray-400 transition"
              }
            >
              Projects
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/artboard"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold"
                  : "hover:text-gray-400 transition"
              }
            >
              Artboard
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold"
                  : "hover:text-gray-400 transition"
              }
            >
              Get in touch
            </NavLink>
          </li>
        
        </ul>
      </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-400">
          <a
            href="https://github.com/komalSingh9289"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/komalsingh9289"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:komal001singh002@email.com"
            className="hover:text-white transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Komal Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
