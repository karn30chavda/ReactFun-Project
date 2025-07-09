import { useState, useEffect } from "react";
import { Clock3 } from "lucide-react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center text-center bg-gray-500 backdrop-blur-2xl rounded-2xl text-white w-auto  h-auto p-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl px-10 py-8 text-center space-y-4 w-full max-w-sm">
          <div className="flex justify-center items-center gap-2 text-orange-400">
            <Clock3 size={28} strokeWidth={2} />
            <h1 className="text-2xl font-bold">Live Clock</h1>
          </div>

          <p className="text-4xl font-mono tracking-wide">
            {time}
            <span className="ml-1 text-base text-gray-300 font-semibold">
              IST
            </span>
          </p>

          <p className="text-xs text-white font-bold">
            Stay synced with real time{" "}
            <Clock3 className="inline align-middle ml-1" size={12} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Clock;
