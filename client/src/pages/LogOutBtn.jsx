import React, { useContext } from 'react'
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext); 

  const navigate = useNavigate()

  async function logOut() {
    await axios.get("http://localhost:3001/auth/logout");
    console.log("Aqui foi")
    navigate("/");
    await getLoggedIn();
  }
  return <button className="bg-red-500 p-2 rounded-lg mx-2" onClick={logOut}>Log out</button>
}

export default LogOutBtn;