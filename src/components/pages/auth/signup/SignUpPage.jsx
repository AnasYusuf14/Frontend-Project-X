import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaUser } from "react-icons/fa";
import { MdOutlineMail, MdPassword, MdDriveFileRenameOutline } from "react-icons/md";
import XSvg from '../../../svgs/X';
import { setFormData, toggleCreateAccountModal, toggleSignInModal, setAuthenticated } from '../../../../redux/slices/authSlice.js';
import axios from 'axios';
import toast from 'react-hot-toast';
import SignInModal from './SignInModal';
import CreateAccountModal from './CreateAccountModal';

const SignUpPage = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${formData.email}`);
            const data = res.data;
            if (data.length === 0) throw new Error("User not found");
            toast.success("Signed in successfully");
            dispatch(setAuthenticated(true));
            navigate('/home');
        } catch (error) {
            toast.error("Failed to sign in");
        }
    };

    const handleInputChange = (e) => {
        dispatch(setFormData({ [e.target.name]: e.target.value }));
    };

    const isCreateAccountModalOpen = useSelector((state) => state.auth.isCreateAccountModalOpen);
    const isSignInModalOpen = useSelector((state) => state.auth.isSignInModalOpen);

    return (
        <div className='max-w-screen-xl mx-auto flex h-screen px-10'>
            <div className='flex-1 hidden lg:flex items-center justify-center'>
                <XSvg className='lg:w-2/3 fill-white' />
            </div>
            <div className='flex-1 flex flex-col justify-center items-center'>
                <h1 className="text-6xl font-extrabold text-white">Happening now</h1>
                <br />
                <h1 className="text-3xl font-extrabold text-white text-left">Join today.</h1>
                <div className='flex flex-col lg:w-2/3 gap-4 mt-8'>
                    <button className='btn rounded-full bg-white text-black py-2 w-full flex items-center justify-center gap-2 hover:text-white' >
                        <FcGoogle className="w-6 h-6" />
                        Sign in with Google
                    </button>
                    <button className='btn rounded-full bg-black text-white py-2 w-full flex items-center justify-center gap-2'>
                        <FaApple className="w-6 h-6" />
                        Sign up with Apple
                    </button>
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="mx-4 text-gray-400">or</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>
                    <button
                        className='btn rounded-full bg-blue-500 text-white py-2 w-full hover:bg-blue-600 transition duration-200'
                        onClick={() => dispatch(toggleCreateAccountModal())}
                    >
                        Create Account
                    </button>
                </div>
                <div className='flex flex-col lg:w-2/3 gap-2 mt-4'>
                    <p className='text-white text-lg'>Already have an account?</p>
                    <button
                        className='btn rounded-full text-blue-500 btn-outline w-full'
                        onClick={() => dispatch(toggleSignInModal())}
                    >
                        Sign in
                    </button>
                </div>
            </div>
            <CreateAccountModal
                isOpen={isCreateAccountModalOpen}
                onClose={() => dispatch(toggleCreateAccountModal())}
                onSubmit={handleSubmit}
                formData={formData}
                handleInputChange={handleInputChange}
            />
            <SignInModal
                isOpen={isSignInModalOpen}
                onClose={() => dispatch(toggleSignInModal())}
                formData={formData}
                handleInputChange={handleInputChange}
            />
        </div>
    );
};

export default SignUpPage;