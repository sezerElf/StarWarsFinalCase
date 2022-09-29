import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";
export default function ListCard() {
  const [ships, setShips] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getShip();
  }, [currentPage, search]);

  async function getShip() {
    try {
      const ship = await axios(
        `https://swapi.dev/api/starships/?page=${currentPage}&search=${search}`
      );
      setShips(ship.data);
      setNumberOfPages(Math.ceil(ship.data.count / 10));
      console.log(ships);
    } catch (error) {
      setShips({});
    } finally {
      setIsLoading(false);
    }
  }

  const getPaginationButtons = () => {
    const buttons = [];

    for (let i = 1; i <= numberOfPages; i++) {
      buttons.push(
        <button
          id="paginationButton"
          onClick={() => setCurrentPage(i)}
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <>
      {isloading ? (
       <Loading />
      ) : (
        <div className="container">
          <div>
            <div>
              <input
                className="searchInput"
                placeholder="Search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              
              <br></br>
              <button
                id="paginationButton"
                disabled={!ships.previous}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </button>
              {getPaginationButtons()}
              <button
                id="paginationButton"
                disabled={!ships.next}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
            <div
              className="cardsDiv"
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "center",
                paddingBottom: "2vh",
              }}
            >
              {ships.results.map((ship, key) => (
                <div className="card" key={key}>
                  <img src={require (`../images/${ship.name}.jpg`)} />
                  <h3>{ship.name} </h3>
                  <p> {ship.model}</p>
                  <p> Hyperdrive Rating : {ship.hyperdrive_rating} </p>

                  <footer className="footer">  <Link to={`/ships/${ship.name}/${window.btoa(ship.url)}`} >
                    <button
                      id="paginationButton"
                    >
                      Details
                    </button>
                  </Link></footer>
                
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
