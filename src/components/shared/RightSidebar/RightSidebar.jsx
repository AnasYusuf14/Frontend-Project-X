const RightSidebar = () => {
  return (
    <div className="w-80 text-white p-4">
      {/* Subscription Box */}
      <div className="bg-[#202327] p-4 rounded-lg mb-4">
        <h3 className="font-bold">Subscribe to Premium</h3>
        <p>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button className="bg-blue-600 w-full py-2 mt-2 rounded-lg">
          Subscribe
        </button>
      </div>

      {/* Trending Section */}
      <div className="bg-[#202327] p-4 rounded-lg">
        <h3 className="font-bold mb-4">Whats happening</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Trending in Egypt</span>
            <span>حرائق هائل</span>
          </div>
          <div className="flex justify-between">
            <span>Trending in Egypt</span>
            <span>حازم صلاح أبو إسماعيل</span>
          </div>
          <div className="flex justify-between">
            <span>Politics • Trending</span>
            <span>بيروت</span>
          </div>
          {/* Add more trends */}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
