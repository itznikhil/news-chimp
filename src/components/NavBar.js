import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar({ endPoints }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
      <Container>
        <NavLink to="/" className="navbar-brand">
          NewsChimp
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {
              endPoints.map((endPoint, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <NavLink to={endPoint} className="nav-link">
                      {endPoint.slice(1).charAt(0).toUpperCase() +
                        endPoint.slice(2)}
                    </NavLink>
                  </li>
                );
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
