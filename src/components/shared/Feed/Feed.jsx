import Post from "./Porst/Post";
import Posts from "./Posts/Posts";
const Feed = () => {
  return (
    <div className="flex-1 text-white pb-4">
      <div className="flex text-center">
        <button className="flex-[.5] p-5 hover:bg-[#333] transition 	">
          For You
        </button>
        <button className="flex-[.5] p-5 hover:bg-[#333] transition 	">
          Following
        </button>
      </div>
      <Post />
      <div className="space-y-4 p-4">
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
