import React from "react";
import verified from "./Verified.svg";
import "./ChannelRow.css";

import Avatar from "@material-ui/core/Avatar";

const ChannelRow = ({ image, channel, subs, noOfVideos, description }) => {
  return (
    <div className="channelRow">
      <Avatar className="avatarlogo" src={image} alt={channel} />
      <div className="text">
        <h4>
          {channel}{" "}
          {verified && (
            <img style={{ width: "24px" }} src={verified} alt="verified" />
          )}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
