import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/logo.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 🔒 Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-white/50 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              className="h-10"
              src={logo}
              alt="Logo"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              Projects
            </Link>
            <Link
              to="/Github"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              Github
            </Link>
          </div>

          {/* Login / Signup */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-1.5 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50"
            >
              Sign Up
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          ref={dropdownRef}
          className="md:hidden mx-4 mt-2 rounded-xl backdrop-blur-xl bg-white/30 border border-white/20 shadow-lg px-6 py-4 space-y-2 transition-all"
        >
          <Link
            to="/"
            className="block py-1.5 text-gray-800 hover:text-orange-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-1.5 text-gray-800 hover:text-orange-600"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block py-1.5 text-gray-800 hover:text-orange-600"
          >
            Projects
          </Link>
          <Link
            to="/Github"
            className="block py-1.5 text-gray-800 hover:text-orange-600"
          >
            Github
          </Link>
          <hr className="border-gray-300" />
          <Link
            to="/login"
            className="block py-1.5 text-indigo-600 hover:underline font-semibold"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block py-1.5 text-indigo-600 hover:underline font-semibold"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
