import { Container } from "react-bootstrap";
import { Github, ChevronUp } from "react-bootstrap-icons";
import { scrollToTop } from "../utils/utils";

function Footer() {
  return (
    <footer className="bg-black text-light text-center p-3">
      <Container>
        <ul className="d-flex justify-content-between align-items-center list-unstyled mb-0">
          <li>
            <a
              href="https://github.com/emmanuel-cruz-dev/db-cards"
              className="text-light text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="Ver repositorio en GitHub"
            >
              <Github className="text-light" size={26} />
            </a>
          </li>
          <li>
            <p className="mb-0 small">
              © 2025 DB Cards · Desarrollado por{" "}
              <a
                href="https://emmanuel-cruz.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
                aria-label="Emmanuel Cruz"
                title="Emmanuel Cruz Portfolio"
              >
                Emmanuel
              </a>
            </p>
          </li>
          <li>
            <button
              className="text-decoration-none bg-white d-flex align-items-center justify-content-center rounded-circle border-0"
              onClick={scrollToTop}
              title="Ir hacia arriba"
              aria-label="Ir hacia arriba"
              style={{
                padding: "0.275rem",
              }}
            >
              <ChevronUp className="text-black" size={22} />
            </button>
          </li>
        </ul>
      </Container>
    </footer>
  );
}

export default Footer;
