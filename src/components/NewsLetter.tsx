"use client";

import { useState, FormEvent } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <section className="py-16 md:py-20 bg-linear-to-r from-rose-50 to-pink-50 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
            Join our newsletter
          </h2>
          <p className="text-sm text-gray-700 mb-8">
            We'll send you a nice letter once per week. No spam.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-500 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-red-900 text-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
}
