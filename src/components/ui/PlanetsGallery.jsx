import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import PlanetCard from "./PlanetCard";
import { useGetPlanets } from "../../hooks/usePlanets";

function PlanetsGallery() {
  const { data: planets, isLoading, error } = useGetPlanets();

  if (error) return <p>Error al cargar los planetas: {error.message}</p>;

  return (
    <Container>
      <Row className="g-3 justify-content-center">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Col key={`placeholder-${index}`} xs={12} md={7} lg={6} xl={4}>
                <PlanetCard isLoading={true} />
              </Col>
            ))
          : planets.items.map((planet) => (
              <Col key={planet.id} xs={12} md={7} lg={6} xl={4}>
                <PlanetCard
                  id={planet.id}
                  name={planet.name}
                  image={planet.image}
                  description={planet.description}
                  isDestroyed={planet.isDestroyed}
                />
              </Col>
            ))}
      </Row>
    </Container>
  );
}

export default PlanetsGallery;
