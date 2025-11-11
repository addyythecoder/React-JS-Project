import { useState } from "react";
import { Container, Navbar, Button, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaMapMarkerAlt,
  FaPlusCircle,
  FaSignInAlt,
  FaFilm,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'
const Header = () => {
  const [city, setCity] = useState("Surat");
  const cities = ["Ahmedabad", "Vadodara", "Surat", "Rajkot", "Gandhinagar"];

  return (
    <Navbar
      expand="lg"
      className="custom-navbar sticky-top shadow-sm"
    >
      <Container>
        {/* 🔹 Brand Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="brand-logo d-flex align-items-center fw-bold"
        >
          <FaFilm className="me-2" size={26} />
          BookMyShow
        </Navbar.Brand>

        {/* 🔹 Mobile Toggle */}
        <Navbar.Toggle aria-controls="main-navbar" className="border-0 text-light">
          <FaBars size={22} />
        </Navbar.Toggle>

        {/* 🔹 Collapsible Content */}
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="align-items-center gap-3 mt-3 mt-lg-0">

            {/* Location Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="outline-light"
                id="location-dropdown"
                className="city-dropdown"
              >
                <FaMapMarkerAlt className="me-2" />
                {city}
              </Dropdown.Toggle>

              <Dropdown.Menu className="city-menu">
                {cities.map((c) => (
                  <Dropdown.Item
                    key={c}
                    onClick={() => setCity(c)}
                    active={city === c}
                    className="city-item"
                  >
                    {c}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {/* Add Product */}
            <Button
              as={Link}
              to="/AddProduct"
              variant="outline-warning"
              className="add-btn"
            >
              <FaPlusCircle /> Add Movie  
            </Button>

            {/* Sign In */}
            <Button variant="danger" className="signin-btn">
              <FaSignInAlt /> Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
