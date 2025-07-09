import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
