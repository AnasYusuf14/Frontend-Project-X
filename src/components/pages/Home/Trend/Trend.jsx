import React from "react";
import { useSearchParams } from "react-router-dom";
import TweetCard from "../Feed/TweetCard/TweetCard";
import SearchInput from "@/components/shared/SearchInput/SearchInput";
import { posts } from "@/assets/posts";

const Trend = () => {
  const [searchParams] = useSearchParams();
  const trendName = searchParams.get("tn");
  return (
    <div className="flex-1 text-white pb-3">
      <div className="text-center sticky top-0 bg-[#000000d9] border-b border-[#2f3336]">
        <SearchInput trendName={trendName} />

        <div className="flex justify-around">
          <button className="p-4 text-sm hover:bg-[#333] transition ">
            Top
          </button>
          <button className="p-4 text-sm hover:bg-[#333] transition 	">
            Latest
          </button>
          <button className="p-4 text-sm hover:bg-[#333] transition 	">
            People
          </button>
          <button className="p-4 text-sm hover:bg-[#333] transition 	">
            Media
          </button>
          <button className="p-4 text-sm hover:bg-[#333] transition 	">
            Lists
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

export default Trend;
