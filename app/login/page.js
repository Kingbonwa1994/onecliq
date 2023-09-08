"use client"
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for routing

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter() || {};

  // Simulate login functionality (replace with your actual authentication logic)
  const handleLogin = (e) => {
    e.preventDefault();

    // Validate user credentials (replace with actual validation)
    const isValidUser = true; // Replace with your validation logic

    if (isValidUser) {
      // Redirect to /serviceProvider/account upon successful login
      router.push("/serviceProvider/account");
    } else {
      // Handle login error (e.g., display an error message)
      console.log("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4 text-white">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-gray-700 text-white border rounded w-full py-2 px-3"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-gray-700 text-white border rounded w-full py-2 px-3"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            {/* You can link to the "Forgot Password" page here */}
            <a href="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
