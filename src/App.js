import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import data from "./data.js";

function App() {
  const TravelCards = data.map((card) => {
    return <Section className="card" key={card.id} card={card} />;
  });
  return (
    <div>
      <Header />
      <div className="travel-cards">{TravelCards}</div>
    </div>
  );
}

export default App;
