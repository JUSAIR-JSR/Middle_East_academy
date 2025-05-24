"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBook,
  FaHandsHelping,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { to: "hero", text: "Home", icon: <FaHome size={20} /> },
    { to: "courses", text: "Courses", icon: <FaBook size={20} /> },
    { to: "support", text: "Support", icon: <FaHandsHelping size={20} /> },
    { to: "about", text: "About", icon: <FaInfoCircle size={20} /> },
    { to: "locations", text: "Location", icon: <FaMapMarkerAlt size={20} /> },
  ];

  return (
    <nav
  ref={menuRef}
  className={`fixed w-full top-0 transition-all duration-300 z-60 ${
    scrolled && !isMenuOpen
      ? "bg-black/90 backdrop-blur-lg py-2 shadow-2xl"
      : "bg-black py-3"
  }`}
>

      <div className="max-w-[1280px] mx-auto flex justify-between items-center h-16 px-4 lg:px-10">
        <h2 className="text-2xl text-white cursor-pointer">
          <strong className="text-red-600">Middle</strong> East Academy
        </h2>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-lg text-white">
          {navLinks.map(({ to, text, icon }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="flex items-center gap-2 hover:text-red-500 relative cursor-pointer
                after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]
                after:bg-red-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              <span className="text-red-500">{icon}</span>
              {text}
            </Link>
          ))}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center"
            onClick={() => scrollToSection("contact")}
          >
            <FaPhoneAlt className="mr-2" /> Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden text-xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-2xl text-red-500" />
          ) : (
            <FaBars className="text-2xl text-white" />
          )}
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
  className={`fixed top-0 right-0 w-72 h-full bg-gray-900 text-white transition-transform duration-300 ease-in-out lg:hidden z-70 ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>

        <div className="flex justify-between items-center p-5 border-b border-gray-700 bg-gray-800">
          <h2 className="text-xl font-bold text-white">
            <strong className="text-red-500">MEA</strong>
          </h2>
          <FaTimes
            className="text-2xl text-red-500 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col space-y-2 p-4">
          {navLinks.map(({ to, text, icon }) => (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="flex items-center p-4 hover:bg-gray-800 rounded-lg transition-colors text-lg cursor-pointer"
                onClick={toggleMenu}
              >
                <span className="text-red-500 mr-3">{icon}</span>
                <span className="text-white">{text}</span>
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <button
              className="w-full flex items-center justify-center bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition text-lg"
              onClick={() => scrollToSection("contact")}
            >
              <FaPhoneAlt className="mr-3" />
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
