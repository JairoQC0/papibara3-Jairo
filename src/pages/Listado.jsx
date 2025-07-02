import { useEffect } from "react";
import axios from "axios";
import useStore from "../store/useStore";

export default function Listado() {
  const { items, setItems } = useStore();

  useEffect(() => {
    axios
      .get(
        "https://dragonball-api.com/api/characters?race=Saiyan&affiliation=Z fighter"
      )
      .then((res) => setItems(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Listado</h2>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "250px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5>Ki: {item.ki}</h5>
                <p>Genero: {item.gender}</p>
                <a href={`/detalle/${item.id}`} className="btn btn-primary">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
