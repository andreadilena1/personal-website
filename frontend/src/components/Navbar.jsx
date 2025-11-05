import React, { useState } from "react";
import { Link } from "react-scroll";
import { Github, LinkedinIcon, Mail } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Aggiungi stato per il menu

  // Funzione per toggle del menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Social */}
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold text-blue-600">Andrea Di Lena</h2>
        <div className="flex gap-3 ml-2">
          <a
            href="mailto:andrea.dilena@elitesoftwarehouse.com"
            className="text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-125 duration-200"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/andreadilena1"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-125 duration-200"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/andreadilena/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-blue-600 no-underline transition-transform transform hover:scale-125 duration-200"
            title="Linkedin"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      

      {/* Menu hamburger per dispositivi sotto i 640px */}
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu}
          className="text-gray-600 focus:outline-none">
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Menu */}

      {/* Menu per dispositivi sopra i 640px */}
      <ul className={`${ isMenuOpen ? "flex flex-col gap-4 transition-all duration-300 ease-in-out" : "hidden"} sm:flex gap-4 text-gray-700 font-medium`}>      
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-blue-600 font-bold"
            className="cursor-pointer hover:text-blue-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-blue-600 font-bold"
            className="cursor-pointer hover:text-blue-600"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-blue-600 font-bold"
            className="cursor-pointer hover:text-blue-600"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
