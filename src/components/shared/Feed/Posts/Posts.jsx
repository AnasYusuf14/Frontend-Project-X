import React from "react";
import { FaSpider, FaRetweet, FaHeart, FaComment, FaEye } from "react-icons/fa"; // Importing icons

const TweetCard = () => {
  return (
    <div className=" mx-auto text-white rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="rounded-full w-12 h-12 mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">Science girl</h3>
          <p className="text-sm text-gray-400">@gunsnrosesgirl3 · 10h</p>
        </div>
        <FaSpider className="ml-auto text-xl text-blue-400" />
      </div>

      <p className="mb-4">Engineering 🕸️🕷️</p>

      <div className="bg-black rounded-lg overflow-hidden">
        <video className="w-full" controls>
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex items-center justify-between mt-4 text-gray-400">
        <div className="flex items-center space-x-2">
          <FaComment />
          <span>583</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaRetweet />
          <span>4.7K</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaHeart />
          <span>28K</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEye />
          <span>1.3M</span>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
