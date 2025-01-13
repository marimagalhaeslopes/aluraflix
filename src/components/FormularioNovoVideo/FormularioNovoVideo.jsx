import React, { useState } from "react";
import "./FormularioNovoVideo.css";
import Banner from "../Banner/Banner";

const FormularioNovoVideo = ({ onGuardar }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [urlImagem, setUrlImagem] = useState("");
  const [linkVideo, setLinkVideo] = useState("");
  const [descricao, setDescricao] = useState("");

  const limparCampos = () => {
    setTitulo("");
    setCategoria("");
    setUrlImagem("");
    setLinkVideo("");
    setDescricao("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoVideo = { titulo, categoria, urlImagem, linkVideo, descricao };
    onGuardar(novoVideo);
    limparCampos();
  };

  return (
    
    
    <form className="formulario-novo-video" onSubmit={handleSubmit}>
      <Banner />
      <h2>Novo Vídeo</h2>
      <h3>Complete o formulário para criar um novo card de vídeo.</h3>
      <h1>CRIAR CARD</h1>
      <div className="form">
      <label>
        Título:
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </label>
      <label>
        Categoria:
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          <option value="backend">Backend</option>
          <option value="frontend">Frontend</option>
          <option value="design">Design</option>
        </select>
      </label>
      <label>
        URL da Imagem:
        <input
          type="text"
          value={urlImagem}
          onChange={(e) => setUrlImagem(e.target.value)}
          required
        />
      </label>
      <label>
        Link do Vídeo:
        <input
          type="url"
          value={linkVideo}
          onChange={(e) => setLinkVideo(e.target.value)}
          required
        />
      </label>
      <label>
        Descrição:
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        ></textarea>
      </label>
      </div>
      <div className="botoes">
        <button type="submit">Guardar</button>
        <button type="button" onClick={limparCampos}>
          Limpar
        </button>
      </div>
    </form>
  );
};

export default FormularioNovoVideo;
