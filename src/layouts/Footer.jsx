import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center p-3">
      <Container>
        <p className="mb-0">
          2025 · Derechos Reservados | Versión: 1.0 ·{" "}
          <a
            href="https://github.com/emmanuel-cruz-dev/db-cards"
            className="text-light text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
