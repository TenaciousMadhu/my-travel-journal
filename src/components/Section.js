import React from "react";

export default function Section(props) {
  return (
    <div className="travel-card">
      <img className="location" src={props.card.imageUrl} alt="location" />
      <div classname="card-details">
        <div className="first-line">
          <img
            className="location-logo"
            src="/images/location-logo.png"
            alt="location-logo"
          />
          <div className="country">{props.card.location}</div>
          <a className="googleMapsUrl" href={props.card.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <div className="title">{props.card.title}</div>
        <div className="dates">
          <span>{props.card.startDate}</span>
          <span>-</span>
          <span>{props.card.endDate}</span>
        </div>
        <div className="description">{props.card.description}</div>
        <hr className="divider"></hr>
      </div>
    </div>
  );
}
