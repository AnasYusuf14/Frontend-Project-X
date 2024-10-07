import React from "react";
import { useSelector } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  
  return (
    <div className="bg-black text-white">
      <ProfileSection />
      <TabsSection />
      <FollowSuggestions />
    </div>
  );
};

const ProfileSection = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="bg-black text-white">
      <div className="bg-[#333639] h-32"></div>
      <div className="relative -mt-16 ps-4 items-center space-x-4">
        <FaUserCircle className="text-8xl text-blue-500" />
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">{user ? user.name : "User Name"}</h1>
            <AiFillCheckCircle className="text-blue-500" />
            <button className="ml-4 px-2 py-1 bg-gray-800 text-sm rounded-lg border border-gray-700 hover:bg-gray-700">
              Edit Profile
            </button>
          </div>
          <p className="text-gray-400 mb-3">@{user ? user.username : "username"}</p>
          <p className="text-gray-500 text-sm">Joined {user ? user.joinedDate : "Date"}</p>
        </div>
      </div>
    </div>
  );
};

const TabsSection = () => {
  // Your TabsSection component code here
};

const FollowSuggestions = () => {
  // Your FollowSuggestions component code here
};

export default Profile;