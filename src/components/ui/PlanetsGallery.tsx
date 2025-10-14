import { Container, Col, Row } from "react-bootstrap";
import PlanetCard from "./PlanetCard";
import { useGetPlanets } from "../../hooks/usePlanets";
import PaginationItem from "./PaginationItem";
import { usePagination } from "../../hooks/usePagination";
import { handleRetry } from "../../utils/utils";
import ErrorMessage from "./ErrorMessage";

function PlanetsGallery() {
  const { currentPage, handlePageChange } = usePagination(1);
  const { data: planets, isLoading, error } = useGetPlanets(currentPage);

  if (error)
    return (
      <ErrorMessage error={error} entity="Planetas" onRetry={handleRetry} />
    );

  if (isLoading && !planets) {
    return (
      <Container>
        <article>
          <p>Cargando páginas...</p>
        </article>
        <Row className="g-3 justify-content-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <Col key={`placeholder-${index}`} xs={12} md={7} lg={6} xl={4}>
              <PlanetCard isLoading={true} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  if (!planets || !planets.items) {
    return <p>No se han encontrado planetas</p>;
  }

  return (
    <Container>
      {planets.meta && (
        <article className="text-center text-light mb-3">
          <p>
            Página <strong>{planets.meta.currentPage}</strong> de{" "}
            <strong>{planets.meta.totalPages}</strong>
          </p>
        </article>
      )}
      <Row className="g-3 justify-content-center">
        {planets?.items.map((planet) => (
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

      {planets.meta && (
        <PaginationItem
          currentPage={planets.meta.currentPage}
          totalPages={planets.meta.totalPages}
          onPageChange={handlePageChange}
          isLoading={isLoading}
        />
      )}
    </Container>
  );
}

export default PlanetsGallery;
