import { MdKeyboardArrowRight } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import SettingListItem from "./SettingListItem";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Setting() {
  const [selectedItem, setSelectedItem] = useState("Your Account");

  return (
    <div className="flex flex-col gap-2 lg:flex-row">
      <div className="flex-1 w-full h-full flex flex-col gap-2 max-w-[900px]">
        <h1 className="mx-2 my-3 text-2xl font-bold">Settings</h1>
        <div className="flex flex-col gap-2">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search Settings"
              className="w-full max-w-900 mx-2 my-1 p-[6px] indent-8 rounded-full bg-black border-4 border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <IoSearch className="absolute left-6 text-gray-500 text-[20px]" />
          </div>
          <SettingListItem
            title="Your Account"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Your Account"}
            onClick={() => {
              setSelectedItem("Your Account");
              console.log(selectedItem);
            }}
          />
          <SettingListItem
            title="Monetization"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Monetization"}
            onClick={() => setSelectedItem("Monetization")}
          />
          <SettingListItem
            title="Creator Subscriptions"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Creator Subscriptions"}
            onClick={() => setSelectedItem("Creator Subscriptions")}
          />
          <SettingListItem
            title="Security and account access"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Security and account access"}
            onClick={() => setSelectedItem("Security and account access")}
          />
          <SettingListItem
            title="Privacy and safety"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Privacy and safety"}
            onClick={() => setSelectedItem("Privacy and safety")}
          />
          <SettingListItem
            title="Notifications"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Notifications"}
            onClick={() => setSelectedItem("Notifications")}
          />
          <SettingListItem
            title="Accessibility, display, and languages"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Accessibility, display, and languages"}
            onClick={() =>
              setSelectedItem("Accessibility, display, and languages")
            }
          />
          <SettingListItem
            title="Additional resources"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Additional resources"}
            onClick={() => setSelectedItem("Additional resources")}
          />
          <SettingListItem
            title="Help Center"
            icon={<FiArrowUpRight />}
            isActive={false}
            onClick={() =>
              window.open(
                "https://help.x.com/en",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
        </div>
      </div>
      <Outlet className="flex-1" />
    </div>
  );
}
