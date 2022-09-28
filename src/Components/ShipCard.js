import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

export default function ShipCard({ ships }) {
  


  useEffect(()=>{
    console.log(ships);
  },[])

  return (
    <div>
      <Card style={{  display: "flex",
                gap: 10,
                flexWrap: "wrap",
                width: "45%",
                 }}>
        <Card.Img
          variant="top"
          src="https://frpnet.net/wp-content/uploads/2015/12/millennium-falcon-star-wars.jpeg"
        />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <text>Model :</text>
          </Card.Text>
          <Card.Text>Hyperdrive Rating :</Card.Text>
          <Button variant="outline-secondary">Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
