import React, { useState } from "react";
import OpenButton from "./OpenButton";
import CloseButton from "./CloseButton";
import SideButton from "./SideButton";
import sidebarData from "./sidebarData";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <OpenButton open={open} />
      <aside
        className={` ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 fixed left-0 top-[52px] sm:top-[56px] z-30 bg-gray-light py-4 h-full px-[1.25rem] w-full sm:w-auto drop-shadow-sm`}
      >
        <div className="flex justify-between items-center text-lg mb-10 mt-2">
          Features
          <CloseButton close={close} />
        </div>
        <div className="h-full flex flex-col gap-10">
          {sidebarData.map((link) => (
            <SideButton {...link} key={link.label} />
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
