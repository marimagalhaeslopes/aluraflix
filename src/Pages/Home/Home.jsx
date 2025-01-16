import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import ListaDeCards from "../../components/ListaDeCards/ListaDeCards";
import UltimoVideo from "../../components/UltimoVideo/UltimoVideo"; // Import do novo componente

const Home = () => {
  const [videos, setVideos] = useState([
    {
      titulo: "Node.js Intro",
      categoria: "backend",
      urlImagem:
        "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=900&h=562.5&q=90&fit=crop&ar=16%3A10",
      linkVideo: "https://youtube.com",
      descricao: "Introdução ao Node.js.",
    },
    {
      titulo: "Node.js Intro",
      categoria: "backend",
      urlImagem:
        "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=900&h=562.5&q=90&fit=crop&ar=16%3A10",
      linkVideo: "https://youtube.com",
      descricao: "Introdução ao Node.js.",
    },
    {
      titulo: "Node.js Intro",
      categoria: "backend",
      urlImagem:
        "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=900&h=562.5&q=90&fit=crop&ar=16%3A10",
      linkVideo: "https://youtube.com",
      descricao: "Introdução ao Node.js.",
    },
    {
      titulo: "Node.js Intro",
      categoria: "frontend",
      urlImagem:
        "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=900&h=562.5&q=90&fit=crop&ar=16%3A10",
      linkVideo: "https://youtube.com",
      descricao: "Introdução ao Node.js.",
    },
    {
      titulo: "Node.js Intro",
      categoria: "frontend",
      urlImagem:
        "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=900&h=562.5&q=90&fit=crop&ar=16%3A10",
      linkVideo: "https://youtube.com",
      descricao: "Introdução ao Node.js.",
    },
    {
      titulo: "Node.js Intro",
      categoria: "frontend",
      urlImagem:
        "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=900&h=562.5&q=90&fit=crop&ar=16%3A10",
      linkVideo: "https://youtube.com",
      descricao: "Introdução ao Node.js.",
    }
  ]);

  const [editando, setEditando] = useState(null);

  const atualizarVideo = (index, dadosAtualizados) => {
    const novosVideos = [...videos];
    novosVideos[index] = { ...novosVideos[index], ...dadosAtualizados };
    setVideos(novosVideos);
    setEditando(null);
  };

  const excluirVideo = (index) => {
    const confirmacao = window.confirm(
      `Deseja realmente excluir o vídeo "${videos[index].titulo}"?`
    );
    if (confirmacao) {
      const novosVideos = videos.filter((_, i) => i !== index);
      setVideos(novosVideos);
    }
  };

  return (
    <>
      <Banner />
      <UltimoVideo video={videos[videos.length - 1]} />{" "}
      {/* Passa o último vídeo */}
      <ListaDeCards
        videos={videos}
        editando={editando}
        setEditando={setEditando}
        onAtualizar={atualizarVideo}
        onExcluir={excluirVideo}
      />
      <Footer />
    </>
  );
};

export default Home;
