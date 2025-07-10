import {
  Facebook,
  Github,
  MessageSquareMore,
  Rocket,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="text-gray-700 bg-white border-gray-400 shadow-inner border-t-1">
      <div className="px-6 py-10 mx-auto max-w-7xl md:flex md:justify-between">
        {/* Logo Section */}
        <div className="flex flex-col items-start gap-2 mb-8 md:mb-0">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} className="h-14" alt="Logo" />
          </Link>
          <p className="text-sm text-gray-500">
            Practice • Build • Launch{" "}
            <Rocket className="inline ml-1 align-middle" size={16} />
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <h3 className="mb-4 font-semibold text-gray-900">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="transition hover:text-orange-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-orange-600">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="transition hover:text-orange-600"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-gray-900">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="/github" className="transition hover:text-orange-600">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-orange-600">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition hover:text-orange-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-orange-600">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-between gap-4 px-6 py-6 mx-auto max-w-7xl sm:flex-row">
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
          <a href="#" className="transition hover:text-blue-600">
            <Facebook size={18} />
          </a>
          <a href="#" className="transition hover:text-blue-600">
            <Twitter size={18} />
          </a>
          <a href="#" className="transition hover:text-blue-600">
            <MessageSquareMore size={18} />
          </a>
          <a href="#" className="transition hover:text-blue-600">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
