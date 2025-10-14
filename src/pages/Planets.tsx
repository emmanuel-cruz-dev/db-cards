import { Container } from "react-bootstrap";
import PlanetsGallery from "../components/ui/PlanetsGallery";

function Planets() {
  return (
    <Container className="py-4">
      <h1 className="display-5 fw-semibold pb-4 text-light">Planetas</h1>
      <PlanetsGallery />
    </Container>
  );
}

export default Planets;
