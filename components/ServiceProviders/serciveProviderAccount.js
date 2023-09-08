import React from 'react';

// Sample service providers data
const serviceProvidersData = [
  {
    email: 'provider1@example.com',
    servicesOffered: ['Service A', 'Service B'],
    jobsAssigned: 5,
  },
  {
    email: 'provider2@example.com',
    servicesOffered: ['Service C', 'Service D'],
    jobsAssigned: 3,
  },
  {
    email: 'provider3@example.com',
    servicesOffered: ['Service E', 'Service F'],
    jobsAssigned: 7,
  },
];

export default function ServiceProviderAccount() {
  // In a real application, you would determine the current service provider using a route parameter or authentication
  const currentServiceProvider = serviceProvidersData[0]; // Change this to the appropriate service provider

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 flex justify-center items-center">
      <div className="max-w-xl bg-gray-800 shadow-md rounded-md p-8">
        <h1 className="text-2xl font-semibold mb-4">{currentServiceProvider.email}'s Profile</h1>
        <div>
          <h2 className="text-xl font-semibold mb-2">Services Offered:</h2>
          <ul className="list-disc ml-6">
            {currentServiceProvider.servicesOffered.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-xl font-semibold">Number of Jobs Available: {currentServiceProvider.jobsAssigned}</p>
        </div>
      </div>
    </div>
  );
}
