import { Outlet } from "react-router-dom";
import LeftSidebar from "../../shared/LeftSidebar/LeftSidebar";
import RightSidebar from "../../shared/RightSidebar/RightSidebar";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-black text-white mx-auto max-w-7xl">
      <LeftSidebar />
      <div className="flex-1 flex flex-col lg:flex-row">
        <Outlet />
        {/* <RightSidebar /> */}
      </div>
    </div>
  );
};

export default Home;
