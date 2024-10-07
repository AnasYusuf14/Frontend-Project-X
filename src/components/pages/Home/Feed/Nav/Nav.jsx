import React from "react";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t } = useTranslation();
  return (
    <div className="flex text-center sticky top-0 bg-[#000000d9] border-b border-[#2f3336]">
      <button className="flex-[.5] p-4 text-sm hover:bg-[#333] transition ">
        {t("For You")}
      </button>
      <button className="flex-[.5] p-4 text-sm hover:bg-[#333] transition 	">
        {t("Following")}
      </button>
    </div>
  );
};

export default Nav;
