import { Link } from "react-router-dom";
import heroimage from "../../../assets/heroimage.jpg";
import {
  Rocket,
  Wrench,
  BookOpen,
  PaintBucket,
  Clock,
  Plus,
  RefreshCw,
  ShieldCheck,
  LogIn,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <aside className="bg-white py-16 px-4 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="sm:w-1/2 text-center sm:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-snug">
              Upgrade Your Skills
              <br />
              <span className="text-orange-700">One Project at a Time</span>
            </h1>
            <p className="text-gray-700 text-lg">
              Build real-world apps with React, Tailwind, and APIs. Grow
              confidently through hands-on coding and project-based learning.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-700 text-white font-medium rounded-lg hover:bg-orange-800 transition"
            >
              <Rocket size={18} /> Explore Projects
            </Link>
          </div>

          {/* Image */}
          <div className="sm:w-1/2 flex justify-center">
            <img
              src={heroimage}
              alt="Hero"
              className="w-72 sm:w-96"
            />
          </div>
        </div>
      </aside>

      {/* What You’ll Learn Section */}
      <section className="bg-[#fff4d1] py-16 px-4 sm:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6">
          What You'll Learn Here
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-base sm:text-lg">
          Master front-end skills by working on fun, practical projects using
          modern tools and best practices.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "React & Routing",
              desc: "Component-based UIs, hooks, and React Router navigation.",
            },
            {
              title: "Tailwind CSS",
              desc: "Responsive layouts with utility-first styling & animation.",
            },
            {
              title: "API Integration",
              desc: "Work with real data using fetch and Axios effectively.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition text-left"
            >
              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          Ready to Start Your Journey?
        </h2>
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          Browse the project gallery or visit the About page to see how this
          platform was built.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            <Wrench size={18} /> Explore Projects
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition"
          >
            <BookOpen size={18} /> About This Site
          </Link>
        </div>
      </section>

      {/* Project Summary Section */}
      <section className="bg-white py-16 px-4 sm:px-20 text-center ">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Featured Projects
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-base sm:text-lg">
          These beginner-friendly projects help you master core concepts in
          React, Tailwind CSS, and working with APIs.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Background Color Changer */}
          <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-md transition text-left">
            <div className="flex items-center gap-2 text-orange-700 mb-2">
              <PaintBucket size={20} />
              <h3 className="text-xl font-bold">Background Color Changer</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Change the page background color dynamically using buttons and
              React state.
            </p>
          </div>

          {/* Animated Clock */}
          <div className="p-6 bg-indigo-50 rounded-xl shadow hover:shadow-md transition text-left">
            <div className="flex items-center gap-2 text-indigo-700 mb-2">
              <Clock size={20} />
              <h3 className="text-xl font-bold">Animated Clock</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Displays the real-time clock using `useEffect` and updates every
              second.
            </p>
          </div>

          {/* Counter App */}
          <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-md transition text-left">
            <div className="flex items-center gap-2 text-green-700 mb-2">
              <Plus size={20} />
              <h3 className="text-xl font-bold">Counter App</h3>
            </div>
            <p className="text-gray-600 text-sm">
              A simple number counter with limits and error messages built using
              conditional rendering.
            </p>
          </div>

          {/* Currency Converter */}
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition text-left">
            <div className="flex items-center gap-2 text-blue-700 mb-2">
              <RefreshCw size={20} />
              <h3 className="text-xl font-bold">Currency Converter</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Convert currency in real-time using a public API and React custom
              hook.
            </p>
          </div>

          {/* Password Generator */}
          <div className="p-6 bg-yellow-50 rounded-xl shadow hover:shadow-md transition text-left">
            <div className="flex items-center gap-2 text-yellow-700 mb-2">
              <ShieldCheck size={20} />
              <h3 className="text-xl font-bold">Password Generator</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Generate secure passwords with options for numbers, special
              characters, and copy functionality.
            </p>
          </div>

          {/* Cards Project */}
          <div className="p-6 bg-purple-50 rounded-xl shadow hover:shadow-md transition text-left">
            <div className="flex items-center gap-2 text-purple-700 mb-2">
              <ShieldCheck size={20} />
              <h3 className="text-xl font-bold">Cards UI Project</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Beautiful profile cards built using React with props, reusability, and responsive Tailwind design.
            </p>
          </div>


          {/* Context API Project */}
          <div className="p-6 bg-emerald-50 rounded-xl shadow hover:shadow-md transition text-left">
            <div className="flex items-center gap-2 text-emerald-700 mb-2">
              <LogIn size={20} /> 
              <h3 className="text-xl font-bold">useContext Fetching Project</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Fetching username from the login page and displaying it on Profile page using useContext Hook.
            </p>
          </div>
          </div>
      </section>
    </div>
  );
}
