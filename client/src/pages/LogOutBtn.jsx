import React, { useContext } from 'react'
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LogOutBtn() {
  
  const { getLoggedIn } = useContext(AuthContext); 
  
  const navigate = useNavigate()

  async function logOut() {
    await axios.get("http://localhost:3001/auth/logout");
    await getLoggedIn();
    navigate("/")
  }

  return (
    <button className="bg-red-600 rounded-lg px-4 py-1" onClick={logOut}>
      Log out
    </button>
  )
}

export default LogOutBtn