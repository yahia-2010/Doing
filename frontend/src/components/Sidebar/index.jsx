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
        } transition duration-300`}
      >
        <CloseButton close={close} />
        <div className="">
          {sidebarData.map((link) => (
            <SideButton {...link} key={link.label} />
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
