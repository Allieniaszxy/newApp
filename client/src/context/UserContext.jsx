import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main.jsx";
import toast, { Toaster } from "react-hot-toast";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  async function loginUser(email, password, navigate) {
    try {
      const { data } = await axios.post(`${server}/users/login`, {
        email,
        password,
      });

      toast.success(data.message);
      localStorage.setItem("token", data.token);
      setUser(data.user);
      setIsAuthenticated(true);
      setBtnLoading(false);
      navigate("/");
      return data;
    } catch (error) {
      setIsAuthenticated(false);
      setLoading(false);
      toast.error(error.response.data.message);
      console.error("Login failed", error);
    }
  }
  async function fetchUser() {
    try {
      const { data } = await axios.post(`${server}/users/profile`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setUser(data.user);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      setIsAuthenticated(false);
      setLoading(false);
      toast.error(error.response.data.message);
      console.error("signup failed", error);
    }
  }
  useEffect(() => {
    fetchUser;
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        btnLoading,
        setIsAuthenticated,
        loginUser,
        loading,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => {
  return useContext(UserContext);
};
