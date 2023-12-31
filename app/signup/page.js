"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";


export default function SignUpPage() {

  const router = useRouter() || {};
  const [serviceProvider, setServiceProvider] = useState({
    email:"",
    phone: "",
    password: "",
    
  })

  const [loading, setLoading] = useState(false)

  const onSignup = async() => {
    try {
      setLoading(true)
      const response= await axios.post("/api/serviceProviders/signup", serviceProvider)
      router.push("/login")
    } catch (error) {
      console.log("Signup failed", error.message)
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
   }

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          {loading ? "Processing" : "Signup"}
        </h2>
        <form>
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
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="bg-gray-700 text-white border rounded w-full py-2 px-3"
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
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
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="verifyPassword"
            >
              Verify Password
            </label>
            <input
              className="bg-gray-700 text-white border rounded w-full py-2 px-3"
              type="password"
              id="verifyPassword"
              name="verifyPassword"
              placeholder="Verify your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-white">
              Services (Up to 3)
            </label>
            <input
              className="bg-gray-700 text-white border rounded w-full py-2 px-3"
              type="text"
              id="service1"
              name="service1"
              placeholder="Service 1"
            />
            <input
              className="bg-gray-700 text-white border rounded w-full py-2 px-3 mt-2"
              type="text"
              id="service2"
              name="service2"
              placeholder="Service 2"
            />
            <input
              className="bg-gray-700 text-white border rounded w-full py-2 px-3 mt-2"
              type="text"
              id="service3"
              name="service3"
              placeholder="Service 3"
            />
          </div>
          <div className="mb-4">
            <button
              onClick={onSignup}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
              type="submit"
            >
            Sign up
            </button>
          </div>
          <p className="text-gray-300 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
        </form>
      </div>
    </div>
  );
}
