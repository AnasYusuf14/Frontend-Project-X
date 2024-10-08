import { Outlet, useLocation } from "react-router-dom";
import LeftSidebar from "../../shared/LeftSidebar/LeftSidebar";
import RightSidebar from "../../shared/RightSidebar/RightSidebar";
import { useSelector } from "react-redux";

const Home = () => {
  const mode = useSelector((state) => state.mode.mode);
  const dir = useSelector((state) => state.dir.dir);
  const location = useLocation();
  console.log(location.pathname.replace("/", ""));
  return (
    <div
      dir={dir === "ltr" ? "ltr" : "rtl"}
      className={`grid grid-cols-12  min-h-screen ${
        mode ? "bg-white text-black" : "bg-black text-white "
      } text-white xl:px-6 max-w-[1440px] m-auto`}
    >
      <div className={`col-span-2 xl:col-span-2`}>
        <LeftSidebar />
      </div>
      <div
        className={`col-span-10 ${
          location.pathname.split("/")[1] === "setting" ||
          location.pathname.replace("/", "") == "Messages" ||
          location.pathname.replace("/", "") == "Premium"
            ? "xl:col-span-10"
            : "lg:col-span-6"
        } border-x border-[#2f3336]`}
      >
        <Outlet />
      </div>
      {location.pathname.replace("/", "") == "/setting/account" ||
      location.pathname.replace("/", "") == "Messages" ||
      location.pathname.replace("/", "") == "Premium" ? (
        ""
      ) : (
        <div className="hidden lg:block lg:col-span-4">
          <RightSidebar />
        </div>
      )}
    </div>
  );
};

export default Home;
