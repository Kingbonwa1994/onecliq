"use client"
import { useState, useEffect } from 'react';

export default function ServiceProviderAccount() {
  const [email, setEmail] = useState('provider@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [servicesOffered, setServicesOffered] = useState([
    'Service 1',
    'Service 2',
    'Service 3',
  ]);
  const [availableJobs, setAvailableJobs] = useState([]);

  // Simulate fetching available jobs from the server
  useEffect(() => {
    // Replace this with your actual API call to fetch available jobs
    setTimeout(() => {
      const fetchedJobs = ['Job 1', 'Job 2', 'Job 3'];
      setAvailableJobs(fetchedJobs);
    }, 2000);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-2xl font-semibold w-full sm:w-auto mb-2 sm:mb-0">
            Service Provider Account
          </div>
          <div className="flex items-center">
            <div className="text-sm sm:text-base mr-2 sm:mr-4">
              Email: {email}
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs sm:text-base py-1 sm:py-2 px-2 sm:px-4 rounded mr-2 sm:mr-4">
              Subscribe
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs sm:text-base py-1 sm:py-2 px-2 sm:px-4 rounded">
              Edit
            </button>
          </div>
        </div>
      </nav>

      {/* Account Information */}
      <div className="container mx-auto py-4 sm:py-8 px-4 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
          Account Information
        </h2>
        <div className="mb-2 sm:mb-4">
          <label className="block text-gray-300 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
            Email
          </label>
          <div className="bg-gray-700 text-white border rounded p-1 sm:p-2 text-xs sm:text-sm">
            {email}
          </div>
        </div>
        <div className="mb-2 sm:mb-4">
          <label className="block text-gray-300 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
            Phone Number
          </label>
          <div className="bg-gray-700 text-white border rounded p-1 sm:p-2 text-xs sm:text-sm">
            {phone}
          </div>
        </div>
        <div className="mb-2 sm:mb-4">
          <label className="block text-gray-300 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
            Services Offered
          </label>
          <ul className="bg-gray-700 text-white border rounded p-1 sm:p-2 text-xs sm:text-sm">
            {servicesOffered.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="mb-2 sm:mb-4">
          <label className="block text-gray-300 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
            Available Jobs
          </label>
          <ul className="bg-gray-700 text-white border rounded p-1 sm:p-2 text-xs sm:text-sm">
            {availableJobs.length > 0 ? (
              availableJobs.map((job, index) => (
                <li key={index}>{job}</li>
              ))
            ) : (
              <li>No available jobs at the moment.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
