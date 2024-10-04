import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import XSvg from '../../../svgs/X'; 

const SignInModal = ({ isOpen, onClose, onSubmit, formData, handleInputChange }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-lg h-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-white hover:text-gray-300">&times;</button>
        </div>
        <div className="flex justify-center mb-4">
          <XSvg className='w-12 h-12 fill-current text-white' />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign in to X</h2>
        <button className='btn rounded-full bg-white text-black py-2 w-full flex items-center justify-center gap-2 mb-4 hover:text-white'>
          <FcGoogle className="w-6 h-6" />
          Sign in with Google
        </button>
        <button className='btn rounded-full bg-black text-white py-2 w-full flex items-center justify-center gap-2 mb-4'>
          <FaApple className="w-6 h-6" />
          Sign in with Apple
        </button>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-600" />
          <span className="mx-4 text-gray-400">or</span>
          <hr className="flex-grow border-t border-gray-600" />
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full border border-white rounded-lg px-3 py-4 outline-none bg-black text-white"
            placeholder="Phone, email, or username"
            name="identifier"
            onChange={handleInputChange}
            value={formData.identifier}
          />
          <button
            type="submit"
            className="rounded-full w-full bg-blue-500 text-white py-2 hover:bg-blue-600 transition duration-200"
          >
            Next
          </button>
          <button
            type="button"
            className="rounded-full w-full bg-black text-white border border-white py-2 hover:bg-gray-800 transition duration-200"
          >
            Forgot password?
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;