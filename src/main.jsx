import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ArrowBigUpDash  } from "lucide-react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App";

import {
  Home,
  Github,
  About,
  User,
  Projects,
  gitHubInfo,
} from "./Components/InnerContent/InnerContentExporter";

import {
  BgColourChanger,
  CounterApp,
  Clock,
  CurrencyApp,
  PasswordGenerator,
  Card,
  UsecontextProvider,
  Login,
  Profile,
} from "./Components/ProjectComp/ProjectExporter";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route loader={gitHubInfo} path="github" element={<Github />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />}>
        <Route
          index
          element={
            <div className="flex flex-col items-center justify-center mt-10 text-center">
              <ArrowBigUpDash   size={48} className="mb-2 text-indigo-500 animate-bounce" />
              <p className="text-xl font-bold tracking-wider text-orange-500 ">
                Select a project to view details
              </p>
            </div>
          }
        />
        <Route path="BgColour-Changer" element={<BgColourChanger />} />
        <Route path="Clock" element={<Clock />} />
        <Route path="Counter-project" element={<CounterApp />} />
        <Route path="CurrencyApp" element={<CurrencyApp />} />
        <Route
          path="Password-Genrator-Project"
          element={<PasswordGenerator />}
        />
        <Route
          path="Card"
          element={
            <div className="flex justify-center p-4 bg-gray-500 rounded-2xl">
              <div className="grid grid-cols-1 gap-10 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card
                  userName="Karan Chavda"
                  imagelink="https://images.pexels.com/photos/29455461/pexels-photo-29455461.jpeg"
                />
                <Card
                  userName="John Doe"
                  imagelink="https://images.pexels.com/photos/32273714/pexels-photo-32273714.jpeg"
                  btnText="View more"
                />
                <Card />
              </div>
            </div>
          }
        />
        <Route
          path="Context"
          element={
            <UsecontextProvider>
              <div className="flex items-center justify-center">
                <div className="bg-gray-200 h-auto p-10 w-[95%] md:w-[80%] rounded-xl">
                  <Login />
                  <Profile />
                </div>
              </div>
            </UsecontextProvider>
          }
        />
      </Route>
      <Route path="user/:userId" element={<User />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
