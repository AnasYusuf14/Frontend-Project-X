import React from 'react';
import { MdOutlineMail, MdPassword, MdDriveFileRenameOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const CreateAccountModal = ({ isOpen, onClose, onSubmit, formData, handleInputChange }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Your Account</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <MdOutlineMail className="text-gray-500 mr-2" />
            <input
              type="email"
              className="w-full outline-none"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
              value={formData.username}
            />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <MdDriveFileRenameOutline className="text-gray-500 mr-2" />
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Full Name"
              name="fullName"
              onChange={handleInputChange}
              value={formData.fullName}
            />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <MdPassword className="text-gray-500 mr-2" />
            <input
              type="password"
              className="w-full outline-none"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountModal;