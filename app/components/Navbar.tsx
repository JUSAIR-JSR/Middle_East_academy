"use client"; // ✅ Required for Client Components

import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Section with ID "${id}" not found.`);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { to: "Hero", text: "Home" },
    { to: "Courses", text: "Courses" },
    { to: "Support", text: "Support" },
    { to: "About", text: "About" },
    { to: "Locations", text: "Location" },
  ];

  return (
    <nav className="bg-black text-white  fixed w-full z-50 top-0" ref={menuRef}>
      <div className="max-w-[1280px] mx-auto flex justify-between items-center h-16 px-4 lg:px-10">
        <h2 className="text-2xl text-white cursor-pointer"><strong className="text-red-600">Middle</strong> East Academy</h2>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-lg">
          {navLinks.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-red-500 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {text}
            </Link>
          ))}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            onClick={() => scrollToSection("ContactUs")}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden text-xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-black text-white transition-transform duration-300 lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
        <ul className="flex flex-col text-xl items-center space-y-6 mt-10">
          {navLinks.map(({ to, text }) => (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-red-500"
                onClick={toggleMenu}
              >
                {text}
              </Link>
            </li>
          ))}
          <li>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition" onClick={() => scrollToSection("ContactUs")}>
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
