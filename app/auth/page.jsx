"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import sign from "../../public/images/signup.png";
import icon from "../../public/images/Icon-Google.png";

import { auth } from "@/services/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res, "res");

        setIsSignup(true);
        notifySignup();
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/home");
        notify();
      }
    } catch (error) {
      notifyError();
    }
  };

  const handleForgotPassword = () => {
    alert("Redirect to Forgot Password page");
  };
  const notify = () =>
    toast.success("Login Sucessfull", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  const notifySignup = () =>
    toast.success("SignUp Sucessfull", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  const notifyError = () =>
    toast.error("invalid username or  password", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="hidden md:flex items-center justify-center">
          <Image
            src={sign}
            alt="Auth Banner"
            width={600}
            height={500}
            className="object-contain"
          />
        </div>

        <div className="w-full max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {isSignup ? "Create an account" : "Log in to Exclusive"}
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            {isSignup
              ? "Enter your details below"
              : "Enter your credentials to log in"}
          </p>

          <form className="space-y-4 w-full md:w-[90%]" onSubmit={handleSubmit}>
            {isSignup && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            )}
            <input
              type="email"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {!isSignup ? (
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-700"
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-red-500 hover:underline text-sm"
                >
                  Forget Password?
                </button>
              </div>
            ) : (
              <button
                type="submit"
                className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-700"
              >
                Create Account
              </button>
            )}

            {isSignup && (
              <button className="flex items-center bg-white justify-center border py-2 rounded gap-2 w-full">
                <Image src={icon} alt="Google" width={15} height={15} />
                <span className="text-black">Sign up with Google</span>
              </button>
            )}

            <p className="text-sm text-gray-600 text-center">
              {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
              <button
                type="button"
                onClick={() => setIsSignup(!isSignup)}
                className="text-black underline ml-1"
              >
                {isSignup ? "Log in" : "Sign up"}
              </button>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
