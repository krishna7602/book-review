import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext"; 
import { useNavigate } from "react-router-dom";



const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);


  const handleSubmit = async(e) => {
    e.preventDefault();
    const newUser = { email:email, password:password };
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, newUser);
      if (res.status === 200) {
        const data = res.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
    }
  };

  
  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?cs=srgb&dl=pexels-minan1398-694740.jpg&fm=jpg"
        className="h-full w-full object-cover absolute top-0 left-0"
        alt="Background"
      />

      {/* Login Form Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-[90%] max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">User Login</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 text-black py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 flex justify-center text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/usersignup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
          
          <p className="text-center text-gray-600 mt-4">
            Are you admin?{" "}<Link to="/adminlogin" className="text-blue-500 hover:underline">login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;





