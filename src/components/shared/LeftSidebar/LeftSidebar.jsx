import { MdOutlineMoreHoriz } from "react-icons/md";
import { Link } from "react-router-dom";
import { LiftSideLinks } from "../../../assets/LiftSideLinks/index";
const LeftSidebar = () => {
  return (
    <div className="w-64 text-white h-screen flex flex-col justify-between p-4">
      <div className="space-y-1">
        <button className="text-3xl">X</button>
        <div className="space-y-1">
          {LiftSideLinks.map(({ name, iconName: Icon }, index) => {
            if (name === "setting/account") {
              return (
                <Link
                  key={index}
                  to={name}
                  className="flex items-center space-x-3 p-3"
                >
                  <Icon className="text-2xl" />
                  <span className="text-xl font-semibold">Settings</span>
                </Link>
              );
            } else {
              return (
                <Link
                  key={index}
                  to={name}
                  className="flex items-center space-x-3 p-3"
                >
                  <Icon className="text-2xl" />
                  <span className="text-xl font-semibold">{name}</span>
                </Link>
              );
            }
          })}
        </div>
        <button className="w-full bg-[#1d9bf0] text-white py-4 px-5 rounded-full">
          Post
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-red-300 rounded-full h-[50px] w-[50px] me-2"></div>
          <div>
            <p>abd ayman</p>
            <p className="text-[#71767b] text-xs">@ggooggoo</p>
          </div>
        </div>
        <MdOutlineMoreHoriz className="pointer" />
      </div>
    </div>
  );
};

export default LeftSidebar;
