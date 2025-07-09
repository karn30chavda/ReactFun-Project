import { useState } from "react";
import { Palette } from "lucide-react";

function BgColourChanger() {
  const [color, setColor] = useState("#1e1e1e");

  const colors = [
    "red",
    "green",
    "blue",
    "pink",
    "violet",
    "orange",
    "olive",
    "purple",
  ];

  return (
       <div className="flex items-center justify-center">
    <div
      className="flex flex-col justify-center items-center transition-colors duration-500 px-4 rounded-xl w-[95%] md:w-[80%] h-auto p-15"
      style={{ backgroundColor: color }}
    >
      <div className="p-[%]">
        {/* Project Title */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            <Palette className="inline align-middle ml-1" size={40} />{" "}
            Background Changer
          </h1>
          <p className="text-gray-200 mt-2 text-sm sm:text-base">
            Click any color below to change the background
          </p>
        </div>

        {/* Color Button Panel */}
        <div className="bg-white/20 backdrop-blur-md shadow-lg p-6 sm:p-8 rounded-2xl flex flex-wrap justify-center gap-4 w-full max-w-2xl">
          {colors.map((clr) => (
            <button
              key={clr}
              onClick={() => setColor(clr)}
              className="capitalize px-5 py-2 text-white rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-200 hover:cursor-pointer"
              style={{ backgroundColor: clr }}
            >
              {clr}
            </button>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default BgColourChanger;
