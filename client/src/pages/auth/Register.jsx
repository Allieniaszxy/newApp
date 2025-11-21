import React, { useState } from "react";
import Button from "../../components/reusable/Button";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Register = () => {
  const { btnLoading, registerUser } = UserData(); // ✅ FIXED
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(name, email, password, navigate);
  };

  return (
    <div>
      <div className="flex items-center justify-center h-[80vh] ">
        <div className="p-7 rounded-lg shadow-md text-center w-[300px] max-md:w-[90%]">
          <h2 className="text-xl text-blue-400 mb-3">Register</h2>
          <form action="" className="text-left" onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className=" block mb-1 text-[14px] text-[#333]"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full p-2.5 mb-2.5 rounded border-[1px solid #ccc]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label
              htmlFor="email"
              className=" block mb-1 text-[14px] text-[#333]"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full p-2.5 mb-2.5 rounded border-[1px solid #ccc]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label
              htmlFor="password"
              className=" block mb-1 text-[14px] text-[#333]"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full p-2.5 mb-2.5 rounded border-[1px solid #ccc]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              title={btnLoading ? "Please wait..." : "Register"}
              bgColor="#2563eb"
              color="#fff"
              padding="5px 10px"
              margin="10px 0"
              className="rounded-lg hover:bg-blue-600"
              onClick={() => {}}
              disabled={btnLoading}
            />
          </form>
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-400">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
