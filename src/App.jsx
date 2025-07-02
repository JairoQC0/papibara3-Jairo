import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Listado";
import Listado from "./pages/Listado";
import Detalle from "./pages/Detalle";
import Confirmacion from "./pages/Confirmacion";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Listado />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/contact" element={<Confirmacion />} />
      </Routes>
    </BrowserRouter>
  );
}
