import { useParams, Link } from "react-router-dom";
import { UserCircle } from "lucide-react";

export default function User() {
  const { userId } = useParams();

  return (
    <div className="h-auto p-4 flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4 py-10">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center shadow-xl">
        
        {/* Avatar */}
        <img
          src={`https://ui-avatars.com/api/?name=${userId}&background=random&bold=true`}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow"
        />

        {/* Icon + Name */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <UserCircle size={28} className="text-green-800" />
          <h2 className="text-2xl font-bold text-green-800">User Profile</h2>
        </div>

        {/* User ID */}
        <p className="text-lg text-gray-800 font-bold">
          User ID:{" "}
          <span className="text-green-700 font-semibold">{userId}</span>
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mt-6 text-green-700 hover:underline transition text-sm"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
