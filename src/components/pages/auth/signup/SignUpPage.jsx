import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import XSvg from "../../../svgs/X";
import {
  setFormData,
  toggleCreateAccountModal,
  toggleSignInModal,
  setAuthenticated,
  setUser,
} from "../../../../assets/rtk/features/authSlice.js";
import axios from "axios";
import SignInModal from "./SignInModal";
import CreateAccountModal from "./CreateAccountModal";
import { GoogleLogin } from 'react-google-login';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    dispatch(setFormData({ [e.target.name]: e.target.value }));
  };

  const handleGoogleResponse = (response) => {
    if (response.profileObj) {
      const { tokenId, profileObj } = response;
      localStorage.setItem("authToken", tokenId);
      localStorage.setItem("userProfile", JSON.stringify(profileObj));
      dispatch(setAuthenticated(true));
      dispatch(setUser(profileObj));
      navigate("/"); // Redirect to  home page
    } else {
      console.error("Google Sign-In was unsuccessful. Try again later.");
    }
  };

  const isCreateAccountModalOpen = useSelector(
    (state) => state.auth.isCreateAccountModalOpen
  );
  const isSignInModalOpen = useSelector(
    (state) => state.auth.isSignInModalOpen
  );

  return (
    <div className="max-w-screen-xl mx-auto flex h-screen px-10">
      <div className="flex-1 hidden lg:flex items-center justify-center">
        <XSvg className="lg:w-2/3 fill-white" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-extrabold text-white">Happening now</h1>
        <br />
        <h1 className="text-3xl font-extrabold text-white text-left">
          Join today.
        </h1>
        <div className="flex flex-col lg:w-2/3 gap-4 mt-8">
          <GoogleLogin
            clientId="59537962145-g1mha0ii5jqdncd31rrrri3nkuhbhtrv.apps.googleusercontent.com" // Replace with your actual client ID
            buttonText="Sign in with Google"
            onSuccess={handleGoogleResponse}
            onFailure={handleGoogleResponse}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="btn rounded-full bg-white text-black py-2 w-full flex items-center justify-center gap-2 hover:text-white"
              >
                <FcGoogle className="w-6 h-6" />
                Sign in with Google
              </button>
            )}
          />
          <button className="btn rounded-full bg-black text-white py-2 w-full flex items-center justify-center gap-2">
            <FaApple className="w-6 h-6" />
            Sign up with Apple
          </button>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-400">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <button
            className="btn rounded-full bg-blue-500 text-white py-2 w-full hover:bg-blue-600 transition duration-200"
            onClick={() => dispatch(toggleCreateAccountModal())}
          >
            Create Account
          </button>
        </div>
        <div className="flex flex-col lg:w-2/3 gap-2 mt-4">
          <p className="text-white text-lg">Already have an account?</p>
          <button
            className="btn rounded-full text-blue-500 btn-outline w-full"
            onClick={() => dispatch(toggleSignInModal())}
          >
            Sign in
          </button>
        </div>
      </div>
      <CreateAccountModal
        isOpen={isCreateAccountModalOpen}
        onClose={() => dispatch(toggleCreateAccountModal())}
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