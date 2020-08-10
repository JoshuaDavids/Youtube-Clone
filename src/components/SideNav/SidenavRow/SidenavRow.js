import React from "react";
import "./SidenavRow.css";

const SidenavRow = ({ selected, Icon, title }) => {
  return (
    <div className={`sideRow ${selected && "selected"}`}>
      <Icon className="icon" />
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default SidenavRow;
