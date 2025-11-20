import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-400 text-white py-5 text-center bottom-0">
        <div className="max-w-7xl mx-auto">
          {" "}
          <p className="m-0 text-[14px]">
            {" "}
            &copy; 2025 L_M_S platform. All rights reserved. <br />
            Made with ❤ <a href="">Ingenious Prometheus</a>
          </p>
        </div>
        <div className="mt-2.5 flex justify-center">
          <a
            href=""
            className="text-xl mx-2.5 transition-colors hover:text-gray-300"
          >
            <FaFacebookF />
          </a>
          <a
            href=""
            className="text-xl mx-2.5 transition-colors hover:text-gray-300"
          >
            <FaTwitter />
          </a>
          <a
            href=""
            className="text-xl mx-2.5 transition-colors hover:text-gray-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
