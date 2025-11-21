import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main.jsx";
import toast, { Toaster } from "react-hot-toast";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  async function loginUser(email, password, navigate) {
    setBtnLoading(true);
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
      toast.error(error?.response?.data?.message);
      console.error("Login failed", error);
    }
  }
  async function fetchUser() {
    try {
      const { data } = await axios.get(`${server}/users/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(data.user);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      setIsAuthenticated(false);
      setLoading(false);
      toast.error(error?.response?.data?.message);
      console.error("signup failed", error);
    } finally {
      setLoading(false);
    }
  }
  async function registerUser(name, email, password, navigate) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/users/register`, {
        name,
        email,
        password,
      });

      toast.success(data.message);
      localStorage.setItem("activationToken", data.activationToken);
      setBtnLoading(false);
      navigate("/verify");
      return data;
    } catch (error) {
      setBtnLoading(false);
      toast.error(error?.response?.data?.message);
      console.error("Login failed", error);
    }
  }

  async function verifyOtp(otp, navigate) {
    setBtnLoading(true);
    const activationToken = localStorage.getItem("activationToken");
    try {
      const { data } = await axios.post(`${server}/users/verify`, {
        otp,
        activationToken,
      });

      toast.success(data.message);
      navigate("/login");
      localStorage.clear();
      setBtnLoading(false);
    } catch (error) {
      setBtnLoading(false);
      toast.error(error?.response?.data?.message);
    }
  }

  useEffect(() => {
    fetchUser();
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
        registerUser,
        verifyOtp,
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
