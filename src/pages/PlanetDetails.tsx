import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { usePlanetById } from "../hooks/usePlanets";
import PlanetDetailsCard from "../components/ui/PlanetDetailsCard";
import CharacterCard from "../components/ui/CharacterCard";
import AlertMessage from "../components/ui/AlertMessage";

function PlanetDetails() {
  const { id } = useParams();
  const { data: planet, isLoading, error } = usePlanetById(id);

  if (error) return <p>Error loading planet: {error.message}</p>;

  return (
    <Container className="py-4">
      <h1 className="display-5 fw-semibold pb-4 text-light">
        Detalles del Planeta
      </h1>
      {isLoading ? (
        <PlanetDetailsCard isLoading={true} />
      ) : (
        <>
          <PlanetDetailsCard planet={planet} />
          {!isLoading && planet && planet.characters.length > 0 && (
            <>
              <h3 className="mb-4 text-center text-light">
                Personajes pertenecientes a {planet.name}
              </h3>
              <Row>
                {planet.characters.map((character) => (
                  <Col
                    key={character.id}
                    className="mb-4 d-flex justify-content-center"
                  >
                    <CharacterCard
                      id={character.id}
                      name={character.name}
                      race={character.race}
                      description={character.description}
                      image={character.image}
                    />
                  </Col>
                ))}
              </Row>
            </>
          )}

          {!isLoading && planet && planet.characters.length === 0 && (
            <AlertMessage message="Este planeta no tiene habitantes registrados." />
          )}
        </>
      )}
    </Container>
  );
}

export default PlanetDetails;
