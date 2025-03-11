import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Personal Info */}
        <div>
          <h2 className="text-lg font-semibold">About Me</h2>
          <p className="mt-2">
            Hi, I'm Siti Isyaroh, a Computer Engineering student passionate
            about software development and AI.
          </p>
          <p>Email: sitiisyaroh17@gmail.com</p>
          <p>Phone: +62 852 3415 3629</p>
          <p>Location: Indonesia</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold">Connect with Me</h2>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a
              href="https://www.instagram.com/isyarohhh/"
              className="text-xl hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/siti-isyaroh-453686245/"
              className="text-xl hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sitiisyaroh"
              className="text-xl hover:text-gray-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4 text-sm">
        &copy; {new Date().getFullYear()} Siti Isyaroh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
