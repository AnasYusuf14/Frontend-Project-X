import React from "react";

const RightSidebar = () => {
  return (
    <div className=" text-white p-4 rounded-lg shadow-lg max-w-xs">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Trends for you</h3>
        <ul className="space-y-4">
          {[
            "#TrendingTopic1",
            "#TrendingTopic2",
            "Event: Highlight",
            "Popular in Location",
            "#Topic4",
            "#Topic5",
            "Another trending tag",
          ].map((trend, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-gray-400"
            >
              <div>
                <p>{trend}</p>
                <p className="text-xs text-gray-500">Trending in Location</p>
              </div>
              <p className="text-xs text-gray-500">10k Tweets</p>
            </li>
          ))}
        </ul>
        <p className="text-blue-400 text-sm mt-4 cursor-pointer">Show more</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Who to follow</h3>
        <ul className="space-y-4">
          {[
            {
              name: "User1",
              username: "@user1",
              avatar: "https://via.placeholder.com/50",
            },
            {
              name: "User2",
              username: "@user2",
              avatar: "https://via.placeholder.com/50",
            },
            {
              name: "User3",
              username: "@user3",
              avatar: "https://via.placeholder.com/50",
            },
          ].map((user, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.username}</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
                Follow
              </button>
            </li>
          ))}
        </ul>
        <p className="text-blue-400 text-sm mt-4 cursor-pointer">Show more</p>
      </div>

      <div className="text-xs text-gray-500 mt-6">
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
    </div>
  );
};

export default RightSidebar;
