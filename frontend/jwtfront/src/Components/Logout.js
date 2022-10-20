import axiosInstance from "./Axios";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import React from 'react'

export const Logout = () => {
const navigate = useNavigate();

useEffect(() => {
  const response = axiosInstance.post('logout/blacklist/', {
    refresh_token: localStorage.getItem('refresh_token'),
  } );
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");

  axiosInstance.defaults.headers['Authorization'] = null;
  navigate("login/")
})
}
export default Logout
