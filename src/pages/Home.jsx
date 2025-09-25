import React from "react";
import { Container } from "react-bootstrap";
import CharactersGallery from "../components/ui/CharactersGallery";

function Home() {
  return (
    <Container className="py-4">
      <h1 className="display-4 fw-normal">Personajes</h1>
      <p className="lead">
        Aquí encontrarás una lista de personajes de la saga Dragon Ball.
      </p>
      <CharactersGallery />
    </Container>
  );
}

export default Home;
