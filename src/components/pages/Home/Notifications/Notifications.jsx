import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Notifications = () => {
  return (
    <div className="mx-auto text-white py-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold ps-3">Notifications</h3>
        <button className="text-gray-400 pe-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m9 0H2"
            />
          </svg>
        </button>
      </div>

      <div className="flex border-b border-gray-700 mb-4">
        {/* {["All", "Verified", "Mentions"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-white"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))} */}
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-4 p-4  border-b border-gray-700">
          <AiOutlineTwitter className="text-2xl text-white" />
          <div>
            <p>
              There was a login to your account{" "}
              <span className="text-blue-400">@dopagaming</span> from a new
              device on Sep 23, 2024. Review it now.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-4   border-b border-gray-700">
          <FaExclamationTriangle className="text-2xl text-red-500" />
          <div>
            <p>
              There was an attempt to log in to your account{" "}
              <span className="text-blue-400">@dopagaming</span> on Sep 23, 2024
              that seems suspicious. Review it now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
