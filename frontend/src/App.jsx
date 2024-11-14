import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import LandingPage from "./pages/LandingPage.jsx";

const App = () => {
  return (
    <>
      <ToastContainer />
      {/* <LandingPage/> */}
      <Navigation />
      <main className="py-3">
        <Outlet />
      </main>
    </>
  );
};

export default App;
