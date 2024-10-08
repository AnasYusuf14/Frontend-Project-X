import React, { useState } from "react";
import { FaRetweet, FaHeart, FaEye } from "react-icons/fa";
import { CiSaveUp2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Menu from "@/components/shared/MenuItem/MenuItem";
import { postSetting } from "@/assets/LiftSideLinks";
const TweetCard = ({ p }) => {
  const [open, setOpen] = useState(false);
  const naviget = useNavigate();
  return (
    <div
      className="border-b border-[#2f3336] cursor-pointer"
      onClick={() => naviget(`/tweet?id=${p.id}`)}
    >
      <div className="text-white rounded-lg shadow-lg py-2 px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
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
          </div>
          <Menu listOfItems={postSetting} />
        </div>
        <p className="mb-4">{p.postContent}</p>
        <div className="bg-black rounded-lg overflow-hidden">
          <img src={p.postImg} alt="" className="w-full" />
        </div>
        <div className="flex items-center justify-between mt-4 text-gray-400">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-[#1d9bf0] transition">
            <FaRegComment size={20} />
            <span>{p.replies.length || "0"}</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-[#4CAF50] transition">
            <FaRetweet />
            <span>{p.retweets}</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-[#E91E63] transition">
            <FaHeart />
            <span>{p.likes}</span>
          </div>
          <div className="flex items-center space-x-2  hover:text-[#1d9bf0] transition">
            <CiBookmark />
            <span>{p.views}</span>
          </div>
          <div className="flex items-center hover:text-[#1d9bf0] transition">
            <CiSaveUp2 className="me-1 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TweetCard;
