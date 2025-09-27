import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useTransformationById } from "../hooks/useTransformations";
import TransformationDetailsCard from "../components/ui/TransformationDetailsCard";
import AlertMessage from "../components/ui/AlertMessage";
import CharacterCard from "../components/ui/CharacterCard";

function TransformationDetails() {
  const { id } = useParams();
  const { data: transformation, isLoading, error } = useTransformationById(id);

  if (error) return <p>Error loading transformation: {error.message}</p>;

  return (
    <Container className="py-4">
      <h1 className="display-5 fw-semibold pb-4 text-light">
        Detalles de la Transformación
      </h1>
      {isLoading ? (
        <TransformationDetailsCard isLoading={true} />
      ) : (
        <>
          <TransformationDetailsCard transformation={transformation} />
          {!isLoading &&
            transformation &&
            transformation.character !== null && (
              <>
                <h3 className="mb-4 text-center text-light">
                  Personaje de {transformation.name}
                </h3>
                <span>{transformation.character.name}</span>
                <CharacterCard
                  id={transformation.character.id}
                  name={transformation.character.name}
                  race={transformation.character.race}
                  description={transformation.character.description}
                  image={transformation.character.image}
                />
              </>
            )}

          {!isLoading &&
            transformation &&
            transformation.character === null && (
              <AlertMessage message="Esta transformación no tiene personajes." />
            )}
        </>
      )}
    </Container>
  );
}

export default TransformationDetails;
