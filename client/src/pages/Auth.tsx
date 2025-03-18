import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ChromeDinoGame from "react-chrome-dino";

export const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignUp = location.pathname === "/signup";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isSignUp && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(isSignUp ? "Signing Up" : "Signing In", formData);
  };

  return (
    <div className="bg-offWhite flex flex-col min-h-screen relative justify-center">
      <Navbar />
      <div className="bg-lightGrey/60 bg-opacity-75 mt-5 border-lightGrey border-2 h-auto justify-center mx-auto p-10 rounded-3xl w-full max-w-sm relative ">
        <h2 className="text-center text-xl font-bold mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          {isSignUp && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate(isSignUp ? "/signin" : "/signup")}
          >
            {isSignUp ? " Sign In" : " Sign Up"}
          </span>
        </p>
      </div>
      <div className="bottom-0 left-0 w-full flex items-center justify-center bg-offWhite mt-6 px-4 z-50">
        <div className="w-full max-w-md h-[200px] overflow-hidden z-50">
          <ChromeDinoGame />
        </div>
      </div>
    </div>
  );
};

export default Auth;
