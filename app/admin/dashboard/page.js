"use client";
import React, { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [selectedType, setSelectedType] = useState("type1");
  useEffect(() => {
    // Fetch service providers data
    axios.get('/api/service-providers')
      .then((response) => {
        const fetchedServiceProviders = response.data;
        setServiceProviders(fetchedServiceProviders);
      })
      .catch((error) => {
        console.error('Error fetching service providers:', error);
      });

    // Fetch jobs data
    axios.get('/api/jobs')
      .then((response) => {
        const fetchedJobs = response.data;
        setJobs(fetchedJobs);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen w-full overflow-x-hidden">
      <header className="bg-gray-800 py-4 text-center">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      </header>

      <section className="">
        {/* Service Providers */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold mb-4">Service Providers</h2>
          {/* Service Type Filter */}
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="serviceTypeFilter"
            >
              Service Type
            </label>
            <select
              id="serviceTypeFilter"
              className="bg-gray-700 text-white border rounded px-3 py-1"
              onChange={(e) => setSelectedType(e.target.value)}
              value={selectedType}
            >
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>
        </div>

  
        {/* Service Providers Table */}
        <section className="p-4 m-4">
          <h2 className="text-xl font-semibold mb-4">Service Providers</h2>
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Phone Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-900 divide-y divide-gray-700">
              {/* Map through service providers data and display each row */}
              {serviceProviders.map((provider) => (
                <tr key={provider.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {provider.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {provider.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {provider.rating}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {/* Action Buttons */}
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2">
                      Rate
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>

      <section className="p-4">
        {/* Jobs */}
        <h2 className="text-xl font-semibold mb-4">Jobs</h2>
        {/* Display Jobs List */}
        {/* Include job assignment and deletion functionality */}
      </section>

      <section className="p-4">
        {/* Bulk Email Sending */}
        <h2 className="text-xl font-semibold mb-4">Bulk Email Sending</h2>
        {/* Implement bulk email sending form */}
      </section>

      <section className="p-4">
        {/* Client Communication */}
        <h2 className="text-xl font-semibold mb-4">Client Communication</h2>
        {/* Implement client communication form */}
      </section>
    </div>
  );
}
