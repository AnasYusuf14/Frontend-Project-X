import { MdKeyboardArrowRight } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import SettingListItem from "./SettingListItem";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SidebarContext } from "@/SidebarContext.jsx";

export default function Setting() {
  const [selectedItem, setSelectedItem] = useState("Your Account");
  const navigate = useNavigate();
  const { closeRightSidebar } = useContext(SidebarContext);

  const handleNavigation = (item, path) => {
    setSelectedItem(item);
    navigate(path);
  };

  useEffect(() => {
    const pathMap = {
      "/setting": { path: "/setting/account", item: "Your Account" },
      "/setting/account": { path: "/setting/account", item: "Your Account" },
      "/setting/monetization": {
        path: "/setting/monetization",
        item: "Monetization",
      },
      "/setting/manage_subscriptions": {
        path: "/setting/manage_subscriptions",
        item: "Creator Subscriptions",
      },
      "/setting/security_and_account_access": {
        path: "/setting/security_and_account_access",
        item: "Security and account access",
      },
      "/setting/privacy_and_safety": {
        path: "/setting/privacy_and_safety",
        item: "Privacy and safety",
      },
      "/setting/notifications": {
        path: "/setting/notifications",
        item: "Notifications",
      },
      "/setting/accessibility_display_and_languages": {
        path: "/setting/accessibility_display_and_languages",
        item: "Accessibility, display, and languages",
      },
      "/setting/additional_resources": {
        path: "/setting/additional_resources",
        item: "Additional resources",
      },
    };

    const currentPath = window.location.pathname;
    if (pathMap[currentPath]) {
      setSelectedItem(pathMap[currentPath].item);
      navigate(pathMap[currentPath].path);
    }
  }, [navigate]);

  useEffect(() => {
    closeRightSidebar();
  }, [closeRightSidebar]);

  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <div className="grow w-full h-full flex flex-col gap-2 max-w-[800px]">
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
            onClick={() => handleNavigation("Your Account", "/setting/account")}
          />
          <SettingListItem
            title="Monetization"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Monetization"}
            onClick={() =>
              handleNavigation("Monetization", "/setting/monetization")
            }
          />
          <SettingListItem
            title="Creator Subscriptions"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Creator Subscriptions"}
            onClick={() =>
              handleNavigation(
                "Creator Subscriptions",
                "/setting/manage_subscriptions"
              )
            }
          />
          <SettingListItem
            title="Security and account access"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Security and account access"}
            onClick={() =>
              handleNavigation(
                "Security and account access",
                "/setting/security_and_account_access"
              )
            }
          />
          <SettingListItem
            title="Privacy and safety"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Privacy and safety"}
            onClick={() =>
              handleNavigation(
                "Privacy and safety",
                "/setting/privacy_and_safety"
              )
            }
          />
          <SettingListItem
            title="Notifications"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Notifications"}
            onClick={() =>
              handleNavigation("Notifications", "/setting/notifications")
            }
          />
          <SettingListItem
            title="Accessibility, display, and languages"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Accessibility, display, and languages"}
            onClick={() =>
              handleNavigation(
                "Accessibility, display, and languages",
                "/setting/accessibility_display_and_languages"
              )
            }
          />
          <SettingListItem
            title="Additional resources"
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === "Additional resources"}
            onClick={() =>
              handleNavigation(
                "Additional resources",
                "/setting/additional_resources"
              )
            }
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
      <Outlet className="grow min-w-[600px]" />
    </div>
  );
}
