import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/home/Homepage";
import Blogspage from "./pages/blogs/Blogspage";
import Resourcespage from "./pages/resources/Resourcespage";
import Aboutpage from "./pages/about/Aboutpage";
import Contactpage from "./pages/contact/Contactpage";
import Footer from "./components/Footer";
import SinglePost from "./components/SinglePost";
import Cta from "./components/Cta";
import ScrollToTop from "./components/ScrollToTop";
import LoginPage from "./pages/login/Loginpage";
import SignupPage from "./pages/signup/Signuppage";
import GoogleRedirectHandler from "./pages/google/GoogleRedirectHandler";
import Logout from "./components/Logout";
import TermsandConditions from "./components/TermsandConditions";
import Privacy from "./components/Privacy";

function NotFoundHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    toast.error(`The page ${location.pathname} does not exist!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });

    navigate("/", { replace: true });

  }, [location, navigate]);

  return null;
}


function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <MainRoutes />
      <Footer />
      <ToastContainer />
    </>
  );
}


function MainRoutes() {
  const location = useLocation();
  const hideComponents = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Blogspage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/resources" element={<Resourcespage />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/terms" element={<TermsandConditions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/connect/google/redirect" element={<GoogleRedirectHandler />} />
          <Route path="*" element={<NotFoundHandler />} />
        </Routes>

      {!hideComponents && (
        <>
          <Cta />
        </>
      )}
    </>
  );
}

export default App;
