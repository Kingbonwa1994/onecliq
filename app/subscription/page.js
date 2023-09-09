"use client"
// pages/SubscriptionPage.js

import React, { useState } from "react";

const SubscriptionPage = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Add your subscription logic, including payment integration and confirmation handling here

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Premium Service Provider Subscription</h1>
      <p className="mb-4">Upgrade your account to enjoy premium features.</p>
      <p className="mb-4"><strong>Monthly Price:</strong> $20 per month</p>

      <form id="payment-form">
        {/* Payment Information Fields */}
        <label htmlFor="card-number" className="block mb-2">Credit Card Number:</label>
        <input
          type="text"
          id="card-number"
          placeholder="1234 5678 9012 3456"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        {/* Add more payment fields as needed (expiration date, CVV, billing address, etc.) */}

        {/* Terms and Conditions */}
        <label className="block mb-4">
          <input
            type="checkbox"
            id="agree-terms"
            className="mr-2"
            required
          />
          I agree to the <a href="terms.html" target="_blank" className="text-blue-500 underline">terms and conditions</a>.
        </label>

        {/* Total Cost */}
        <p className="mb-4"><strong>Total Cost:</strong> $20 per month</p>

        {/* Subscribe Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setIsSubscribed(true)} // Simulate subscription here
        >
          Subscribe
        </button>
      </form>

      {/* Confirmation Message */}
      {isSubscribed && (
        <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
          Congratulations! Your account has been upgraded to Premium.
        </div>
      )}
    </div>
  );
};

export default SubscriptionPage;
