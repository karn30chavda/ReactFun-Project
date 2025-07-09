import { useCallback, useEffect, useRef, useState } from "react";
import { Copy, Lock, Eye } from "lucide-react";

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed, generatePassword]);

  return (
    <div className="flex items-center justify-center">
      <div className="h-auto p-10 w-[95%] md:w-[80%] flex items-center justify-center bg-gray-600 rounded-2xl px-4 py-10">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center text-indigo-700 flex justify-center items-center gap-2">
            <Lock size={22} /> Password Generator
          </h1>

          {/* Password Display */}
          <div className="flex items-center rounded-lg border px-4 py-2 shadow-inner bg-gray-100">
            <input
              type="text"
              value={password}
              readOnly
              ref={passRef}
              className="w-full bg-transparent font-semibold text-indigo-700 text-lg outline-none"
            />
            <button
              onClick={copyPasswordToClipboard}
              className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
              title="Copy to clipboard"
            >
              <Copy size={20} />
            </button>
          </div>

          {/* Settings */}
          <div className="space-y-4">
            {/* Length Slider */}
            <div className="flex items-center justify-between">
              <label htmlFor="length" className="font-medium text-gray-700 ">
                Length: {length}
              </label>
              <input
                type="range"
                id="length"
                min={8}
                max={20}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-2/3 accent-indigo-600 hover:cursor-pointer"
              />
            </div>

            {/* Options */}
            <div className="flex flex-wrap gap-4 text-sm text-indigo-700 font-medium ">
              <label className="flex items-center gap-2 hover:cursor-pointer">
                <input
                  type="checkbox"
                  checked={numAllowed}
                  onChange={() => setNumAllowed((prev) => !prev)}
                  className="accent-indigo-600"
                />
                Include Numbers
              </label>

              <label className="flex items-center gap-2 hover:cursor-pointer">
                <input
                  type="checkbox"
                  checked={charAllowed}
                  onChange={() => setCharAllowed((prev) => !prev)}
                  className="accent-indigo-600"
                />
                Include Symbols
              </label>
            </div>
          </div>

          {/* Regenerate Button */}
          <div className="flex justify-center">
            <button
              onClick={generatePassword}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 hover:cursor-pointer transition flex items-center gap-2"
            >
              <Eye size={18} /> Regenerate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
