// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componant/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />{" "}
          <Route path="/offer" element={<Offer />} />{" "}
          <Route path="/signin" element={<SignIn />} />{" "}
          <Route path="/signup" element={<SignUp />} />{" "}
          <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
          <Route path="/profile" element={<Profile />} />{" "}
        </Routes>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
