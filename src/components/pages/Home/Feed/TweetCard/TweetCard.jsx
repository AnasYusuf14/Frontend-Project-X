import React from "react";
import { FaSpider, FaRetweet, FaHeart, FaComment, FaEye } from "react-icons/fa"; // Importing icons
import { useNavigate } from "react-router-dom";
const TweetCard = ({ p }) => {
  const naviget = useNavigate();
  return (
    <div
      className="border-b border-[#2f3336] cursor-pointer"
      onClick={() => naviget(`/tweet?id=${p.id}`)}
    >
      <div className="mx-auto text-white rounded-lg shadow-lg py-2 px-4">
        <div className="flex items-center mb-4">
          <img
            src={p.userImg}
            alt="Profile"
            className="rounded-full w-12 h-12 mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg">{p.userName}</h3>
            <p className="text-sm text-gray-400">
              @{p.user} · {p.postTime}
            </p>
          </div>
          <FaSpider className="ml-auto text-xl text-blue-400" />
        </div>
        <p className="mb-4">{p.postText}</p>
        <div className="bg-black rounded-lg overflow-hidden">
          <img src={p.postImg} alt="" className="w-full" />
        </div>
        <div className="flex items-center justify-between mt-4 text-gray-400">
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaComment />
            <span>{p.replies.length}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRetweet />
            <span>{p.retweets}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaHeart />
            <span>{p.likes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEye />
            <span>{p.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TweetCard;
