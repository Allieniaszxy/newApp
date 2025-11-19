import React from "react";
import Button from "../../components/reusable/Button";
import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[80vh] ">
        <div className="p-7 rounded-lg shadow-md text-center w-[300px] max-md:w-[90%]">
          <h2 className="text-xl text-blue-400 mb-3">Verify Account</h2>
          <form action="" className="text-left">
            <label
              htmlFor="otp"
              className=" block mb-1 text-[14px] text-[#333]"
            >
              Verify Otp
            </label>
            <input
              type="number"
              placeholder="Enter the code sent to your email"
              required
              className="w-full p-2.5 mb-2.5 rounded border-[1px solid #ccc]"
            />

            <Button
              title="Verify"
              bgColor="#2563eb"
              color="#fff"
              padding="5px 10px"
              margin="10px 0"
              className="rounded-lg hover:bg-blue-600"
              onClick={() => {}}
            />
          </form>
          <p>
            Go to
            <Link to={"/login"} className="text-blue-400 ml-1">
              Login
            </Link>{" "}
            page
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
