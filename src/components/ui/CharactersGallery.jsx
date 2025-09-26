import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import { useGetCharacters } from "../../hooks/useCharacters";

function CharactersGallery() {
  const { data: characters, isLoading, error } = useGetCharacters();

  if (error) return <p>Error al cargar los personajes: {error.message}</p>;

  return (
    <Container>
      <Row className="g-3 justify-content-center">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Col key={`placeholder-${index}`} xs={12} md={6} lg={4} xl={4}>
                <CharacterCard isLoading={true} />
              </Col>
            ))
          : characters.items.map((character) => (
              <Col key={character.id} xs={12} md={6} lg={4} xl={4}>
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
    </Container>
  );
}

export default CharactersGallery;
