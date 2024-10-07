import { Outlet } from "react-router-dom";
import LeftSidebar from "../../shared/LeftSidebar/LeftSidebar";
import RightSidebar from "../../shared/RightSidebar/RightSidebar";
import { useSelector } from "react-redux";
const Home = () => {
  const mode = useSelector((state) => state.mode.mode);
  const dir = useSelector((state) => state.dir.dir);
  console.log(dir);
  return (
    <div
      dir={dir === "ltr" ? "ltr" : "rtl"}
      className={`flex min-h-screen ${
        mode ? "bg-white text-black" : "bg-black text-white "
      } text-white xl:px-6`}
    >
      <div className="flex-[.1] xl:flex-[.2]">
        <LeftSidebar />
      </div>
      <div className="flex-[.9] lg:flex-[.7] xl:flex-[.5] flex border-x border-[#2f3336]">
        <Outlet />
      </div>
      <div className="lg:flex-[.3]">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
