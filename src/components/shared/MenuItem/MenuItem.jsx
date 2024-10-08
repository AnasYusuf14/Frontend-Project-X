import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { CiCircleMore } from "react-icons/ci";
import { useTranslation } from "react-i18next";
const Menu = ({ listOfItems }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);
  return (
    <div
      className="w-fit flex items-center space-x-3 p-2 justify-center xl:justify-normal	hover:bg-[#1a1a1a] transition rounded-full"
      ref={menuRef}
      onClick={toggleMenu}
    >
      <CiCircleMore className="text-2xl" />
      {isOpen && (
        <div className="more absolute left-0 mt-2 w-56 top-0 bg-black rounded-md py-3">
          <div className="py-1">
            {listOfItems.map(({ name, iconName: Icon }, index) => (
              <MenuItem
                icon={<Icon className="text-2xl" />}
                text={t(name)}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
const MenuItem = ({ icon, text }) => (
  <Link
    to={text}
    className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
  >
    {icon}
    <span className="ml-2 text-xl font-semibold">{text}</span>
  </Link>
);
export default Menu;
