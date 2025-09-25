import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="/db-icon.svg"
            width="28"
            height="28"
            className="d-inline-block align-text-top"
          />{" "}
          Dragon Ball Cards
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Personajes
            </Nav.Link>
            <Nav.Link as={Link} to="/planets">
              Planetas
            </Nav.Link>
            <Nav.Link as={Link} to="/transformations">
              Transformaciones
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
