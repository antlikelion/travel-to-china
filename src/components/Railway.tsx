import React from "react";
import "./css/Railway.css";
import { ReactComponent as Track } from "../assets/track1.svg";
import { ReactComponent as Platform } from "../assets/platform.svg";
import { ReactComponent as Train } from "../assets/train0.svg";

const Railway: React.FC = () => {
  return (
    <div className="Railway_body">
      <div className="arrange_track">
        <Platform className="platform" />
        <Train className="train" />
        <Track className="track" />
        <Track className="track" />
        <Track className="track" />
        <Track className="track" />
        <Track className="track" />
        <Track className="track" />
        <Track className="track" />
        <Track className="track" />
      </div>
      <div className="empty"></div>
    </div>
  );
};

export default Railway;
