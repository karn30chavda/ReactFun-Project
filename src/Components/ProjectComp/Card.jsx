import { ArrowRight } from "lucide-react";

function Card({
  userName = "username",
  imagelink = "https://images.pexels.com/photos/9646287/pexels-photo-9646287.jpeg",
  btnText = "Read more",
}) {
  return (
    <div className="my-6 mx-auto w-full max-w-md bg-gray-400/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-[1.02] hover:shadow-xl">
      <img
        src={imagelink}
        alt="Profile"
        className="w-full h-64 object-cover"
      />
      <div className="p-5 text-indigo-800 space-y-4 text-center">
        <h2 className="text-2xl font-bold border-b border-gray-600 pb-1">
          {userName}
        </h2>
        <p className="text-sm text-gray-800 font-semibold leading-relaxed">
          As a passionate software developer, I enjoy solving problems and
          learning new technologies. My journey in web development started
          with HTML and CSS.
        </p>
        <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer rounded-md transition">
          {btnText}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default Card;
