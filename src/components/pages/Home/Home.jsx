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
      <div className="flex-1 flex flex-col border-x border-[#2f3336]">
        <Outlet />
      </div>
      <RightSidebar />
    </div>
  );
};

export default Home;
