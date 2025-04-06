import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Loginpage = () => {
  const passwordInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [resendMail, setresendMail] = useState(false);
  const { isAuthenticated } = useAuth();
  const { login } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(location.state?.from || '/');
    }
  }, [isAuthenticated, location.pathname]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setDisabled(true);

    try {
      const identifier = emailInputRef.current.value.trim();
      const password = passwordInputRef.current.value.trim();
      const response = await axios.post(`${import.meta.env.VITE_LOGIN_URL}`, { identifier, password });

      login(response.data.jwt);
      seterror("");
      navigate(location.state?.from || '/');
    } catch (error) {
      const errorResponse = error.response?.data?.error;
      const errorMessage = errorResponse?.message || "An error occurred. Please try again.";

      if (errorResponse?.name === "ApplicationError" && errorMessage === "Your account email is not confirmed") {
        seterror("Your account email is not confirmed.");
        setresendMail(true)
      } else {
        seterror(errorMessage);
      }
    } finally {
      setDisabled(false);
    }
  };


  const handleResendMail = async () => {
    //to do
  }



  const handleGoogleSignup = async (e) => {
    window.location.href = "http://localhost:1337/api/connect/google";
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#141414] text-white">
      <div className="bg-[#191919] p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={emailInputRef}
              className="w-full px-4 py-2 border rounded-lg bg-[#141414] border-gray-600 text-white"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={passwordInputRef}
              className="w-full px-4 py-2 border rounded-lg bg-[#141414] border-gray-600 text-white"
              required
            />
            {resendMail && <button type='button' onClick={handleResendMail} className='text-blue-500 hover:underline'>resend email</button>}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className={`w-full text-white py-2 rounded-lg ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
              disabled={disabled}
            >
              {disabled ? "Logging..." : "Login"}
            </button>
          </form>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="px-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>
          <button
            onClick={handleGoogleSignup}
            className="flex items-center justify-center w-full mb-4 bg-gray-800 py-2 rounded-lg hover:bg-gray-700"
          >
            <FcGoogle className="mr-2" size={20} /> Login with Google
          </button>
        </>
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Signup
          </a>
        </p>
      </div>
    </div>
  )
}

export default Loginpage
