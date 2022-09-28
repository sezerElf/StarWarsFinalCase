import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

export default function ShipCard() {
  const[ship,setShip]=useState([]);

  useEffect(()=> {
    getShip();
  },[]);

  async function getShip (){
    const ship = await axios( "https://swapi.dev/api/starships/9/");
    setShip(ship.data);
    console.log(ship);
  }

  
  return (
    <div>
      <Card style={{ width: "18rem", opacity: "80%" }}>
        <Card.Img variant="top" src="https://frpnet.net/wp-content/uploads/2015/12/millennium-falcon-star-wars.jpeg" />
        <Card.Body>
          <Card.Title>{ship.name}</Card.Title>
          <Card.Text>
            <text>Model :</text> {ship.model}
          </Card.Text>
          <Card.Text>
            Hyperdrive Rating : {ship.hyperdrive_rating}
          </Card.Text>
          <Button variant="outline-secondary">Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
