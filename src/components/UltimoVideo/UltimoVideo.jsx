import React from "react";
import "./UltimoVideo.css";

const UltimoVideo = ({ video }) => {
  if (!video) return null;

  return (
    <div
      className="ultimo-video-container"
      style={{ backgroundImage: `url(${video.urlImagem})` }}
    >
      <div className="ultimo-video-content">
        {/* Informações do vídeo */}
        <div className="video-info">
          <span className="video-categoria">{video.categoria.toUpperCase()}</span>
          <h3>{video.titulo}</h3>
          <p className="video-descricao">{video.descricao}</p>
        </div>

        {/* Miniatura do vídeo */}
        <div className="video-thumbnail">
          <img
            src={video.urlImagem}
            alt={`Miniatura do vídeo ${video.titulo}`}
            style={{ }}
          />
        </div>
      </div>
    </div>
  );
};

export default UltimoVideo;
