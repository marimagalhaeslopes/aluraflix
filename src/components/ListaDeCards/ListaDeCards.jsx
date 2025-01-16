import React, { useState } from "react";
import "./ListaDeCards.css";
import excluirIcon from "../../assets/Excluir.svg";
import editarIcon from "../../assets/Editar.svg";

const ListaDeCards = ({ videos, onAtualizar, onExcluir }) => {
  const [editandoIndex, setEditandoIndex] = useState(null); // Índice do card em edição
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    urlImagem: "",
    linkVideo: "",
    descricao: "",
  });

  const getCategoriaStyle = (categoria) => {
    switch (categoria) {
      case "frontend":
        return { backgroundColor: "#6BD1FF", borderColor: "#6BD1FF" };
      case "backend":
        return { backgroundColor: "#00C86F", borderColor: "#00C86F" };
      case "design":
        return { backgroundColor: "#FFBA05", borderColor: "#FFBA05" };
      default:
        return {};
    }
  };

  const handleEditClick = (index) => {
    setFormData(videos[index]);
    setEditandoIndex(index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onAtualizar(editandoIndex, formData); // Atualiza o card no estado pai
    setEditandoIndex(null); // Fecha o card de edição
  };

  const handleCancel = () => {
    setEditandoIndex(null); // Fecha o card de edição sem salvar
  };

  return (
    <div className="lista-de-cards">
      {videos.map((video, index) => (
        <React.Fragment key={index}>
          <div className="card" style={getCategoriaStyle(video.categoria)}>
            <img src={video.urlImagem} alt={video.titulo} />
            <div className="card-text">
            <p>{video.descricao}</p>
            <a href={video.linkVideo} target="_blank" rel="noopener noreferrer">
              Assistir
            </a>
            <div className="botoes-card">
              <button onClick={() => handleEditClick(index)}>
                <img src={editarIcon} alt="Editar" />
              </button>
              <button onClick={() => onExcluir(index)}>
                <img src={excluirIcon} alt="Excluir" />
              </button>
              </div>
            </div>
          </div>

          {editandoIndex === index && (
            <div className="card-edicao">
              <h3>Editar Vídeo</h3>
              <div className="formulario-edicao">
                <input
                  type="text"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleInputChange}
                  placeholder="Título"
                  required
                />
                <select
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="design">Design</option>
                </select>
                <input
                  type="text"
                  name="urlImagem"
                  value={formData.urlImagem}
                  onChange={handleInputChange}
                  placeholder="URL da Imagem"
                  required
                />
                <input
                  type="url"
                  name="linkVideo"
                  value={formData.linkVideo}
                  onChange={handleInputChange}
                  placeholder="Link do Vídeo"
                  required
                />
                <textarea
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleInputChange}
                  placeholder="Descrição"
                  required
                ></textarea>
                <div className="botoes-edicao">
                  <button onClick={handleSave}>Salvar</button>
                  <button onClick={handleCancel}>Cancelar</button>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ListaDeCards;
