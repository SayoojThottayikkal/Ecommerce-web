"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/AuthSlice";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loginSuccess(user));
    }
  }, []);

  return children;
};

export default AuthProvider;
