import { useLoaderData } from "react-router-dom";
import {
  MapPin,
  Link as LinkIcon,
  Users,
  UserPlus,
  Globe,
  Brain,
  Search
} from "lucide-react";

function Github() {
  const data = useLoaderData();
  const portfolio = "https://karan-portfolio-website.netlify.app";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dfe6e9] to-[#f5f6fa] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-[#f1f2f6] shadow-xl rounded-2xl border border-gray-300 flex flex-col md:flex-row transition-all hover:scale-[1.01] duration-300">

        {/* Avatar */}
        <div className="md:w-1/3 flex justify-center items-center bg-[#dfe4ea] p-6">
          <img
            src={data?.avatar_url}
            alt="GitHub Avatar"
            className="w-40 h-40 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>

        {/* Info */}
        <div className="md:w-2/3 p-8 text-gray-800 space-y-5">

          {/* Name */}
          <div className="bg-white/70 rounded-md p-4 shadow-sm">
            <h2 className="text-2xl font-bold">{data?.name || "GitHub User"}</h2>
            <p className="text-sm text-gray-600">@{data?.login}</p>
          </div>

          {/* Grid Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

            {data?.location && (
              <div className="bg-white/70 rounded-md p-3 shadow-sm">
                <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                  <MapPin size={16} />
                  Location:
                </div>
                <p className="mt-1">{data.location}</p>
              </div>
            )}

            {data?.blog && (
              <div className="bg-white/70 rounded-md p-3 shadow-sm">
                <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                  <LinkIcon size={16} />
                  Blog:
                </div>
                <a
                  href={data.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline break-words mt-1 block"
                >
                  {data.blog}
                </a>
              </div>
            )}

            <div className="bg-white/70 rounded-md p-3 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                <Users size={16} />
                Followers:
              </div>
              <p className="mt-1">{data?.followers}</p>
            </div>

            <div className="bg-white/70 rounded-md p-3 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                <UserPlus size={16} />
                Following:
              </div>
              <p className="mt-1">{data?.following}</p>
            </div>

            <div className="col-span-1 sm:col-span-2 bg-white/70 rounded-md p-3 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                <Globe size={16} />
                Portfolio
              </div>
              <a
                href={portfolio}
                className="text-indigo-500 hover:underline break-words mt-1 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {portfolio}
              </a>
            </div>
          </div>

          {/* Bio */}
          {data?.bio && (
            <div className="bg-white/80 border border-gray-200 p-4 rounded-md shadow-sm">
              <div className="flex items-center gap-2 text-indigo-600 font-semibold mb-2">
                <Brain size={16} />
                Profile Summary
              </div>
              <p className="text-gray-700 text-sm">{data.bio}</p>
            </div>
          )}

          {/* GitHub Profile Button */}
          <div>
            <a
              href={data?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              <Search size={18} />
              View GitHub Profile
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Github;

export const gitHubInfo = async () => {
  const response = await fetch(`https://api.github.com/users/karn30chavda`);
  return response.json();
};
