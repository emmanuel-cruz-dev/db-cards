import { Container } from "react-bootstrap";
import TransformationsGallery from "../components/ui/TransformationsGallery";

function Transformations() {
  return (
    <Container className="py-4">
      <h1 className="display-5 fw-semibold pb-4 text-light">
        Transformaciones
      </h1>
      <TransformationsGallery />
    </Container>
  );
}

export default Transformations;
