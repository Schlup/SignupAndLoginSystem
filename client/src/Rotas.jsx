import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage";
import MissingPage from "./pages/MissingPage";
import Agenda from "./pages/Agenda";
import LogOutBtn from "./pages/LogOutBtn";

function Rotas() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {
          loggedIn === undefined && (
            <>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" errorElement={<LogOutBtn />} />
            </>
          )
        }
        {
          loggedIn === true && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/agenda" element={<Agenda />} />
            </>
          )
        }
        <Route path="*" element={<MissingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;