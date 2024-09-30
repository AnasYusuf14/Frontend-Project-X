import React from "react";
import { FaRegLightbulb } from "react-icons/fa6";
import NestedListsItem from "../NestedListsItem";
export default function CreatorSubscriptions() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">Creator Subscriptions</h1>
      <div className="flex flex-col gap-2">
        <NestedListsItem
          title="Manage Creator Subscriptions"
          icon={<FaRegLightbulb className=" text-2xl text-gray-500" />}
          description="View and manage your subscriptions to creators below using Stripe. Any active subscriptions you initiated on iOS or Android can be managed in the app."
          onClick={() => null}
        />
      </div>
    </div>
  );
}
