import React from "react";

function Card({ name, description, image }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={image}
        className="card-img-top img-fluid"
        style={{ height: "14rem", objectFit: "contain" }}
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-truncate">{description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
