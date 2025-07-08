"use client";
import { loadAuthFromStorage } from "@/redux/slices/AuthSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAuthFromStorage());
  }, []);

  return children;
};

export default AuthProvider;
