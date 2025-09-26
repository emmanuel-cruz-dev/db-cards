import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TransformationCard from "./TransformationCard";
import { useGetTransformations } from "../../hooks/useTransformations";

function TransformationsGallery() {
  const { data: transformations, isLoading, error } = useGetTransformations();

  if (error)
    return <p>Error al cargar las transformaciones: {error.message}</p>;

  return (
    <Container>
      <Row className="g-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Col key={`placeholder-${index}`} xs={12} md={6} lg={4} xl={3}>
                <TransformationCard isLoading={true} />
              </Col>
            ))
          : transformations.map((transformation) => (
              <Col key={transformation.id} xs={12} md={6} lg={4} xl={3}>
                <TransformationCard
                  id={transformation.id}
                  name={transformation.name}
                  image={transformation.image}
                  description={transformation.description}
                  ki={transformation.ki}
                />
              </Col>
            ))}
      </Row>
    </Container>
  );
}

export default TransformationsGallery;
