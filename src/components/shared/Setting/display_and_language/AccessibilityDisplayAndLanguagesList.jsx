import React from "react";

import NestedListsItem from "../NestedListsItem";
import { FaRegEyeSlash } from "react-icons/fa";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoEarthOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";
import { TbAccessible } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import KeyboardShortcuts from "./KeyboardShortcuts";
const AccessibilityDisplayAndLanguagesList = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">
        Accessibility, display and languages
      </h1>
      <p className="mx-2  text-sm text-gray-500">
        Manage how X content is displayed to you.
      </p>
      <div className="flex flex-col gap-2">
        <NestedListsItem
          title="Accessibility"
          icon={<FaRegEyeSlash className=" text-2xl text-gray-500" />}
          description="Manage aspects of your X experience such as limiting color contrast and motion."
          onClick={() => navigate("accessibility")}
        />
        <NestedListsItem
          title="Display"
          icon={<HiOutlinePaintBrush className=" text-2xl text-gray-500" />}
          description="Manage your font size, color, and background. These settings affect all the X accounts on this browser."
          onClick={() => navigate("display")}
        />
        <NestedListsItem
          title="Languages"
          icon={<IoEarthOutline className=" text-2xl text-gray-500" />}
          description="Manage which languages are used to personalize your X experience."
          onClick={() => navigate("languages")}
        />
        <NestedListsItem
          title="Data usage"
          icon={<FaRegChartBar className=" text-2xl text-gray-500" />}
          description="Limit how X uses some of your network data. These settings affect all the X accounts on this browser."
          onClick={() => navigate("data_usage")}
        />
        <NestedListsItem
          title="Keyboard shortcuts"
          icon={<TbAccessible className=" text-2xl text-gray-500" />}
          description={null}
          onClick={() => navigate(
            'keyboard_shortcuts',
          )}
        />
      </div>
    </div>
  );
};

export default AccessibilityDisplayAndLanguagesList;

