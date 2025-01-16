import React from "react";
import "./Banner.css";
import BotaoHome from "../BotaoHome/BotaoHome";
import BotaoAddVideo from "../BotaoAddVideo/BotaoAddVideo";
import logo from "../../assets/Logo.svg";
import Footer from "../Footer/Footer";

const Banner = () => {
  const botoes = [
    { texto: "Home", componente: BotaoHome },
    { texto: "Novo vídeo", componente: BotaoAddVideo },
  ];

  return (
    <header className="banner">
      <div className="logoImagem">
        <img src={logo} alt="Logo do Aluraflix" />
      </div>

      <nav className="btnBanner">
        {botoes.map(({ texto, componente: Botao }, index) => (
          <Botao key={index} texto={texto} />
        ))}
      </nav>
    </header>
  );
};

export default Banner;