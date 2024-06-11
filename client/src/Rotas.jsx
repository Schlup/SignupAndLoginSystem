import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage";
import MissingPage from "./pages/MissingPage";

function Rotas() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {
          loggedIn === undefined && (
            <>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </>
          )
        }
        {
          loggedIn === true && (
            <>
              <Route path="/home" element={<Home />} />
            </>
          )
        }
        <Route path="*" element={<MissingPage />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;