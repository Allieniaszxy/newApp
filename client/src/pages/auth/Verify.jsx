import React, { useState } from "react";
import Button from "../../components/reusable/Button";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const { btnLoading, verifyOtp } = UserData();
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    await verifyOtp(otp, navigate);
    console.log(otp);
  }
  return (
    <div>
      <div className="flex items-center justify-center h-[80vh] ">
        <div className="p-7 rounded-lg shadow-md text-center w-[300px] max-md:w-[90%]">
          <h2 className="text-xl text-blue-400 mb-3">Verify Account</h2>
          <form action="" className="text-left" onSubmit={submitHandler}>
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
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <Button
              type="submit"
              title={btnLoading ? "Please wait ..." : "Verify"}
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
