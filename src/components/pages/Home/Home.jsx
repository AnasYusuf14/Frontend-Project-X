import { Outlet } from "react-router-dom";
import LeftSidebar from "../../shared/LeftSidebar/LeftSidebar";
import RightSidebar from "../../shared/RightSidebar/RightSidebar";
import React, { useContext } from "react";
import { SidebarContext } from "../../../SidebarContext";

const Home = () => {
  // const { isSidebarVisible } = useContext(SidebarContext);
  return (
    <div className="flex min-h-screen bg-black text-white mx-auto">
      <LeftSidebar />
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 border border-[#2f3336]">
          <Outlet />
        </div>
        {/* {isSidebarVisible && <RightSidebar />} */}
        <RightSidebar className="" />
      </div>
    </div>
  );
};

export default Home;
