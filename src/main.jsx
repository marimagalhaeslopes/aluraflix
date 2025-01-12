import { createRoot } from "react-dom/client";
import { BrowserRouter, Route } from "react-router";
import "./index.css";
import Home from "./Pages/Home";
import { Routes } from "react-router";
import FormularioNovoVideo from "./components/FormularioNovoVideo/FormularioNovoVideo";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/novo-video" element={<FormularioNovoVideo />} />
    </Routes>
  </BrowserRouter>
);
