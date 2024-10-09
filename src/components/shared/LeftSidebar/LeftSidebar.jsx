import { MdOutlineMoreHoriz } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { LiftSideLinks } from "../../../assets/LiftSideLinks/index";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import "./more.css";
import Menu from "../MenuItem/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "@/assets/rtk/features/mode";
import { changeLang } from "@/assets/rtk/features/dir";
import { setAuthenticated, clearUser } from "@/assets/rtk/features/authSlice"; // Import your action to update authentication state
import { useTranslation } from "react-i18next";

const LeftSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const user = useSelector((state) => state.auth.user); // Access user data from Redux store

  useEffect(() => {
    const filteredMenu = LiftSideLinks.filter((item) => item.show === false);
    setMenu(filteredMenu);
  }, []);

  const { t, i18n } = useTranslation();

  const changeToEn = () => {
    i18n.changeLanguage("en");
  };

  const changeToAr = () => {
    i18n.changeLanguage("ar");
  };

  const handleSignOut = () => {
    localStorage.removeItem("authToken"); // Clear the token from localStorage
    localStorage.removeItem("userProfile"); // Clear the user profile from localStorage
    dispatch(setAuthenticated(false)); // Update the authentication state in Redux
    dispatch(clearUser()); // Clear the user profile state in Redux
    navigate("/signup"); // Redirect to the SignUpPage
  };

  return (
    <div className="sticky top-0 text-white flex flex-col p-4 text-center xl:text-start relative">
      <div className="xl:ps-3 cursor-pointer m-auto xl:m-0">
        <a href="/">
          <FaXTwitter className="text-3xl" />
        </a>
      </div>
      <div className="space-y-1 flex flex-col items-center xl:items-start">
        <div className="space-y-1 flex flex-col items-center lg:items-start">
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
                  className="w-fit flex items-center space-x-3 p-2 justify-center xl:justify-normal hover:bg-[#1a1a1a] transition rounded-full"
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
      <Link
        to="/profile" // Navigate to the Profile page
        className="flex items-center justify-between mx-auto xl:mx-0 mt-6 hover:bg-[#1a1a1a] transition rounded-full pe-1 cursor-pointer"
      >
        <div className="flex items-center">
          <img
            src={user?.imageUrl || 'images/images.jpeg'} // Use user's image or fallback image
            alt="userImg"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full m-auto xl:me-2"
          />
          <div>
            <p className="hidden xl:block">{user?.name || 'Palestinan'}</p> {/* Use user's name or fallback name */}
            <p className="hidden xl:block text-[#71767b] text-xs">
              @{user?.username || 'palestinan'} {/* Use user's username or fallback username */}
            </p>
          </div>
        </div>
        <MdOutlineMoreHoriz
          className="hidden xl:block pointer"
          onClick={() => dispatch(toggleMode())}
        />
      </Link>
      <div className="flex flex-col items-center mt-3">
        <button
          className="w-full hidden sm:block bg-blue-600 py-3 px-4 rounded-full mb-3 hover:bg-red-700 transition"
          onClick={handleSignOut}
        >
          {t("Sign Out")}
        </button>
        <div className="flex justify-center">
          <button
            className="me-3"
            onClick={() => {
              dispatch(changeLang("ltr"));
              changeToEn();
            }}
          >
            EN
          </button>
          <button
            onClick={() => {
              dispatch(changeLang("rtl"));
              changeToAr();
            }}
          >
            AR
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;