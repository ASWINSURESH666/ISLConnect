import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup
    console.log('Signed up with:', formData);
    // Reset form data
    setFormData({ username: '', password: '' });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-8 ml-4"
              id="username"
              type="text"
              placeholder="First Name"
              name="username"
              value={formData.firstname}
              onChange={handleChange}
              style={{width: '160px', height: '40px'}}
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Second Name"
              name="username"
              value={formData.secondname}
              onChange={handleChange}
              style={{width: '160px', height: '40px'}}
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ml-4"
              id="email"
              type="email"
              placeholder="email @ddress"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{width:'350px', height: '40px'}}
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ml-4"
              id="password"
              type="password"
              placeholder="Whats the Secret Code !"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{width:'350px', height: '40px'}}
            />

            <select
              className="shadow appearance-none border rounded w-fully py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline ml-4"
              id="team"
              name="team"
              value={formData.team}
              onChange={handleChange}
              style={{width: '350px', height: '40px'}}
            >
              <option value="">Select a Team</option>
              <option value="Team 1">Kerala Blasters FC</option>
              <option value="Team 2">Bengaluru FC</option>
              <option value="Team 3">Chennaiyin FC</option>
              <option value="Team 4">East Bengal FC</option>
              <option value="Team 5">FC Goa</option>
              <option value="Team 6">Hyderabad FC</option>
              <option value="Team 7">Jamshedpur FC</option>
              <option value="Team 8">Mohun Bagan Super Giant</option>
              <option value="Team 9">Mumbai City FC</option>
              <option value="Team 10">NorthEast United FC</option>
              <option value="Team 11">Odisha FC</option>
              <option value="Team 12">Punjab FC</option>
              </select>

          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
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

export default Signup;