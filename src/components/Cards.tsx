import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards(): JSX.Element {
  return (
    <div className="cards">
      <h1>Check out these EPIC Activities!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-4.jpg"}
              text="Get some thrills during your time in Greece with a rock climbing experience at Meteora"
              label="Climbing"
              path="/ToSee"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-5.png"}
              text="Explore the hidden paths between the rocks with your bike"
              label="Enduro"
              path="/ToSee"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-1.jpg"}
              text="Hike through the hidden trails and discover the hidden monastery of Ypapanti and the ancient ruins of St. Dimitrios"
              label="Adventure"
              path="/ToSee"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-2.jpg"}
              text="Get set for an adrenaline-fuelled adventure and experience the stunning countryside around Meteora"
              label="Adrenaline"
              path="/ToSee"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-3.jpg"}
              text="Experience Meteora at its most magical on an atmospheric sunset tour of the UNESCO-listed monastery complex"
              label="Nature"
              path="/ToSee"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
