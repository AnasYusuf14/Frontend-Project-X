import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlineChecklist } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "@/assets/rtk/features/postSlice";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player/youtube";
const Post = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [opacity, setOpacity] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [url, setUrl] = useState("");
  const [assetArea, setAssetArea] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [textarea, setTextarea] = useState("");
  const [tweet, setTweet] = useState({
    id: `${Math.random().toString(36).substr(2, 9)}`,
    userName: user.name,
    user: user.username,
    userImg: "/images/images.jpeg",
    postTime: "0s",
    postContent: textarea,
    postImg: imageSrc,
    postUrl: url,
    views: "0",
    retweets: 0,
    likes: 0,
    fullPostTime: "",
    hash: "",
    replies: [],
  });
  const postValidation = (e) => {
    const input = e.target.value.trim();
    const hashtags = (input.match(/#\w+/g) || []).map((tag) => tag.slice(1));
    if (input !== "") {
      handleDate();
      setTweet((prevTweet) => ({
        ...prevTweet,
        postContent: input,
        hash: hashtags,
        postUrl: url,
        fullPostTime: currentTime,
      }));
      setOpacity(true);
    } else {
      setOpacity(false);
    }
  };
  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
    } else {
      setImageSrc(image);
      setTweet((prevTweet) => ({
        ...prevTweet,
        postImg: `/images/${image.name}`,
      }));
    }
  };
  const handleDate = () => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      month: "short",
      year: "numeric",
    };
    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", options);
    setCurrentTime(formattedTime);
  };
  const reset = () => {
    setTextarea("");
    setImageSrc("");
    setUrl("");
    setAssetArea("");
    setOpacity(false);
    setTweet((prevTweet) => ({
      ...prevTweet,
      postImg: ``,
    }));
  };
  const handelPost = () => {
    if (opacity) {
      dispatch(addPost(tweet));
      reset();
    }
  };
  const { t } = useTranslation();
  return (
    <div className="mb-4 border-b border-[#2f3336] p-4">
      <div className="flex items-start">
        <img
          src="images/images.jpeg"
          alt="userImg"
          className="w-[50px] h-[50px] rounded-full me-2"
        />
        <textarea
          className="bg-inherit outline-none focus:border-none w-full resize-none"
          type="text"
          autoFocus={true}
          placeholder={t("What Do You Want To Talk About ?")}
          rows="4"
          value={textarea}
          onChange={(e) => {
            const vlaue = e.target.value;
            setTextarea(vlaue);
            postValidation(e);
          }}
        />
      </div>
      {assetArea === "image" ? (
        <>
          <input type="file" placeholder="" onChange={handleChange} value="" />
          {imageSrc && (
            <img
              width={250}
              className="m-auto"
              src={URL.createObjectURL(imageSrc)}
              alt="img"
            />
          )}
        </>
      ) : (
        assetArea === "url" && (
          <>
            <input
              type="url"
              required
              placeholder="https://example.com"
              className="outline-none w-full bg-inherit	"
              vlaue=""
              onChange={(e) => {
                const value = e.target.value;
                setUrl(value);
              }}
            />
            <div className="max-h-[150px]">
              {url && <ReactPlayer width="100%" height="10%" url={url} />}
            </div>
          </>
        )
      )}
      <div className="flex justify-between mt-2 items-center">
        <div className="space-x-2 ms-[52px] ">
          <button className="text-[#13659d] text-xl hover:bg-[#175ccd54] rounded-full p-1 transition">
            <CiImageOn onClick={() => setAssetArea("image")} />
          </button>
          <button className="text-[#13659d] font-bold text-xl hover:bg-[#175ccd54] rounded-full p-1 transition">
            <MdOutlineGifBox onClick={() => setAssetArea("url")} />
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
