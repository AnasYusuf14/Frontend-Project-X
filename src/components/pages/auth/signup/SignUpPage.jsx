import { Link } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import CreateAccountModal from './CreateAccountModal';
import SignInModal from './SignInModal';
import axios from 'axios';

import XSvg from '../../../svgs/X'

import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        fullName: "",
        password: "",
        identifier: ""
    });
    const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

    const queryClient = useQueryClient();

    const { mutate, isError, isPending, error } = useMutation({
        mutationFn: async ({ email, username, fullName, password }) => {
            try {
                const res = await axios.post("https://jsonplaceholder.typicode.com/users", {
                    email,
                    username,
                    fullName,
                    password
                });

                const data = res.data;
                if (res.status !== 201) throw new Error(data.error || "Failed to create account");
                console.log(data);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        onSuccess: () => {
            toast.success("Account created successfully");
            queryClient.invalidateQueries({ queryKey: ["authUser"] });
            setIsCreateAccountModalOpen(false);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // page won't reload
        mutate(formData);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
                    <button className='btn rounded-full bg-white text-black py-2 w-full flex items-center justify-center gap-2'>
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
                        onClick={() => setIsCreateAccountModalOpen(true)}
                    >
                        Create Account
                    </button>
                </div>
                <div className='flex flex-col lg:w-2/3 gap-2 mt-4'>
                    <p className='text-white text-lg'>Already have an account?</p>
                    <button
                        className='btn rounded-full text-blue-500 btn-outline w-full'
                        onClick={() => setIsSignInModalOpen(true)}
                    >
                        Sign in
                    </button>
                </div>
            </div>
            <CreateAccountModal
                isOpen={isCreateAccountModalOpen}
                onClose={() => setIsCreateAccountModalOpen(false)}
                onSubmit={handleSubmit}
                formData={formData}
                handleInputChange={handleInputChange}
            />
            <SignInModal
                isOpen={isSignInModalOpen}
                onClose={() => setIsSignInModalOpen(false)}
                onSubmit={handleSubmit}
                formData={formData}
                handleInputChange={handleInputChange}
            />
        </div>
    );
};

export default SignUpPage;