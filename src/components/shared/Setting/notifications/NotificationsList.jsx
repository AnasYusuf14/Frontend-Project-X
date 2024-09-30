import React from "react";
import NestedListsItem from "../NestedListsItem";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { TbDeviceMobileMessage } from "react-icons/tb";
export default function NotificationsList() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">Notifications</h1>
      <p className="mx-2  text-sm text-gray-500">
        Select the kinds of notifications you get about your activities,
        interests, and recommendations.{" "}
      </p>
      <div className="flex flex-col gap-2">
        <NestedListsItem
          title="Filters"
          icon={
            <HiOutlineAdjustmentsHorizontal className=" text-2xl text-gray-500" />
          }
          description="Choose the notifications you’d like to see — and those you don’t."
          onClick={() => null}
        />
        <NestedListsItem
          title="Preferences"
          icon={<TbDeviceMobileMessage className=" text-2xl text-gray-500" />}
          description="Select your preferences by notification type."
          onClick={() => null}
        />
      </div>
    </div>
  );
}
