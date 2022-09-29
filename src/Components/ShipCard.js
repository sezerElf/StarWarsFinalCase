import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ShipCard() {
  const { encodedUrl } = useParams();
  const [ship, setShip] = useState();

  useEffect(() => {
    const url = window.atob(encodedUrl);

    const getShip = async () => {
      const data = (await axios.get(url)).data;

      setShip(data);
    };

    getShip();
  }, []);

  if (!ship) return <div>Yukleniyor...</div>;

  return (
    <div>
      <div style={{ textAlign: "start" }}>
        <Link to={"/"}>
          <button
            id="paginationButton"
            style={{ marginTop: "8vh", marginLeft: "9vh" }}
            className="back-button"
          >
            back
          </button>
        </Link>
      </div>
      <div
        className="detailPage"
        style={{
          width: "50vh",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "8vh",
          paddingBottom:"3vh"
        }}
      >
        <div className="card" style={{ width: "50vh" }}>
          <img src={require (`../images/${ship.name}.jpg`)} />

          <h3>{ship.name} </h3>
          <p>Model : {ship.model}</p>
          <p>Hyperdrive Rating : {ship.hyperdrive_rating}</p>
          <p>Max Atmosphering Speed: {ship.max_atmosphering_speed}</p>
          <p>Manufacturer : {ship.manufacturer}</p>
          <p>Crew : {ship.crew}</p>
          <p>Cargo Capacity : {ship.cargo_capacity}</p>
        </div>
      </div>
    </div>
  );
}
