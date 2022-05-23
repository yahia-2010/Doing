import React from "react";
import { IoClose } from "react-icons/io5";

const CloseButton = ({ close }) => {
  return (
    <button onClick={close}>
      <IoClose
        size={30}
        className="transition fill-gray-primary hover:fill-color-primary"
      />
    </button>
  );
};

export default CloseButton;
