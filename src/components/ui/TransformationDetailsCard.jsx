import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import TransformationDetailsCardPlaceholder from "./TransformationDetailsCardPlaceholder";

function TransformationDetailsCard({ transformation, isLoading = false }) {
  if (isLoading) return <TransformationDetailsCardPlaceholder />;

  return (
    <Card
      className="mb-4 shadow-lg border-0"
      style={{
        overflow: "hidden",
        borderRadius: "0.375rem",
        borderTopRightRadius: "calc(0.375rem - 1px)",
        borderBottomRightRadius: "calc(0.375rem - 1px)",
      }}
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
              src={transformation.image}
              alt={transformation.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                padding: "2rem 0",
              }}
            />
            {transformation.race && (
              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "18px",
                  zIndex: 10,
                }}
              >
                <Badge
                  bg="info"
                  className="px-3 py-2"
                  style={{ fontSize: "0.8rem" }}
                >
                  {transformation.race}
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
                {transformation.name}
              </Card.Title>
              <Card.Text>
                <strong>Ki: </strong>
                {transformation.ki}
              </Card.Text>

              <Card.Text
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  textAlign: "justify",
                }}
              >
                {transformation.description}
              </Card.Text>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default TransformationDetailsCard;
