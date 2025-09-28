import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import CharacterDetailsCardPlaceholder from "./CharacterDetailsCardPlaceholder";

function CharacterDetailsCard({ character, isLoading = false }) {
  if (isLoading) return <CharacterDetailsCardPlaceholder />;

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
        <Col
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              maxHeight: "600px",
              overflow: "hidden",
            }}
          >
            <Card.Img
              src={character.image}
              alt={character.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                padding: "2rem 0",
              }}
            />
            {character.race && (
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
                  {character.race}
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
                {character.name}
              </Card.Title>
              <ul className="list-unstyled">
                <li>
                  <strong>Género: </strong>
                  {character.gender == "Male" ? "Masculino" : "Femenino"}
                </li>
                <li>
                  <strong>Ki: </strong>
                  {character.ki}
                </li>
                <li>
                  <strong>Ki Máximo: </strong>
                  {character.maxKi}
                </li>
                <li>
                  <strong>Alianza: </strong>
                  {character.affiliation}
                </li>
              </ul>

              <Card.Text
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  textAlign: "justify",
                }}
              >
                {character.description}
              </Card.Text>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CharacterDetailsCard;
