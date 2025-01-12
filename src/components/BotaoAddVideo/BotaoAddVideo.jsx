import React from "react";
import { useNavigate } from "react-router";
import "./BotaoAddVideo.css";

const BotaoAddVideo = ({ texto }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/novo-video");
  };

  return <button className='addVideo' onClick={handleClick}>{texto}</button>;
};

export default BotaoAddVideo;
