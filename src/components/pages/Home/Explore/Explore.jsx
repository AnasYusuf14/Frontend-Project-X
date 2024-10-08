import SearchInput from "@/components/shared/SearchInput/searchInput";
import TweetCard from "../Feed/TweetCard/TweetCard";
import { posts } from "@/assets/posts";

const Explore = () => {
  return (
    <div className="flex-1 text-white pb-3">
      <div className="text-center sticky top-0 bg-[#000000d9] border-b border-[#2f3336]">
        <SearchInput />

        <div className="hidden justify-around sm:flex">
          <button className="p-4 text-sm hover:bg-[#333] transition ">
            For You
          </button>
          <button className="p-4 text-sm hover:bg-[#333] transition 	">
            Trending
          </button>
          <button className="p-4 text-sm hover:bg-[#333] transition 	">
            News
          </button>
          <button className="p-4 text-sm hover:bg-[#333] transition 	">
            Sports
          </button>
          <button className="p-4 text-sm hover:bg-[#333] transition 	">
            Entertainment
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {posts.map((p, index) => (
          <TweetCard p={p} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
