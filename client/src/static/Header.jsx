import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Header = ({ isAuthenticated }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    isAuthenticated
      ? { name: "Account", path: "/account" }
      : { name: "Login", path: "/login" },
  ];

  return (
    <Motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center p-4 shadow-md relative z-10 bg-white"
    >
      <Motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-bold text-black text-2xl max-md:text-xl"
      >
        L_M_T
      </Motion.div>

      <div className="flex items-center max-md:hidden">
        {links.map((item, index) => (
          <Motion.div
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
          >
            <Link
              to={item.path}
              className="text-black mr-4 transition-all hover:text-blue-500 hover:-translate-y-0.5"
            >
              {item.name}
            </Link>
          </Motion.div>
        ))}
      </div>
    </Motion.header>
  );
};

export default Header;
