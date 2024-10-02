import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { posts } from "@/assets/posts";
import { FaArrowLeft } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import {
  FiUserPlus,
  FiList,
  FiVolumeX,
  FiSlash,
  FiBarChart,
  FiCode,
  FiFlag,
  FiEyeOff,
  FiHelpCircle,
} from "react-icons/fi";
import "./Tweet.css";
const Tweet = () => {
  const [searchParams] = useSearchParams();
  const tweetId = searchParams.get("id");
  const tweetData = posts.find((p) => p.id === tweetId);
  if (!tweetData) {
    return <div className="text-white">Tweet not found</div>;
  }
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);
  return (
    <div className="text-white p-4 rounded-lg">
      <div>
        <div className="flex items-center mb-3">
          <FaArrowLeft onClick={() => navigate("/Feed")} />
          <p className="ms-3">Post</p>
        </div>
      </div>
      <div className="space-x-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full me-2"
              src={tweetData.userImg}
              alt={tweetData.userName}
            />
            <div>
              <p className="font-bold">{tweetData.userName}</p>
              <p className="text-gray-500">
                @{tweetData.user} · {tweetData.postTime}
              </p>
            </div>
          </div>
          <div className="flex items-center relative" ref={menuRef}>
            <button className="bg-white border border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 me-3">
              Subscribe
            </button>
            <MdMoreHoriz onClick={toggleMenu} />
            {isOpen && (
              <div
                className="more absolute right-0 mt-2 w-56 top-0 bg-black rounded-md"
                style={{
                  boxShadow:
                    "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px;",
                }}
              >
                <div className="py-1">
                  <MenuItem icon={<FiUserPlus />} text="Follow @TheFigen_" />
                  <MenuItem icon={<FiList />} text="Subscribe to @TheFigen_" />
                  <MenuItem
                    icon={<FiList />}
                    text="Add/remove @TheFigen_ from Lists"
                  />
                  <MenuItem icon={<FiVolumeX />} text="Mute @TheFigen_" />
                  <MenuItem
                    icon={<FiVolumeX />}
                    text="Mute this conversation"
                  />
                  <MenuItem icon={<FiSlash />} text="Block @TheFigen_" />
                  <MenuItem
                    icon={<FiBarChart />}
                    text="View post engagements"
                  />
                  <MenuItem icon={<FiCode />} text="Embed post" />
                  <MenuItem icon={<FiFlag />} text="Report post" />
                  <MenuItem icon={<FiEyeOff />} text="View hidden replies" />
                  <MenuItem
                    icon={<FiHelpCircle />}
                    text="Request Community Note"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="text-white mt-2">{tweetData.postText}</p>
      </div>
      {tweetData.postVideo && (
        <div className="mt-4">
          <video className="rounded-lg w-full" controls>
            <source src={tweetData.postVideo} type="video/mp4" />
          </video>
        </div>
      )}
      {tweetData.postImg && (
        <div className="mt-4">
          <img
            className="rounded-lg w-full"
            src={tweetData.postImg}
            alt="Tweet Media"
          />
        </div>
      )}
      <div className="flex justify-between items-center text-gray-500 mt-3">
        <span>{tweetData.views} Views</span>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.046 2.242a10.06 10.06 0 0 0-7.13 3.316..." />
            </svg>
            <span>{tweetData.retweets} Retweets</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4.248C8.852-1.735 0 .998..." />
            </svg>
            <span>{tweetData.likes} Likes</span>
          </div>
        </div>
      </div>
      {tweetData.replies && tweetData.replies.length > 0 && (
        <div className="mt-6 space-y-4">
          {tweetData.replies.map((reply, index) => (
            <div key={index} className="flex items-start space-x-3">
              <img
                className="w-10 h-10 rounded-full"
                src={reply.userImg || "default-avatar.png"}
                alt={reply.userName}
              />
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold">{reply.userName}</span>
                  <span className="text-gray-500">
                    @{reply.user} · {reply.time}
                  </span>
                </div>
                <p className="text-gray-400 mt-1">{reply.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ icon, text }) => (
  <a
    href="#"
    className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </a>
);
export default Tweet;
