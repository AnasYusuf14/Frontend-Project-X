import Post from "./Porst/Post";
import TweetCard from "./TweetCard/TweetCard";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { posts } from "@/assets/posts";
const Feed = () => {
  return (
    <div className="flex-1 text-white pb-4">
      <div className="flex text-center">
        <button className="flex-[.5] p-5 hover:bg-[#333] transition ">
          For You
        </button>
        <button className="flex-[.5] p-5 hover:bg-[#333] transition 	">
          Following
        </button>
      </div>
      <Post />
      <div className="space-y-4">
        {posts.map((p, index) => (
          <TweetCard p={p} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
