import React from "react";
import OpenButton from "./OpenButton";
import CloseButton from "./CloseButton";
import SideButton from "./SideButton";
import sidebarData from "./sidebarData";

const Sidebar = () => {
  return (
    <>
      <OpenButton />
      <aside>
        <CloseButton />
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
