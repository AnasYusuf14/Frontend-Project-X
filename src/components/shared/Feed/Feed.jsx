import Post from "./Porst/Post";
import TweetCard from "./TweetCard/TweetCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     console.log(res.data);
  //     setPosts(res.data);
  //   });
  // }, []);
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
      <div className="space-y-4 p-4">
        {/* {posts.map((post, index) => (
          <TweetCard post={post} key={index} />
        ))} */}
      </div>
    </div>
  );
};

export default Feed;
