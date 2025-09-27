import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import PlanetDetailsCardPlaceholder from "./PlanetDetailsCardPlaceholder";

function PlanetDetailsCard({ planet, isLoading = false }) {
  if (isLoading) return <PlanetDetailsCardPlaceholder />;

  return (
    <Card
      className="mb-5 shadow-lg border-0"
      style={{ overflow: "hidden", borderRadius: "0.375rem" }}
    >
      <Row className="g-0">
        <Col md={6}>
          <div
            style={{
              position: "relative",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Card.Img
              src={planet.image}
              alt={planet.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "0",
              }}
            />
            {planet.isDestroyed && (
              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "18px",
                  zIndex: 10,
                }}
              >
                <Badge
                  bg="danger"
                  className="px-3 py-2"
                  style={{ fontSize: "0.8rem" }}
                >
                  Destruído
                </Badge>
              </div>
            )}
          </div>
        </Col>
        <Col md={6}>
          <Card.Body
            className="p-4 d-flex flex-column justify-content-center h-100"
            style={{
              backgroundColor: "#e0e0e0",
            }}
          >
            <div>
              <Card.Title
                className="display-4 mb-3 fw-bold"
                style={{ fontSize: "2.5rem" }}
              >
                {planet.name}
              </Card.Title>

              <Card.Text
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  textAlign: "justify",
                }}
              >
                {planet.description}
              </Card.Text>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default PlanetDetailsCard;
