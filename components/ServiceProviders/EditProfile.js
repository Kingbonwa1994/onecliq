"use client"
import { useState } from 'react';

const EditProfile = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function to update the user's profile with formData
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2 sm:mb-4">
        <label className="block text-gray-300 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-700 text-white border rounded p-1 sm:p-2 text-xs sm:text-sm"
        />
      </div>
      <div className="mb-2 sm:mb-4">
        <label className="block text-gray-300 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="bg-gray-700 text-white border rounded p-1 sm:p-2 text-xs sm:text-sm"
        />
      </div>
      <div className="mb-2 sm:mb-4">
        <label className="block text-gray-300 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
          Services Offered
        </label>
        <textarea
          name="servicesOffered"
          value={formData.servicesOffered.join('\n')}
          onChange={handleChange}
          className="bg-gray-700 text-white border rounded p-1 sm:p-2 text-xs sm:text-sm"
          rows="4"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs sm:text-base py-1 sm:py-2 px-2 sm:px-4 rounded"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProfile;
