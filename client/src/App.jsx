import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./static/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import Footer from "./static/Footer";
import AboutPage from "./pages/about/About";
import Account from "./pages/account/Account";
import { UserData } from "./context/UserContext";
import Loading from "./components/reusable/loading/Loading";
import "./App.css";

function App() {
  const { isAuthenticated, user, loading } = UserData();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Header isAuthenticated={isAuthenticated} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/account"
              element={isAuthenticated ? <Account user={user} /> : <Login />}
            />
            <Route
              path="/login"
              element={isAuthenticated ? <Home /> : <Login />}
            />
            <Route
              path="/register"
              element={isAuthenticated ? <Home /> : <Register />}
            />
            <Route
              path="/verify"
              element={isAuthenticated ? <Home /> : <Verify />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
