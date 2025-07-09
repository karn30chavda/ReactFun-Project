import { useState } from "react";
import { Plus, Minus, AlertTriangle } from "lucide-react";

function CounterApp() {
  const [counter, setCounter] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      setErrorMessage("");
    } else {
      setErrorMessage("You cannot go above 20");
    }
  };

  const removeValue = () => {
    if (counter > -20) {
      setCounter(counter - 1);
      setErrorMessage("");
    } else {
      setErrorMessage("You cannot go below -20");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="h-auto py-10 w-[95%] md:w-[80%] flex items-center justify-center bg-gray-400 rounded-2xl">
        <div className="bg-white shadow-lg rounded-xl p-8 w-[80%]  border border-gray-200 text-center space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Counter Project</h1>

          <div className="text-5xl font-mono text-gray-700">{counter}</div>

          <div className="flex items-center justify-center gap-6">
            <button
              onClick={removeValue}
              className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-full transition hover:cursor-pointer"
            >
              <Minus size={24} />
            </button>

            <button
              onClick={addValue}
              className="bg-green-100 hover:bg-green-200 text-green-600 p-3 rounded-full transition hover:cursor-pointer"
            >
              <Plus size={24} />
            </button>
          </div>

          {errorMessage && (
            <p className="text-red-600 text-sm flex items-center justify-center gap-1">
              <AlertTriangle size={16} /> {errorMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
