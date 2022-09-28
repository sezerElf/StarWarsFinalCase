import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Button, Card, Pagination } from "react-bootstrap";

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
        <button onClick={() => setCurrentPage(i)} disabled={currentPage === i}>
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <>
      {isloading ? (
        <div>yükleniyor...</div>
      ) : (
        <div className="container">
          <div>
            <div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <br></br>
              <button
                disabled={!ships.previous}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </button>
              {getPaginationButtons()}
              <button
                disabled={!ships.next}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "center",
              }}
            >
              {ships.results.map((ship, key) => (
                <Card
                  className="mt-3 mb-3"
                  key={key}
                  style={{
                    width: "18rem",
                    opacity: "80%",
                    minHeight: "content",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://frpnet.net/wp-content/uploads/2015/12/millennium-falcon-star-wars.jpeg"
                  />
                  <Card.Body>
                    <Card.Title>{ship.name}</Card.Title>
                    <Card.Text>{ship.model}</Card.Text>
                    <Card.Text>
                      Hyperdrive Rating : {ship.hyperdrive_rating}
                    </Card.Text>
                    
                    
                  </Card.Body>
                  <Card.Footer style={{borderTopStyle:"none"}}>
                  <Button
                      variant="outline-secondary"
                      style={{ marginTop: "auto" }}
                    >
                      Details
                    </Button>
                  </Card.Footer>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
