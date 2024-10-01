import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlineChecklist } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Post = () => {
  return (
    <div className="mb-4  border-y border-y-[#2f3336] p-4">
      <div className="flex items-center">
        <div className="w-[40px] h-[40px] bg-red-400 rounded-full me-2 bg-none foucs:   border-none	"></div>
        <input
          type="text"
          placeholder="What is happening?!"
          className="w-full p-3 rounded-lg bg-black text-white outline-none	"
        />
      </div>

      <div className="flex justify-between mt-2">
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
        <button className="bg-[#1d9bf0] px-4 py-2 rounded-full">Post</button>
      </div>
    </div>
  );
};

export default Post;
