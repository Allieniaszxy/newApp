import React, { useState } from "react";
import Button from "../../components/reusable/Button";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Login = () => {
  const { btnLoading, loginUser } = UserData(); // ✅ FIXED
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(email, password, navigate);
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="p-7 rounded-lg shadow-md text-center w-[300px] max-md:w-[90%]">
        <h2 className="text-xl text-blue-400 mb-3">Login</h2>

        <form className="text-left" onSubmit={handleSubmit}>
          <label className="block mb-1 text-[14px] text-[#333]">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            required
            className="w-full p-2.5 mb-2.5 rounded border border-[#ccc]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block mb-1 text-[14px] text-[#333]">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="w-full p-2.5 mb-2.5 rounded border border-[#ccc]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit" // ✅ FIXED
            title={btnLoading ? "Please wait..." : "Login"}
            bgColor="#2563eb"
            color="#fff"
            padding="5px 10px"
            margin="10px 0"
            className="rounded-lg hover:bg-blue-600"
            disabled={btnLoading}
          />
        </form>

        <p>
          Don't have an account?{" "}
          <Link to={"/register"} className="text-blue-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
