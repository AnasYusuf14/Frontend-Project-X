import React from "react";

import NestedListsItem from "../NestedListsItem";
import { MdOutlineLock } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { MdSwapHoriz } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const SecurityAndAccountAccessList = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">
        Security and account access
      </h1>
      <p className="mx-2  text-sm text-gray-500">
        Manage your account’s security and keep track of your account’s usage
        including apps that you have connected to your account.
      </p>
      <div className="flex flex-col gap-2">
        <NestedListsItem
          title="Security"
          icon={<MdOutlineLock className=" text-2xl text-gray-500" />}
          description="Manage your account's security."
          onClick={() => navigate("security")}
        />
        <NestedListsItem
          title="Apps and sessions"
          icon={<MdContentCopy className=" text-2xl text-gray-500" />}
          description="See information about when you logged into your account and the apps you connected to your account."
          onClick={() => navigate("apps_and_sessions")}
        />
        <NestedListsItem
          title="Connected accounts"
          icon={<MdSwapHoriz className=" text-2xl text-gray-500" />}
          description="Manage Google or Apple accounts connected to X to log in."
          onClick={() => navigate("connected_accounts")}
        />
        <NestedListsItem
          title="Delegate"
          icon={<IoPeopleOutline className=" text-2xl text-gray-500" />}
          description="Manage your shared accounts."
          onClick={() => navigate("delegate")}
        />
      </div>
    </div>
  );
};

export default SecurityAndAccountAccessList;
