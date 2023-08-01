import React from "react";
import "../../App.css";
import "./ToSee.css";
import "../Cards.css";
import CardItem from "../CardItem";

type CardItemProps = {
  src: string;
  text: string;
  label: string;
  path: string; // Add the 'path' prop here
};

export default function ToSee() {
  const cardItems: CardItemProps[] = [
    {
      src: process.env.PUBLIC_URL + "/images/img-6.jpg",
      text: "Explore the world-famous monasteries",
      label: "Monasteries",
      path: "/monasteries", // Specify the path for this card item
    },
    {
      src: process.env.PUBLIC_URL + "/images/museum.jpg",
      text: "Museums you'll want to visit in Kalambaka",
      label: "Museums",
      path: "/museums", // Specify the path for this card item
    },
  ];

  return (
    <div>
      <nav className="tosee--navbar">
        <div className="navbar-container">
          <ul>
            <li className="nav-item">Monasteries</li>
            <li className="nav-item tosee-item">Museums</li>
            <li className="nav-item tosee-item">Activities</li>
          </ul>
        </div>
      </nav>
      <ul className="tosee--list">
        {cardItems.map((cardItem) => (
          <CardItem key={cardItem.label} {...cardItem} />
        ))}
      </ul>
    </div>
  );
}
