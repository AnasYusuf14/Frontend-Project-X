import React from "react";
import NestedListsItem from "../NestedListsItem";
import { GoPerson } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Monetization() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-4 text-2xl font-bold">Monetization</h1>
      <p className="mx-2 text-1xl font-bold">
        Payouts are not supported in your area
      </p>
      <p className="mx-2  text-gray-500">
        Unfortunately, our payment provider does not yet support payouts in your
        country. Some monetization programs are not available.
      </p>
      <div className="flex flex-col gap-2">
        <NestedListsItem
          title="Account information"
          icon={
            <div className="bg-indigo-600 w-[65px] rounded-lg p-3 ">
              <IoIosInformationCircleOutline className="text-3xl text-white w-full text-center" />
            </div>
          }
          description="See your account information like your phone number and email address."
          onClick={() => null}
        />
      </div>
    </div>
  );
}
