import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useCharacterById } from "../hooks/useCharacters";
import CharacterDetailsCard from "../components/ui/CharacterDetailsCard";
import TransformationCard from "../components/ui/TransformationCard";
import AlertMessage from "../components/ui/AlertMessage";
import ErrorMessage from "../components/ui/ErrorMessage";
import { handleRetry } from "../utils/utils";

function CharacterDetails() {
  const { id } = useParams();
  const idNumber = parseInt(id as string);
  const { data: character, isLoading, error } = useCharacterById(idNumber);

  if (error)
    return (
      <ErrorMessage error={error} entity="Personaje" onRetry={handleRetry} />
    );

  return (
    <Container className="py-4">
      <h1 className="display-5 fw-semibold pb-4 text-light">
        Detalles del Personaje
      </h1>
      {isLoading ? (
        <CharacterDetailsCard isLoading={true} />
      ) : (
        <>
          <CharacterDetailsCard character={character} />
          {!isLoading && character && character.transformations.length > 0 && (
            <>
              <h3 className="mb-4 text-center text-light">
                Transformaciones de {character.name}
              </h3>
              <Row>
                {character.transformations.map((transformation) => (
                  <Col
                    key={transformation.id}
                    className="mb-4 d-flex justify-content-center"
                  >
                    <TransformationCard
                      id={transformation.id}
                      name={transformation.name}
                      image={transformation.image}
                      ki={transformation.ki}
                    />
                  </Col>
                ))}
              </Row>
            </>
          )}

          {!isLoading &&
            character &&
            character.transformations.length === 0 && (
              <AlertMessage message="Este personaje no tiene transformaciones." />
            )}
        </>
      )}
    </Container>
  );
}

export default CharacterDetails;
