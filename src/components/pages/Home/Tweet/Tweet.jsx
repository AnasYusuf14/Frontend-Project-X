import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { posts } from "@/assets/posts";
import { FaArrowLeft } from "react-icons/fa";
import "./Tweet.css";
import Menu from "@/components/shared/MenuItem/MenuItem";
import { postSetting } from "@/assets/LiftSideLinks";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { CiSaveUp2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FiImage, FiPaperclip, FiSmile, FiMapPin } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Tweet = () => {
  const [searchParams] = useSearchParams();
  const tweetId = searchParams.get("id");
  // Getting tweets from stor
  const postsArray = useSelector((state) => state.posts.posts);
  // Getting tweets from post.js
  const tweetData =
    posts.find((p) => p.id === tweetId) ||
    postsArray.find((p) => p.id === tweetId);
  if (!tweetData) {
    return <div className="text-white">Tweet not found</div>;
  }
  const navigate = useNavigate();
  let replayInfo = {
    userName: "Ayman",
    user: "Ayman384",
    userImg: "images/avatar-04.png",
    time: "dsad",
    text: "",
  };
  const [reply, setReply] = useState("");
  const [comments, setComments] = useState([]);
  const handleSubmit = () => {
    if (reply.trim() !== "") {
      replayInfo.text = reply;
      setComments([...comments, replayInfo]);
      setReply("");
    }
  };
  const [like, setLike] = useState(tweetData.likes);
  const [liked, setLiked] = useState(false);
  const handlLike = () => {
    if (!liked) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
  };
  const [subscribe, setSubscribe] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="flex-1 text-white rounded-lg">
      <div className="p-3">
        <div className="flex items-center mb-3">
          <FaArrowLeft onClick={() => navigate("/home")} />
          <p className="ms-3">{t("post")}</p>
        </div>
      </div>
      <div className="space-x-3 px-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full me-2 border border-[#2f3336]"
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
          <div className="flex items-center relative">
            <button
              className="bg-white border border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 me-3 "
              onClick={() => setSubscribe(!subscribe)}
            >
              {t(subscribe ? "subscribe" : "unSubscribe")}
            </button>
            <Menu listOfItems={postSetting} />
          </div>
        </div>
        <p className="text-white mt-2">{tweetData.postContent}</p>
      </div>
      {tweetData.postImg && (
        <div className="mt-4 px-3">
          <img
            className="rounded-lg w-full"
            src={tweetData.postImg}
            alt="Tweet Media"
          />
        </div>
      )}
      <div className="px-3">
        <div className="text-gray-500 py-2 border-b border-[#2f3336]">
          <span className="me-2">{tweetData.fullPostTime}</span>
          <span>
            <span className="text-white">{tweetData.views}</span> Views
          </span>
        </div>
        <div className="flex justify-between items-center text-gray-500 py-2 border-b border-[#2f3336]">
          <div
            className={`flex items-center hover:text-[#1d9bf0] transition ${
              comments.length && "text-[#1d9bf0]"
            }`}
          >
            <FaRegComment className="me-1 text-xl" />
            <span>{tweetData.replies.length + comments.length}</span>
          </div>
          <div className="flex items-center hover:text-[#4CAF50] transition">
            <BiRepost className="me-1 text-xl" />
            <span>{tweetData.retweets}</span>
          </div>
          <div
            className={`flex items-center hover:text-[#E91E63] transition ${
              liked && `text-[#E91E63]`
            }`}
            onClick={() => {
              setLiked(!liked);
              handlLike();
            }}
          >
            <CiHeart className="me-1 text-xl" />
            <span>{like}</span>
          </div>
          <div className="flex items-center hover:text-[#1d9bf0] transition">
            <CiBookmark className="me-1 text-xl" />
            <span>{tweetData.views}</span>
          </div>
          <div className="flex items-center hover:text-[#1d9bf0] transition">
            <CiSaveUp2 className="me-1 text-xl" />
          </div>
        </div>
      </div>
      <div className="p-4 text-white rounded-lg border-b border-[#2f3336]">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center">
            <span className="text-xl text-white">A</span>{" "}
          </div>
          <input
            type="text"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Post your reply"
            className="flex-grow bg-transparent border-none text-white placeholder-gray-400 focus:outline-none"
          />
          <div className="flex gap-2 text-blue-400">
            <FiImage size={20} />
            <FiPaperclip size={20} />
            <FiSmile size={20} />
            <FiMapPin size={20} />
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSubmit}
            disabled={reply.trim() === ""}
            className={`flex items-center gap-1 px-3 py-1 rounded-full transition ${
              reply.trim() === ""
                ? "bg-gray-500"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <AiOutlineSend size={20} className="text-white" />
            <span className="text-white">Reply</span>
          </button>
        </div>
      </div>
      {tweetData.replies && tweetData.replies.length > 0 && (
        <div className="space-y-2">
          {tweetData.replies.map((reply, index) => (
            <Comment comment={reply} key={index} />
          ))}
        </div>
      )}
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
    </div>
  );
};

export default Tweet;
