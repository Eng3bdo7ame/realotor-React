// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/offer" element={<Offer />} />{" "}
          <Route path="/signin" element={<SignIn />} />{" "}
          <Route path="/signup" element={<SignUp />} />{" "}
          <Route path="/profile" element={<Profile />} />{" "}
        </Routes>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
