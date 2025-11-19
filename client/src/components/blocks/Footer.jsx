import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-400 text-white py-[20px] text-center bottom-0">
        <div className="max-w-[1280px] mx-auto">
          {" "}
          <p className="m-0 text-[14px]">
            {" "}
            &copy; 2025 L_M_S platform. All rights reserved. <br />
            Made with ❤ <a href="">Ingenious Prometheus</a>
          </p>
        </div>
        <div className="mt-[10px] flex justify-center">
          <a
            href=""
            className="text-xl mx-[10px] transition-colors hover:text-gray-300"
          >
            <FaFacebookF />
          </a>
          <a
            href=""
            className="text-xl mx-[10px] transition-colors hover:text-gray-300"
          >
            <FaTwitter />
          </a>
          <a
            href=""
            className="text-xl mx-[10px] transition-colors hover:text-gray-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
