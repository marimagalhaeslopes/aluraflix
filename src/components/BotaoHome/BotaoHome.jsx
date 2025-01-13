import React from "react";
import { useNavigate } from "react-router";
import "./BotaoHome.css";

const BotaoHome = ({ texto }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/"); 
  };

  return (
    <button className="botaoHome" onClick={handleClick}>
      {texto}
    </button>
  );
};

export default BotaoHome;
