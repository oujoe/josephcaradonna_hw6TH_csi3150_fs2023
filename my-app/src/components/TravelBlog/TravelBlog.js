import React from "react";
import "./Travelblog.css";

function TravelBlogCard(props) {
  return (
    <div className="travelblog-card">
      <h1>{props.placeHeading}</h1>
      <img src={props.placeImg1} className="card-image" alt="Image from city" />
      <img src={props.placeImg2} className="card-image" alt="Image from city" />
      <img src={props.placeImg3} className="card-image" alt="Image from city" />
      <p>{props.placeDescription}</p>
    </div>
  );
}

export default TravelBlogCard;
