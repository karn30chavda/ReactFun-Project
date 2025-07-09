import React from "react";
import aboutimg from "../../../assets/about.png";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-10 md:space-y-0 md:flex md:gap-12 lg:items-center">
          
          {/* Image */}
          <div className="md:w-7/12">
            <img
              src={aboutimg}
              alt="Developer Illustration"
              className="w-full max-w-[600px] mx-auto"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-7/12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About This Platform
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              This platform is a personal project built to help aspiring web developers, like me, grow through real-world coding. 
              It focuses on building hands-on experience with technologies like React, Tailwind CSS, and JavaScript.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              I'm passionate about creating clean, responsive, and interactive UIs. Every project here is crafted with best practices in mind—from routing and hooks to fetching APIs and responsive design.
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              React makes development fun and powerful. With its component-based structure and declarative style, it's easier than ever to build modern web apps—and I'm here to explore every bit of it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
