import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlineChecklist } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "@/assets/rtk/features/postSlice";
import { useTranslation } from "react-i18next";
const Post = () => {
  const dispatch = useDispatch();
  const [opacity, setOpacity] = useState(false);
  const [tweet, setTweet] = useState({
    id: `${Math.random().toString(36).substr(2, 9)}`,
    userName: "Palestina",
    user: "Palestina",
    userImg: "/images/images.jpeg",
    postTime: "33m",
    postContent: "",
    postImg: "/images/images.jpeg",
    views: "0",
    retweets: 0,
    likes: 0,
    fullPostTime: "5:11 PM, Oct,2024",
    hash: "",
    replies: [],
  });
  const postValidation = (e) => {
    const input = e.target.value.trim();
    const hashtags = (input.match(/#\w+/g) || []).map((tag) => tag.slice(1)); 
    if (input !== "") {
      setTweet((prevTweet) => ({
        ...prevTweet,
        postContent: input,
        hash: hashtags, 
      }));
      setOpacity(true);
    } else {
      setOpacity(false);
    }
  };
  const handelPost = () => {
    if (opacity) {
      dispatch(addPost(tweet));
    }
  };
  const { t } = useTranslation();
  return (
    <div className="mb-4 border-b border-[#2f3336] p-4">
      <div className="flex items-center">
        <img
          src="images/images.jpeg"
          alt="userImg"
          className="w-[50px] h-[50px] rounded-full me-2"
        />
        <input
          type="text"
          value={tweet.postContent}
          placeholder={t("What is happening?!")}
          className="w-full p-3 rounded-lg bg-black text-white outline-none	"
          onChange={(e) => {
            postValidation(e);
          }}
        />
      </div>
      <div className="flex justify-between mt-2 items-center">
        <div className="space-x-2 ms-[52px] ">
          <button className="text-[#13659d] text-xl hover:bg-[#175ccd54] rounded-full p-1 transition">
            <CiImageOn />
          </button>
          <button className="text-[#13659d] font-bold text-xl hover:bg-[#175ccd54] rounded-full p-1 transition">
            <MdOutlineGifBox />
          </button>
          <button className="text-[#13659d] font-bold text-xl hover:bg-[#175ccd54] rounded-full p-1 transition">
            <MdOutlineChecklist />
          </button>
          <button className="text-[#13659d] font-bold text-xl hover:bg-[#175ccd54] rounded-full p-1 transition">
            <CiFaceSmile />
          </button>
          <button className="text-[#13659d] font-bold text-xl hover:bg-[#175ccd54] rounded-full p-1 transition">
            <CiCalendarDate />
          </button>
          <button className="text-[#13659d] font-bold text-xl hover:bg-[#175ccd54] rounded-full p-1 transition">
            <IoLocationOutline />
          </button>
        </div>
        <button
          className={`bg-[#1d9bf0] px-4 py-2 rounded-full ${
            opacity ? "opacity-100" : "opacity-50"
          }`}
          disabled={opacity ? false : true}
          onClick={() => handelPost()}
        >
          Post
        </button>
      </div>
    </div>
  );
};
export default Post;
