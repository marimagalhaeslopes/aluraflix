import React, { useState, useEffect } from "react";
import "./FormularioNovoVideo.css";

const FormularioNovoVideo = ({ video = {}, onGuardar }) => {
  const [titulo, setTitulo] = useState(video.titulo || "");
  const [categoria, setCategoria] = useState(video.categoria || "");
  const [urlImagem, setUrlImagem] = useState(video.urlImagem || "");
  const [linkVideo, setLinkVideo] = useState(video.linkVideo || "");
  const [descricao, setDescricao] = useState(video.descricao || "");

  useEffect(() => {
    setTitulo(video.titulo || "");
    setCategoria(video.categoria || "");
    setUrlImagem(video.urlImagem || "");
    setLinkVideo(video.linkVideo || "");
    setDescricao(video.descricao || "");
  }, [video]);

  const limparCampos = () => {
    setTitulo("");
    setCategoria("");
    setUrlImagem("");
    setLinkVideo("");
    setDescricao("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dadosAtualizados = { titulo, categoria, urlImagem, linkVideo, descricao };
    onGuardar(dadosAtualizados);
  };

  return (
    <form className="formulario-novo-video" onSubmit={handleSubmit}>
      <h2>Cadastrar Vídeo</h2>
      <div className="form">
        <label htmlFor="titulo">Título</label>
        <input
          name="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <label>Categoria</label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="design">Design</option>
        </select>
        <label>URL da Imagem</label>
        <input
          type="text"
          value={urlImagem}
          onChange={(e) => setUrlImagem(e.target.value)}
          required
        />
        <label>Link do Vídeo</label>
        <input
          type="url"
          value={linkVideo}
          onChange={(e) => setLinkVideo(e.target.value)}
          required
        />
        <label>Descrição</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Salvar Alterações</button>
      <button type="button" onClick={limparCampos}>
        Limpar
      </button>
    </form>
  );
};

export default FormularioNovoVideo;
