import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { Users } from "@/assets/Users";
const Profile = () => {
  return (
    <div className="flex-1 bg-black  text-white min-h-screen">
      <ProfileSection />
      <TabsSection />
      <FollowSuggestions />
    </div>
  );
};
const ProfileSection = () => {
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("name");
  const userData = Users.find((u) => u.username === userName);
  console.log(userData);
  const user = useSelector((state) => state.auth);
  return (
    <div className="">
      <div className="bg-[#333639] h-32"></div>
      <div className="relative -mt-16 ps-4  items-center space-x-4">
        {(userData && (
          <img
            src={userData.avatar}
            className="rounded-full w-[100px] h-[100px]"
          />
        )) || <FaUserCircle className="text-8xl text-blue-500" />}
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">
              {(userData && userData.name) || user.user.name}
            </h1>
            <AiFillCheckCircle className="text-blue-500" />
            <button className="ml-4 px-2 py-1 bg-gray-800 text-sm rounded-lg border border-gray-700 hover:bg-gray-700">
              Edit Profile
            </button>
          </div>
          <p className="text-gray-400 mb-3">
            @{(userData && userData.name) || user.user.username}
            {}
          </p>
          <p className="text-gray-500 text-sm">Joined November 2023</p>
        </div>
        <div className="flex">
          <div className="flex me-3">
            <span>0</span>
            <p className="ms-1 text-gray-400">Following</p>
          </div>
          <div className="flex">
            <span>0</span>
            <p className="ms-1 text-gray-400">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const TabsSection = () => {
  return (
    <div className="border-b border-gray-800">
      <ul className="flex space-x-6 px-6 py-3 text-gray-400">
        <li className="hover:text-white cursor-pointer">Posts</li>
        <li className="hover:text-white cursor-pointer">Replies</li>
        <li className="hover:text-white cursor-pointer">Highlights</li>
        <li className="hover:text-white cursor-pointer">Articles</li>
        <li className="hover:text-white cursor-pointer">Media</li>
        <li className="hover:text-white cursor-pointer">Likes</li>
      </ul>
    </div>
  );
};
const FollowSuggestions = () => {
  return (
    <div className=" p-6">
      <h2 className="text-lg font-semibold mb-4">Who to follow</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FaUserCircle className="text-4xl text-gray-500" />
            <div>
              <h3 className="font-semibold">Engadget Gaming</h3>
              <p className="text-sm text-gray-400">@engadgetgaming</p>
            </div>
          </div>
          <button className="px-4 py-1 bg-gray-800 text-sm rounded-lg border border-gray-700 hover:bg-gray-700">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
