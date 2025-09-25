import React from "react";
import { Card, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";

function CharacterCard({
  id,
  name,
  race,
  description,
  image,
  isLoading = false,
}) {
  if (isLoading) {
    return (
      <Card style={{ width: "18rem" }}>
        <Placeholder
          as="div"
          animation="glow"
          style={{ height: "15rem", backgroundColor: "#e9ecef" }}
        />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} animation="glow" />
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        className="py-2"
        variant="top"
        src={image}
        alt={name}
        style={{ height: "15rem", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="mb-1">Raza: {race}</Card.Text>
        <Card.Text className="line-clamp-3">{description}</Card.Text>
        <Link to={`/details/${id}`} className="btn btn-primary">
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
