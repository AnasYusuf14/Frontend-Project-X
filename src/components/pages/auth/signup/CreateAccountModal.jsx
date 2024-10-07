import React, { useState } from 'react';
import XSvg from '../../../svgs/X';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../../../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const CreateAccountModal = ({ isOpen, onClose, formData, handleInputChange }) => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        name: formData.name,
        phone: formData.phone,
        birthday: `${formData.month} ${formData.day}, ${formData.year}`,
      };

      const res = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
      if (res.status === 201) {
        toast.success("Account created successfully");
        dispatch(setAuthenticated(true));
        navigate('/home');
        onClose();
      } else {
        throw new Error("Failed to create account");
      }
    } catch (error) {
      setError('Failed to create account');
      toast.error("Failed to create account");
    }
  };

  if (!isOpen) return null;

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = [...Array(31).keys()].map(i => i + 1);
  const years = [...Array(100).keys()].map(i => new Date().getFullYear() - i);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-lg h-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-white hover:text-gray-300">&times;</button>
        </div>
        <div className="flex justify-center mb-4">
          <XSvg className='w-12 h-12 fill-current text-white' />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full border border-white rounded-lg px-3 py-4 outline-none bg-black text-white"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
            value={formData.name}
            required
          />
          <input
            type="text"
            className="w-full border border-white rounded-lg px-3 py-4 outline-none bg-black text-white"
            placeholder="Phone"
            name="phone"
            onChange={handleInputChange}
            value={formData.phone}
            required
          />
          <div className="text-right text-blue-500 cursor-pointer hover:underline">
            Use email instead
          </div>
          <div className="text-white mt-4">
            <label className="block mb-2">Date of birth</label>
            <div className="flex space-x-4">
              <select
                className="w-1/3 border border-white rounded-lg px-3 py-2 bg-black text-white"
                name="month"
                onChange={handleInputChange}
                value={formData.month}
                required
              >
                <option value="">Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>{month}</option>
                ))}
              </select>
              <select
                className="w-1/3 border border-white rounded-lg px-3 py-2 bg-black text-white"
                name="day"
                onChange={handleInputChange}
                value={formData.day}
                required
              >
                <option value="">Day</option>
                {days.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <select
                className="w-1/3 border border-white rounded-lg px-3 py-2 bg-black text-white"
                name="year"
                onChange={handleInputChange}
                value={formData.year}
                required
              >
                <option value="">Year</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
          </p>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="rounded-full w-full bg-blue-500 text-white py-2 hover:bg-blue-600 transition duration-200"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountModal;