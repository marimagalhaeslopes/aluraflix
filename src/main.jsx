import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./Pages/Home/Home";
import FormularioNovoVideo from "../src/Pages/FormularioNovoVideo/FormularioNovoVideo";
import React, { useState } from "react";

const App = () => {
  const [videos, setVideos] = useState([]);

  const adicionarVideo = (novoVideo) => {
    setVideos((prevVideos) => [...prevVideos, novoVideo]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home videos={videos} />} />
        <Route
          path="/novo-video"
          element={<FormularioNovoVideo onGuardar={adicionarVideo} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<App />);
