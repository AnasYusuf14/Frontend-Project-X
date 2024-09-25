const Feed = () => {
  return (
    <div className="flex-1 border border-[#2f3336] text-white p-4">
      {/* What's Happening Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="What is happening?!"
          className="w-full p-3 rounded-lg bg-[#202327] text-white"
        />
        <div className="flex justify-between mt-2">
          <div className="space-x-2">
            {/* Icons like image, emoji */}
            <button>📷</button>
            <button>😊</button>
            <button>📍</button>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded-lg">Post</button>
        </div>
      </div>

      {/* Tweets Section */}
      <div className="space-y-4">
        <div className="bg-[#202327] p-4 rounded-lg">
          <h3 className="font-bold">@vidsthatgohard</h3>
          <p>Michael finally got his boat 11 years later!</p>
          <img
            src="https://placekitten.com/500/300"
            alt="Tweet Image"
            className="rounded-lg mt-2"
          />
        </div>
        {/* Add more posts */}
      </div>
    </div>
  );
};

export default Feed;
