import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import { useGetCharacters } from "../../hooks/useCharacters";
import PaginationItem from "./PaginationItem";
import { usePagination } from "../../hooks/usePagination";
import ErrorMessage from "./ErrorMessage";
import { handleRetry } from "../../utils/utils";

function CharactersGallery() {
  const { currentPage, handlePageChange } = usePagination(1);
  const { data: characters, isLoading, error } = useGetCharacters(currentPage);

  if (error) {
    return (
      <ErrorMessage error={error} entity="Personajes" onRetry={handleRetry} />
    );
  }

  if (isLoading && !characters) {
    return (
      <Container>
        <article>
          <p>Cargando páginas...</p>
        </article>
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

  return (
    <Container>
      {characters.meta && (
        <article className="text-center text-light mb-3">
          <p>
            Página <strong>{characters.meta.currentPage}</strong> de{" "}
            <strong>{characters.meta.totalPages}</strong>
          </p>
        </article>
      )}
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
