import { Button, Card } from "react-bootstrap";
import React from "react";
import "./App.css";
import ShipCard from "./Components/ShipCard";
import ListCard from "./Components/ListCard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {" "}
          <Route path="/" element={<Home />}></Route>
          <Route path="/ships/:name" element={<ShipCard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
