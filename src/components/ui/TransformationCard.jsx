import React from "react";
import { Card, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";

function TransformationCard({ id, name, image, description, ki, isLoading }) {
  if (isLoading) {
    return (
      <Card style={{ width: "15rem" }}>
        <Placeholder
          as="div"
          animation="glow"
          style={{ height: "14rem", backgroundColor: "#e9ecef" }}
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
    <Card style={{ width: "15rem" }}>
      <Card.Img
        className="py-2"
        variant="top"
        src={image}
        alt={name}
        style={{
          height: "14rem",
          objectFit: "contain",
          backgroundColor: "#e9ecef",
        }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="mb-1">
          <strong>Ki:</strong> {ki}
        </Card.Text>
        <Card.Text className="line-clamp-3">{description}</Card.Text>
        <Link to={`/details/${id}`} className="btn btn-primary">
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
}

export default TransformationCard;
