import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CharacterCard from "./CharacterCard";

function CharactersGallery() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/characters`
      );
      const data = await response.json();
      setCharacters(data.items);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching characters:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Container>
      <Row className="g-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Col key={`placeholder-${index}`} xs={12} md={6} lg={4} xl={4}>
                <CharacterCard isLoading={true} />
              </Col>
            ))
          : characters.map((character) => (
              <Col key={character.id} xs={12} md={6} lg={4} xl={4}>
                <CharacterCard
                  id={character.id}
                  name={character.name}
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
