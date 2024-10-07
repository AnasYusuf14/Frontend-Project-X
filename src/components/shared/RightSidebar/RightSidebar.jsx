import React, { useState } from "react";
import SearchInput from "../searchInput/searchInput";
import { Trends } from "@/assets/Trend";
import { Users } from "@/assets/users";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const RightSidebar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [displayedTrends, setDisplayedTrends] = useState(5);
  const [displayedUsers, setDisplayedUsers] = useState(5);
  const showMoreOrLessTrends = () => {
    if (displayedTrends <= 5) {
      setDisplayedTrends(displayedTrends + 5);
    } else {
      setDisplayedTrends(5);
    }
  };
  const showMoreOrLessUsers = () => {
    if (displayedUsers <= 5) {
      setDisplayedUsers(displayedUsers + 5);
    } else {
      setDisplayedUsers(5);
    }
  };
  return (
    <div className="hidden lg:block text-white p-4 pt-0 rounded-lg shadow-lg">
      <SearchInput />
      <div className="mb-6 border border-[#2f3336] rounded-[30px] py-4">
        <h3 className="text-lg font-semibold mb-4 px-4">
          {t("Trends for you")}
        </h3>
        <ul className="">
          {Trends.slice(0, displayedTrends).map((trend, index) => (
            <>
              <li
                key={index}
                className="flex justify-between items-center text-gray-400 px-4 py-3 hover:bg-[#080808] transition cursor-pointer"
                onClick={() => navigate(`/home/trend?tn=${trend.trendName}`)}
              >
                <div>
                  <p>{trend.trendName}</p>
                  <p className="text-xs text-gray-500">
                    #{t("Trending in Location")}
                  </p>
                </div>
                <p className="text-xs text-gray-500">
                  {t(`${trend.trendNumber} Tweets`)}
                </p>
              </li>
            </>
          ))}
        </ul>
        {displayedTrends < Trends.length && (
          <button
            className="text-blue-400 text-sm mt-4 cursor-pointer px-4"
            onClick={showMoreOrLessTrends}
          >
            {displayedTrends > 5 ? t("Show less") : t("Show more")}
          </button>
        )}
      </div>
      <div className=" border border-[#2f3336] rounded-[30px] p-4">
        <h3 className="text-lg font-semibold mb-4">{t("Who to follow")}</h3>
        <ul className="space-y-4">
          {Users.slice(0, displayedUsers).map((user, index) => (
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
                {t("Follow")}
              </button>
            </li>
          ))}
        </ul>
        {displayedTrends < Trends.length && (
          <button
            className="text-blue-400 text-sm mt-4 cursor-pointer px-4"
            onClick={showMoreOrLessUsers}
          >
            {displayedUsers > 5 ? t("Show less") : t("Show more")}
          </button>
        )}
      </div>
      <div className="text-xs text-gray-500 mt-6">
        <p>{t("Terms of Service")}</p>
        <p>{t("Privacy Policy")}</p>
        <p>{t("Cookie Policy")}</p>
      </div>
    </div>
  );
};

export default RightSidebar;
