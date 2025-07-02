import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import useStore from "../store/useStore";

export default function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedItem, setSelectedItem, setReserva } = useStore();

  const [loading, setLoading] = useState(true);
  const [dia, setDia] = useState("");
  const [hora, setHora] = useState("");
  const [entradas, setEntradas] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dragonball-api.com/api/characters/id`)
      .then((res) => {
        setSelectedItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener detalles:", err);
        setLoading(false);
      });
  }, [id, setSelectedItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dia || !hora) return alert("Completa todos los campos");
    setReserva({ dia, hora, entradas });
    navigate("/confirmacion");
  };

  if (loading || !selectedItem)
    return <p className="text-center mt-5">Cargando...</p>;

  return (
    <div className="container mt-5">
      <h2 className="mb-3">{selectedItem.title || selectedItem.name}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Día</label>
          <select
            className="form-select"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
          >
            <option value="">Seleccionar</option>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miércoles">Miércoles</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Hora</label>
          <select
            className="form-select"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          >
            <option value="">Seleccionar</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="8:30 PM">8:30 PM</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Entradas</label>
          <input
            type="number"
            className="form-control"
            min="1"
            value={entradas}
            onChange={(e) => setEntradas(e.target.value)}
          />
        </div>
        <button className="btn btn-success">Reservar</button>
      </form>
    </div>
  );
}
