"use client";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen grid md:grid-cols-2 py-3">

      {/* LEFT SIDE FORM */}
      <div className="flex items-center justify-center bg-pink-50 p-8">
        <div className="w-full max-w-md">

          {/* Logo */}
          <h1 className="text-red-800 font-bold text-2xl mb-6 text-center md:text-left">
            CHIHILI
          </h1>

          {/* Heading */}
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
            Log in to Chihili Account
          </h2>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border bg-white hover:bg-gray-50 border-gray-300 p-2 focus:outline-none focus:border-red-700"
            />
           
          </div>

          {/* Password */}
          <div className="mb-3">
  <label className="block text-sm font-medium mb-1">
    Password
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Enter Password"
      className="w-full bg-white hover:bg-gray-50 border border-gray-300 p-2 pr-10 focus:outline-none focus:border-red-700"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
</div>
          {/* Forgot Password */}
          <div className="text-right mb-6">
            <a href="#" className="text-md text-red-800  font-bold">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-gray-300 text-gray-700 p-3 font-semibold hover:bg-gray-400 transition mb-4">
            Log in
          </button>

          {/* Mobile Login */}
          <p className="w-full text-center p-3 text-red-900 font-bold">
            Login using Mobile Number
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 border border-gray-400"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 border border-gray-400"></div>
          </div>

          {/* Signup */}
          <p className="text-sm text-center text-gray-700">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-red-800 font-semibold inline-flex items-center gap-2"
            >
              Sign up
              <FaArrowRight className="text-xs" />
            </a>
          </p>

          {/* Terms */}
          <p className="text-xs text-gray-600 text-center mt-6">
            By proceeding, you agree to the{" "}
            <span className=" cursor-pointer text-blue-600">
              Terms and Conditions
            </span>{" "}
            and{" "}
            <span className=" cursor-pointer text-blue-600">
              Privacy Policy
            </span>
          </p>

        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block relative">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="login"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}