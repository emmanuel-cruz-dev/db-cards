import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import { useGetCharacters } from "../../hooks/useCharacters";
import PaginationItem from "./PaginationItem";

function CharactersGallery() {
  const [page, setPage] = useState(1);
  const { data: characters, isLoading, error } = useGetCharacters(page);

  if (error) return <p>Error al cargar los personajes: {error.message}</p>;

  if (isLoading && !characters) {
    return (
      <Container>
        <Row className="g-3 justify-content-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <Col key={`placeholder-${index}`} xs={12} md={6} lg={4} xl={4}>
              <CharacterCard isLoading={true} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  if (!characters || !characters.items) {
    return <p>No se han encontrado personajes</p>;
  }

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <Row className="g-3 justify-content-center">
        {characters.items.map((character) => (
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

      {characters.meta && (
        <PaginationItem
          currentPage={characters.meta.currentPage}
          totalPages={characters.meta.totalPages}
          onPageChange={handlePageChange}
          isLoading={isLoading}
        />
      )}
    </Container>
  );
}

export default CharactersGallery;
