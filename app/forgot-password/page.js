"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isRequestSent, setIsRequestSent] = useState(false); // To track whether the reset request has been sent
  const router = useRouter();

  // Function to handle the password reset request
  const handleResetRequest = (e) => {
    e.preventDefault();

    // Simulate sending a reset email (replace with your actual logic)
    // Once the reset request is sent, update the state
    // You should implement a backend endpoint for handling password reset requests
    // and sending reset emails.
    // In this example, we assume that the request was sent successfully.
    setIsRequestSent(true);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4 text-white">Forgot Password</h2>
        {isRequestSent ? (
          // Display a success message when the request is sent
          <div className="text-green-500 mb-4">Reset link sent to your email.</div>
        ) : (
          // Display the reset request form
          <form onSubmit={handleResetRequest}>
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
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
                type="submit"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        )}
        {/* Link to return to the login page */}
        <div className="text-center">
          <a href="/login" className="text-blue-500 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}
