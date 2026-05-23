import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { Github, LinkedinIcon, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = "text-blue-600 font-bold";
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", to: "home", route: "/" },
    { name: "About", to: "about", route: "/about" },
    { name: "Projects", to: "projects", route: "/projects" },
    { name: "Contact", to: "contact", route: "/contact" },
  ];

  // Chiude menu mobile se resize > 767px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <nav className="bg-white shadow-md px-6 py-2 flex justify-between items-center sticky top-0 z-50">
        {/* Logo + Social */}
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-blue-600">Andrea Di Lena</h2>

          <div className="flex gap-3 ml-2">
            <a
              href="mailto:andrea.dilena@elitesoftwarehouse.com"
              className="text-gray-600 hover:text-blue-600"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/andreadilena1"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/andreadilena/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              {isHome ? (
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass={activeClass}
                  className="cursor-pointer hover:text-blue-600"
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={item.route}
                  className={({ isActive }) =>
                    isActive ? activeClass : "hover:text-blue-600"
                  }
                >
                  {item.name}
                </RouterLink>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 z-50"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Overlay + Menu Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-all duration-300
  w-32 md:w-32
  ${isOpen ? "translate-x-0" : "translate-x-full"}
  flex flex-col p-3 gap-3`}
      >
        {menuItems.map((item) => (
          <div key={item.name} onClick={toggleMenu}>
            {isHome ? (
              <ScrollLink
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-700 hover:text-blue-600 text-lg"
              >
                {item.name}
              </ScrollLink>
            ) : (
              <RouterLink
                to={item.route}
                className="text-gray-700 hover:text-blue-600 text-lg"
              >
                {item.name}
              </RouterLink>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
