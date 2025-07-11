import {
  Clock,
  Code2,
  IdCard,
  ListTodo,
  LogIn,
  Paintbrush,
  Repeat2,
  Rocket,
  Shield,
} from "lucide-react"; // Icons
import { NavLink, Outlet, useLocation } from "react-router-dom";

function Projects() {
  const location = useLocation();

  const isRouteActive = (path) => location.pathname.endsWith(path);

  const projectLinks = [
    {
      path: "BgColour-Changer",
      name: "Background Colour Changer",
      icon: <Paintbrush size={24} />,
    },
    {
      path: "counter-project",
      name: "Counter Project",
      icon: <Repeat2 size={24} />,
    },
    {
      path: "Clock",
      name: "Digital Clock Project",
      icon: <Clock size={24} />,
    },
    {
      path: "CurrencyApp",
      name: "Currency Exchange Project",
      icon: <Code2 size={24} />,
    },
    {
      path: "Password-Genrator-Project",
      name: "Password Generator Project",
      icon: <Shield size={24} />,
    },
    {
      path: "card",
      name: "Resuable Card",
      icon: <IdCard size={24} />,
    },
    {
      path: "Context",
      name: "Context Api Project",
      icon: <LogIn size={24} />,
    },
    {
      path: "todoApp",
      name: "Todo Manager with LocalStorage",
      icon: <ListTodo size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-gray-200 py-12 px-4">
      <h1 className="text-4xl text-center font-bold text-blue-700 mb-10 tracking-tight">
        <Rocket className="inline align-middle ml-1" size={40} /> Featured React
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projectLinks.map((project) => (
          <NavLink
            key={project.path}
            to={project.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-5 rounded-xl transition-all duration-300 shadow-md border border-gray-300 ${
                isActive
                  ? "bg-orange-100 border-orange-400 scale-103"
                  : "bg-white hover:bg-gray-100"
              }`
            }
          >
            <div className="text-blue-600">{project.icon}</div>
            <div className="text-lg font-semibold text-gray-800">
              {project.name}
            </div>
          </NavLink>
        ))}
      </div>

      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Projects;
