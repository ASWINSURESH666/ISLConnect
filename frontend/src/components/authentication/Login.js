import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assests/image/Logo.png';
const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    console.log('Logged in with:', formData);
    // Reset form data
    setFormData({ username: '', password: '' });
    // Redirect to home page
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-500 " >
      <img src={logo} alt='Logo' className='mx-auto mb-5 pt-7' style={{ width: '100px', height: 'auto' }}/>

      <div className="flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-black font-bold mb-2" htmlFor="username">
                User ID
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="username"
                type="text"
                placeholder="User ID"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-black-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}

              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-10 mb-3"
                type="submit">
                Login
              </button>

            </div>
            <div className="flex items-center justify-center"> 
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-950"
                type="button">
                Create New Account
              </button>  
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;