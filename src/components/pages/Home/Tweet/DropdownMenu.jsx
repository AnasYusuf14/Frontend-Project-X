import React, { useState } from "react";

const DropdownMenu = () => {
 
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md focus:outline-none"
      >
        Menu
      </button>

      
    </div>
  );
};


export default DropdownMenu;
