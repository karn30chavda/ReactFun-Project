import {
  BookOpen,
  CheckSquare,
  Clock,
  LogIn,
  PaintBucket,
  Plus,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroimage from "../../../assets/heroimage.jpg";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <aside className="px-4 py-16 bg-white sm:px-10 lg:px-20">
        <div className="flex flex-col-reverse items-center justify-between gap-12 mx-auto max-w-7xl sm:flex-row">
          {/* Text */}
          <div className="space-y-6 text-center sm:w-1/2 sm:text-left">
            <h1 className="text-4xl font-bold leading-snug text-gray-900 sm:text-5xl">
              Upgrade Your Skills
              <br />
              <span className="text-orange-700">One Project at a Time</span>
            </h1>
            <p className="text-lg text-gray-700">
              Build real-world apps with React, Tailwind, and APIs. Grow
              confidently through hands-on coding and project-based learning.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-white transition bg-orange-700 rounded-lg hover:bg-orange-800"
            >
              <Rocket size={18} /> Explore Projects
            </Link>
          </div>

          {/* Image */}
          <div className="flex justify-center sm:w-1/2">
            <img src={heroimage} alt="Hero" className="w-72 sm:w-96" />
          </div>
        </div>
      </aside>

      {/* What You’ll Learn Section */}
      <section className="bg-[#fff4d1] py-16 px-4 sm:px-20 text-center">
        <h2 className="mb-6 text-3xl font-bold text-indigo-700 sm:text-4xl">
          What You'll Learn Here
        </h2>
        <p className="max-w-3xl mx-auto mb-10 text-base text-gray-600 sm:text-lg">
          Master front-end skills by working on fun, practical projects using
          modern tools and best practices.
        </p>

        <div className="grid max-w-5xl gap-6 mx-auto sm:grid-cols-3">
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
              className="p-6 text-left transition shadow bg-gray-50 rounded-xl hover:shadow-md"
            >
              <h3 className="mb-2 text-xl font-semibold text-orange-700">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-blue-50 py-14">
        <h2 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl">
          Ready to Start Your Journey?
        </h2>
        <p className="mb-6 text-base text-gray-600 sm:text-lg">
          Browse the project gallery or visit the About page to see how this
          platform was built.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            <Wrench size={18} /> Explore Projects
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition bg-gray-800 rounded-lg hover:bg-gray-900"
          >
            <BookOpen size={18} /> About This Site
          </Link>
        </div>
      </section>

      {/* Project Summary Section */}
      <section className="px-4 py-16 text-center bg-white sm:px-20 ">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 sm:text-4xl">
          Featured Projects
        </h2>
        <p className="max-w-3xl mx-auto mb-10 text-base text-gray-600 sm:text-lg">
          These beginner-friendly projects help you master core concepts in
          React, Tailwind CSS, and working with APIs.
        </p>

        <div className="grid max-w-6xl gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {/* Background Color Changer */}
          <div className="p-6 text-left transition shadow bg-orange-50 rounded-xl hover:shadow-md">
            <div className="flex items-center gap-2 mb-2 text-orange-700">
              <PaintBucket size={20} />
              <h3 className="text-xl font-bold">Background Color Changer</h3>
            </div>
            <p className="text-sm text-gray-600">
              Change the page background color dynamically using buttons and
              React state.
            </p>
          </div>

          {/* Animated Clock */}
          <div className="p-6 text-left transition shadow bg-indigo-50 rounded-xl hover:shadow-md">
            <div className="flex items-center gap-2 mb-2 text-indigo-700">
              <Clock size={20} />
              <h3 className="text-xl font-bold">Animated Clock</h3>
            </div>
            <p className="text-sm text-gray-600">
              Displays the real-time clock using `useEffect` and updates every
              second.
            </p>
          </div>

          {/* Counter App */}
          <div className="p-6 text-left transition shadow bg-green-50 rounded-xl hover:shadow-md">
            <div className="flex items-center gap-2 mb-2 text-green-700">
              <Plus size={20} />
              <h3 className="text-xl font-bold">Counter App</h3>
            </div>
            <p className="text-sm text-gray-600">
              A simple number counter with limits and error messages built using
              conditional rendering.
            </p>
          </div>

          {/* Currency Converter */}
          <div className="p-6 text-left transition shadow bg-blue-50 rounded-xl hover:shadow-md">
            <div className="flex items-center gap-2 mb-2 text-blue-700">
              <RefreshCw size={20} />
              <h3 className="text-xl font-bold">Currency Converter</h3>
            </div>
            <p className="text-sm text-gray-600">
              Convert currency in real-time using a public API and React custom
              hook.
            </p>
          </div>

          {/* Password Generator */}
          <div className="p-6 text-left transition shadow bg-yellow-50 rounded-xl hover:shadow-md">
            <div className="flex items-center gap-2 mb-2 text-yellow-700">
              <ShieldCheck size={20} />
              <h3 className="text-xl font-bold">Password Generator</h3>
            </div>
            <p className="text-sm text-gray-600">
              Generate secure passwords with options for numbers, special
              characters, and copy functionality.
            </p>
          </div>

          {/* Cards Project */}
          <div className="p-6 text-left transition shadow bg-purple-50 rounded-xl hover:shadow-md">
            <div className="flex items-center gap-2 mb-2 text-purple-700">
              <ShieldCheck size={20} />
              <h3 className="text-xl font-bold">Cards UI Project</h3>
            </div>
            <p className="text-sm text-gray-600">
              Beautiful profile cards built using React with props, reusability,
              and responsive Tailwind design.
            </p>
          </div>

          {/* Context API Project */}
          <div className="p-6 text-left transition shadow bg-emerald-50 rounded-xl hover:shadow-md">
            <div className="flex items-center gap-2 mb-2 text-emerald-700">
              <LogIn size={20} />
              <h3 className="text-xl font-bold">useContext Fetching Project</h3>
            </div>
            <p className="text-sm text-gray-600">
              Fetching username from the login page and displaying it on Profile
              page using useContext Hook.
            </p>
          </div>

          {/* Todo App Project */}
          <div className="p-6 text-left transition shadow bg-rose-50 rounded-xl hover:shadow-md">
            <div className="flex items-center gap-2 mb-2 text-rose-700">
              <CheckSquare size={20} />
              <h3 className="text-xl font-bold">Todo Manager</h3>
            </div>
            <p className="text-sm text-gray-600">
              A full-featured Todo list built with React, Tailwind CSS, Lucide
              icons, and Context API. Supports editing, saving, deleting, and
              toggling tasks — all synced to localStorage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
