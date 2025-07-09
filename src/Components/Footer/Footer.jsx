import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { Rocket, Github, Facebook, Twitter, MessageSquareMore } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t-1 border-gray-400  shadow-inner">
      <div className="max-w-7xl mx-auto py-10 px-6 md:flex md:justify-between">
        {/* Logo Section */}
        <div className="mb-8 md:mb-0 flex flex-col items-start gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              className="h-14"
              alt="Logo"
            />
          </Link>
          <p className="text-sm text-gray-500">
            Practice • Build • Launch{" "}
            <Rocket className="inline align-middle ml-1" size={16} />
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-orange-600 transition"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="/github" className="hover:text-orange-600 transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-600 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-sm text-gray-500">
          © 2025{" "}
          <a
            href="https://karanchavda.com"
            className="hover:underline hover:text-blue-600"
          >
            karanchavda
          </a>
          . All rights reserved.
        </span>

        <div className="flex space-x-4 text-gray-600">
          <a href="#" className="hover:text-blue-600 transition">
            <Facebook size={18} />
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            <Twitter size={18} />
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            <MessageSquareMore size={18} />
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
