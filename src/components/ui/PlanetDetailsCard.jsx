import React from "react";
import { Card, Row, Col, Badge, Placeholder } from "react-bootstrap";

function PlanetDetailsCard({ planet, isLoading = false }) {
  if (isLoading) {
    return (
      <Card className="mb-4 shadow-lg">
        <Row className="g-0">
          <Col md={6}>
            <Placeholder
              as="div"
              animation="glow"
              style={{ height: "400px", backgroundColor: "#e9ecef" }}
            />
          </Col>
          <Col md={6}>
            <Card.Body className="p-4">
              <Placeholder as={Card.Title} animation="glow" className="mb-3">
                <Placeholder xs={8} size="lg" />
              </Placeholder>
              <Placeholder as="div" animation="glow" className="mb-3">
                <Placeholder xs={4} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={12} />
                <Placeholder xs={10} />
                <Placeholder xs={8} />
                <Placeholder xs={11} />
                <Placeholder xs={9} />
              </Placeholder>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }

  return (
    <Card className="mb-5 shadow-lg border-0">
      <Row className="g-0">
        <Col md={6}>
          <div
            style={{
              position: "relative",
              height: "400px",
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
                borderTopLeftRadius: "calc(0.375rem - 1px)",
                borderBottomLeftRadius: "calc(0.375rem - 1px)",
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
              borderRadius: "0",
              borderTopRightRadius: "calc(0.375rem - 1px)",
              borderBottomRightRadius: "calc(0.375rem - 1px)",
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
