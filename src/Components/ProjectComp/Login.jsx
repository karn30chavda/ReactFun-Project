import { useState, useContext } from "react";
import UserContext from "../../context/userContext";

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const { setData } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ userName, password });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-lg w-full max-w-sm space-y-4 ">
        <h2 className="text-center text-2xl font-bold text-blue-800">Login</h2>

        <input
          type="text"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          placeholder="Username"
          className=" bg-white text-gray-700 w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
          className="bg-white text-gray-700 w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
