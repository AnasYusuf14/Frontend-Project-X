import { MdOutlineMoreHoriz } from "react-icons/md";
import { Link } from "react-router-dom";
import { LiftSideLinks } from "../../../assets/LiftSideLinks/index";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import "./more.css";
import Menu from "../MenuItem/MenuItem";
import { useDispatch } from "react-redux";
import { toggleMode } from "@/assets/rtk/features/mode";
import { changeLang } from "@/assets/rtk/features/dir";
import { useTranslation } from "react-i18next";
const LeftSidebar = () => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const filteredMenu = LiftSideLinks.filter((item) => item.show === false);
    console.log(filteredMenu);
    setMenu(filteredMenu);
  }, []);
  const { t, i18n } = useTranslation();
  const changeToEn = () => {
    i18n.changeLanguage("en");
  };
  const changeToAr = () => {
    i18n.changeLanguage("ar");
  };
  return (
    <div className="sticky top-0 text-white flex flex-col p-4 text-center xl:text-start relative">
      <div className="space-y-1">
        <div className="ps-3 cursor-pointer ">
          <a href="/">
            <FaXTwitter className="text-3xl" />
          </a>
        </div>
        <div className="space-y-1">
          {LiftSideLinks.map(({ name, iconName: Icon }, index) => {
            if (name === "setting/account") {
              return (
                <Link
                  key={index}
                  to={name}
                  className="flex items-center space-x-3 p-2 justify-center xl:justify-normal"
                >
                  <Icon className="text-2xl" />
                  <span className="hidden xl:block text-xl font-semibold">
                    {t("Settings")}
                  </span>
                </Link>
              );
            }
            if (index >= 6) {
              return;
            } else {
              return (
                <Link
                  key={index}
                  to={name}
                  className="w-fit flex items-center space-x-3 p-2 justify-center xl:justify-normal	hover:bg-[#1a1a1a] transition rounded-full"
                >
                  <Icon className="text-2xl" />
                  <p className="hidden xl:block text-xl font-semibold">
                    {t(name)}
                  </p>
                </Link>
              );
            }
          })}
        </div>
        <Menu listOfItems={menu} />
        <button className="hidden xl:block w-full bg-[#1d9bf0] py-3 px-5 rounded-full">
          {t("Post")}
        </button>
      </div>
      <div className="flex items-center justify-between mx-auto xl:mx-0 mt-6 	hover:bg-[#1a1a1a] transition rounded-full pe-1 cursor-pointer">
        <div className="flex items-center ">
          <img
            src="images/images.jpeg"
            alt="userImg"
            className="w-[50px] h-[50px] rounded-full me-2 xl:me-2"
          />
          <div>
            <p className="hidden xl:block">Palestinan</p>
            <p className="hidden xl:block text-[#71767b] text-xs">
              @palestinan
            </p>
          </div>
        </div>
        <MdOutlineMoreHoriz
          className="hidden xl:block pointer"
          onClick={() => dispatch(toggleMode())}
        />
      </div>
      <button
        onClick={() => {
          dispatch(changeLang("ltr"));
          changeToEn();
        }}
      >
        EN
      </button>
      <button
        onClick={() => {
          dispatch(changeLang("rlt"));
          changeToAr();
        }}
      >
        AR
      </button>
    </div>
  );
};
export default LeftSidebar;
