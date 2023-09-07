"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const serviceProvidersData = [
  {
    id: 1,
    email: "provider1@example.com",
    servicesOffered: ["Service A", "Service B"],
    jobsAssigned: 5,
  },
  {
    id: 2,
    email: "provider2@example.com",
    servicesOffered: ["Service B", "Service C"],
    jobsAssigned: 3,
  },
  // Add more service providers as needed
];

export default function ServiceProviderPage()  { 
  const router = useRouter() || {};
  const { id } = router.query;

  const [serviceProvider, setServiceProvider] = useState(null);

  useEffect(() => {
    // Simulate an API call to fetch the individual service provider data
    // In a real application, you would fetch data from an API/database
    const provider = serviceProvidersData.find(
      (provider) => provider.id === parseInt(id)
    );

    if (provider) {
      setServiceProvider(provider);
    }
  }, [id]);

  if (!serviceProvider) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-200 text-lg font-semibold p-4">
          {serviceProvider.email}
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Services Offered:</h2>
          <ul>
            {serviceProvider.servicesOffered.map((service, index) => (
              <li key={index} className="mb-1">
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <p className="text-xl font-semibold">
            Number of Jobs Available: {serviceProvider.jobsAssigned}
          </p>
        </div>
      </div>
    </div>
  );
}
