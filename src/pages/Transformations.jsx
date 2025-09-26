import React from "react";
import { Container } from "react-bootstrap";
import TransformationsGallery from "../components/ui/TransformationsGallery";

function Transformations() {
  return (
    <Container className="py-4">
      <h1 className="display-4 fw-semibold pb-4">Transformaciones</h1>
      <TransformationsGallery />
    </Container>
  );
}

export default Transformations;
