import { Card, Row, Col, Placeholder } from "react-bootstrap";

function CharacterDetailsCardPlaceholder() {
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

export default CharacterDetailsCardPlaceholder;
