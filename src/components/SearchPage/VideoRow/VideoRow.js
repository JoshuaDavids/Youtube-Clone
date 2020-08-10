import React from "react";
import "./VideoRow.css";

const VideoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className="videoRow">
      <img src={image} alt={channel} />
      <div className="text">
        <h3>{title}</h3>
        <p className="headline">
          {channel} • <span className="num">{subs}</span> Subscribers • {views}{" "}
          views • {timestamp}
        </p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
