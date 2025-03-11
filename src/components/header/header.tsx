import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navData = [
  {
    route: "/home",
    label: "Home",
  },
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <header className="flex justify-between items-center py-5 px-10 shadow bg-gray-900 text-white">
      <h2 className="text-xl font-semibold text-red-400">Siti Isyaroh</h2>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8">
        {navData.map((item) => (
          <a
            key={item.route}
            className="hover:text-blue-400 hover:underline"
            href={item.route}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="md:hidden text-xl"
      >
        {toggle ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center transition-transform transform ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={() => setToggle(false)}
          className="absolute top-5 right-5 text-2xl"
        >
          <FaTimes />
        </button>
        {navData.map((item) => (
          <a
            key={item.route}
            className="text-lg py-2 hover:text-blue-400 hover:underline"
            href={item.route}
            onClick={() => setToggle(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
