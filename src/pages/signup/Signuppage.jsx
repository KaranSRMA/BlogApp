import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


const Signuppage = () => {
  const usernameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmpasswordInputRef = useRef(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [error, seterror] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const Authenticated = () => {
      if (isAuthenticated) {
        navigate('/')
      }
    }
    Authenticated();
  }, [isAuthenticated]);

  const handleSignup = async (e) => {
    e.preventDefault();
    const username = usernameInputRef.current.value.trim();
    const email = emailInputRef.current.value.trim();
    const password = passwordInputRef.current.value.trim();
    const confirmpassword = confirmpasswordInputRef.current.value.trim();


    if (password !== confirmpassword) {
      seterror("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      seterror("Password must be at least six characters long")
      return;
    }
    setDisabled(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_SIGNUP_URL}`, { username, email, password });
      const data = response.data;
      localStorage.setItem("jwt", data.jwt);
      usernameInputRef.current.value = "";
      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
      confirmpasswordInputRef.current.value = "";
      setDisabled(false);
      navigate("/login")
    } catch (error) {
      console.error("Login Error:", error); // Debugging log
      setDisabled(false);

      if (error.response) {
        seterror(error.response.data?.error?.message || "Invalid credentials.");
      } else if (error.request) {
        seterror("No response from server. Please try again later.");
      } else {
        seterror("An error occurred. Please try again.");
      }
    }
  }

  const handleGoogleSignup = async (e) => {
    window.location.href = "https://blogmaze.onrender.com/api/connect/google";
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#141414] text-white">
      <div className="bg-[#191919] p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <>
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              ref={usernameInputRef}
              className="w-full px-4 py-2 border rounded-lg bg-[#141414] border-gray-600 text-white"
              required
            />
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
              minLength={6}
              maxLength={20}
              className="w-full px-4 py-2 border rounded-lg bg-[#141414] border-gray-600 text-white"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              ref={confirmpasswordInputRef}
              className="w-full px-4 py-2 border rounded-lg bg-[#141414] border-gray-600 text-white"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className={`w-full text-white py-2 rounded-lg ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
              disabled={disabled}
            >
              {disabled ? "Signing up..." : "Sign Up"}
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
            <FcGoogle className="mr-2" size={20} /> Sign Up with Google
          </button>
        </>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signuppage
