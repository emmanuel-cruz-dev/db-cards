import { Container } from "react-bootstrap";
import CharactersGallery from "../components/ui/CharactersGallery";

function Home() {
  return (
    <Container className="py-4">
      <h1 className="display-5 fw-semibold pb-4 text-light">Personajes</h1>
      <CharactersGallery />
    </Container>
  );
}

export default Home;
