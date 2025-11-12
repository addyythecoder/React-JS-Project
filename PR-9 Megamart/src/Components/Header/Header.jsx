import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const Header = () => {
  

  return (
    <>
      {/* === Top Navbar === */}
      <Navbar expand="lg" className="header-navbar">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/" className="brand">
            <img
              src="/src/image/mega-logo.png"
              alt="MegaMart Logo"
              className="mega-logo"
            />
          </Navbar.Brand>

          <div className="search-wrapper d-none d-md-flex align-items-center">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for products..."
              className="search-input"
            />
          </div>

          <Link to="/add" className="add-btn">
            <FaPlus size={13} /> &nbsp; Add Product
          </Link>
        </Container>
      </Navbar>

      {/* === Secondary Navigation === */}
      
    </>
  );
};

export default Header;
