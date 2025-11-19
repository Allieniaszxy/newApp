import React from "react";
import Button from "../../components/reusable/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[80vh] ">
        <div className="p-7 rounded-lg shadow-md text-center w-[300px] max-md:w-[90%]">
          <h2 className="text-xl text-blue-400 mb-3">Login</h2>
          <form action="" className="text-left">
            <label
              htmlFor="email"
              className=" block mb-1 text-[14px] text-[#333]"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              required
              className="w-full p-2.5 mb-2.5 rounded border-[1px solid #ccc]"
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
            />
            <Button
              title="Login"
              bgColor="#2563eb"
              color="#fff"
              padding="5px 10px"
              margin="10px 0"
              className="rounded-lg hover:bg-blue-600"
              onClick={() => {}}
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
    </div>
  );
};

export default Login;
