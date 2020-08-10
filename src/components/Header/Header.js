import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="left">
        <MenuIcon />
        <Link to="/">
          <img
            className="logo"
            src="https://i.postimg.cc/VkTxxSXd/youtube.png"
            alt="youtube"
          />
        </Link>
      </div>
      <div className="input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="inputButton" />
        </Link>
      </div>
      <div className="icons">
        <VideoCallIcon className="icon" />
        <AppsIcon className="icon" />
        <NotificationsIcon className="icon" />
        <Avatar
          src="https://i.postimg.cc/dtTwd4qs/frame-00-delay-0-08s.jpg"
          alt="Joshua Davids"
        />
      </div>
    </div>
  );
};

export default Header;
