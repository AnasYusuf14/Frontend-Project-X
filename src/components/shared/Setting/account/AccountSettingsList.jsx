import React from "react";
import NestedListsItem from "../NestedListsItem";
import { GoPerson } from "react-icons/go";
import { HiOutlineKey } from "react-icons/hi";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineHeartBroken } from "react-icons/md";

const AccountSettingsList = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">Account</h1>
      <div className="flex flex-col gap-2">
        <NestedListsItem
          title="Account information"
          icon={<GoPerson className=" text-2xl text-gray-500" />}
          description="See your account information like your phone number and email address."
          onClick={() => null}
        />
        <NestedListsItem
          title="Change your password"
          icon={<HiOutlineKey className=" text-2xl text-gray-500" />}
          description="Change your password at any time."
          onClick={() => null}
        />
        <NestedListsItem
          title="Download an archive of your data"
          icon={<MdOutlineFileDownload className=" text-2xl text-gray-500" />}
          description="Get insights into the type of information stored for your account."
          onClick={() => null}
        />
        <NestedListsItem
          title="Deactivate your account"
          icon={<MdOutlineHeartBroken className=" text-2xl text-gray-500" />}
          description="Find out how you can deactivate your account."
          onClick={() => null}
        />
      </div>
    </div>
  );
};

export default AccountSettingsList;
