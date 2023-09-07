
const SignupForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
    <div className="bg-white p-8 rounded shadow-lg w-96">
      <h2 className="text-2xl font-semibold mb-4">Sign Up as a Service Provider</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="email"
            id="email"
            name="email"
            
                       placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="phone"
            name="phone"
            
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="password"
            id="password"
            name="password"
            
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="verifyPassword">
            Verify Password
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="password"
            id="verifyPassword"
            name="verifyPassword"
            placeholder="Verify your password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Services (Up to 3)
          </label>
          
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default SignupForm;
