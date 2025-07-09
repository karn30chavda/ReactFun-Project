import { useContext } from "react";
import UserContext from "../../context/userContext";

function Profile() {
  const { data } = useContext(UserContext);

  if (!data)
    return (
      <div className="flex items-center justify-center mt-4">
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-md text-center text-black/70 text-lg w-full max-w-sm">
          Please login
        </div>
      </div>
    );

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-md text-center text-black/70 text-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-blue-800">Welcome 👋 {data.userName}</h2>
      </div>
    </div>
  );
}

export default Profile;
