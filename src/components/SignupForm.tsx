"use client";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function SignupPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2 py-3">
      {/* LEFT SIDE */}
      <div className="flex items-center justify-center p-8 bg-pink-50">
        <div className="w-full max-w-md">
          <div className="text-center md:text-left">
            <h1 className="text-red-800 font-bold text-2xl mb-5 md:mb-10">
              CHIHILI
            </h1>

            <h1 className="text-3xl font-bold mb-6">Sign up</h1>
          </div>

          {/* Social Signup Buttons */}

          <button className="w-full border border-gray-300 p-3 mb-3 flex items-center justify-center gap-3 bg-white hover:bg-gray-50 cursor-pointer">
            <FcGoogle size={22} />
            Sign up with Google
          </button>

          <button className="w-full border border-gray-300 p-3 mb-3 flex items-center justify-center gap-3 bg-white hover:bg-gray-50 cursor-pointer">
            <FaFacebook size={22} className="text-blue-600" />
            Sign up with Facebook
          </button>

          <button className="w-full border border-gray-300 p-3 mb-3 flex items-center justify-center gap-3 bg-white hover:bg-gray-50 cursor-pointer">
            <FaApple size={22} />
            Sign up with Apple ID
          </button>

          <button className="w-full border text-red-900 font-semibold border-pink-300 p-3 mb-3 bg-pink-100 cursor-pointer hover:bg-pink-200">
            Sign up with Mobile Number
          </button>

          <button className="w-full border  p-3 bg-red-900 text-white cursor-pointer hover:bg-red-800">
            Sign up with Email
          </button>

          {/* Divider */}

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 border border-gray-400"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 border border-gray-400"></div>
          </div>

          {/* Login Link */}

          <p className="text-sm text-center text-gray-700">
            Already have a Chihili Account?{" "}
            <a
              href="/login"
              className="text-red-800 font-semibold inline-flex items-center gap-2"
            >
              Log in
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
          alt="signup"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
