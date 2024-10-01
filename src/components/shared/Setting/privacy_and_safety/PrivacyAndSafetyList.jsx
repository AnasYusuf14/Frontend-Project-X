import React from "react";

import NestedListsItem from "../NestedListsItem";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FiArrowUpRight, FiUserCheck } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa";
import { MdKeyboardArrowRight, MdTimeline } from "react-icons/md";
import { MdSwapHoriz } from "react-icons/md";
import { AiOutlineEnvironment } from "react-icons/ai";
import { AiOutlineForm } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const PrivacyAndSafetyList = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">Privacy and safety</h1>
      <p className="mx-2  text-sm text-gray-500">
        Manage what information you see and share on X.
      </p>
      <div className="flex flex-col gap-2">
        <section>
          <h2 className="mx-2 my-2 text-[20px] font-bold">Your X activity</h2>
          <NestedListsItem
            title="Audience, media and tagging"
            icon={<AiOutlineUsergroupAdd className=" text-2xl text-gray-500" />}
            description="Manage what information you allow other people on X to see."
            onClick={() => navigate("audience_media_tagging")}
          />
          <NestedListsItem
            title="Your posts"
            icon={<AiOutlineEdit className=" text-2xl text-gray-500" />}
            description="Manage the information associated with your posts."
            onClick={() => navigate("your_posts")}
          />
          <NestedListsItem
            title="Content you see"
            icon={<FaRegNewspaper className=" text-2xl text-gray-500" />}
            description="Decide what you see on X based on your preferences like Topics and interests"
            onClick={() => navigate("content_you_see")}
          />
          <NestedListsItem
            title="Mute and block"
            icon={<IoVolumeMuteOutline className=" text-2xl text-gray-500" />}
            description="Manage the accounts, words, and notifications that you've muted or blocked."
            onClick={() => navigate("mute_and_block")}
          />
          <NestedListsItem
            title="Direct Messages"
            icon={<HiOutlineEnvelope className=" text-2xl text-gray-500" />}
            description="Manage who can message you directly."
            onClick={() => navigate("direct_messages")}
          />
          <NestedListsItem
            title="Spaces"
            icon={<BiMicrophone className=" text-2xl text-gray-500" />}
            description="Manage who can see your Spaces listening activity."
            onClick={() => navigate("spaces")}
          />
          <NestedListsItem
            title="Discoverability and contacts"
            icon={<FiUserCheck className=" text-2xl text-gray-500" />}
            description="Control your discoverability settings and manage contacts you've imported."
            onClick={() => navigate("discoverability-and-contacts")}
          />
        </section>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <section>
          <h2 className="mx-2 my-2 text-[20px] font-bold">
            Data sharing and personalization
          </h2>
          <NestedListsItem
            title="Ads preferences"
            icon={<AiOutlineBarChart className=" text-2xl text-gray-500" />}
            description="Manage your ads experience on X."
            onClick={() => navigate("ads_preferences")}
          />
          <NestedListsItem
            title="Inferred identity"
            icon={<MdTimeline className=" text-3xl text-gray-500" />}
            description="Allow X to personalize your experience with your inferred activity, e.g. activity on devices you haven't used to log in to X."
            onClick={() => navigate("inferred_identity")}
          />
          <NestedListsItem
            title="Data sharing with business partners"
            icon={<MdSwapHoriz className=" text-2xl text-gray-500" />}
            description="Allow sharing of additional information with X's business partners."
            onClick={() => navigate("data_sharing_with_business_partners")}
          />
          <NestedListsItem
            title="Location information"
            icon={<AiOutlineEnvironment className=" text-2xl text-gray-500" />}
            description="Manage the location information X uses to personalize your experience."
            onClick={() => navigate("location_information")}
          />
          <NestedListsItem
            title="Grok"
            icon={<AiOutlineForm className=" text-3xl text-gray-500" />}
            description="Allow your posts as well as your interactions, inputs, and results with Grok to be used for training and fine-tuning"
            onClick={() => navigate("grok")}
          />
        </section>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <section className="mb-2">
          <h2 className="mx-2 my-2 text-[20px] font-bold">
            Learn more about privacy on X
          </h2>
          <ul className="list-none">
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://privacy.x.com/en" target="_blank">
                Privacy center
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://x.com/en/privacy" target="_blank">
                Privacy policy
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://help.x.com/en/forms/privacy" target="_blank">
                Contact us
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyAndSafetyList;
