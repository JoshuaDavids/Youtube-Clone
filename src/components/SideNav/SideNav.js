import React from "react";
import SidenavRow from "./SidenavRow/SidenavRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="sideNav">
      <SidenavRow selected Icon={HomeIcon} title="Home" />
      <SidenavRow Icon={WhatshotIcon} title="Trending" />
      <SidenavRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidenavRow Icon={VideoLibraryIcon} title="Library" />
      <SidenavRow Icon={HistoryIcon} title="History" />
      <SidenavRow Icon={OndemandVideoIcon} title="Your videos" />
      <SidenavRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidenavRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
      <SidenavRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
    </div>
  );
};

export default SideNav;
