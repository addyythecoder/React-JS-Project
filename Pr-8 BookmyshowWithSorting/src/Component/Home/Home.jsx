import { useEffect, useState } from "react";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import { getStorageData, setStorageData } from "../../services/storage";
import { useNavigate, useLocation } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Fetch movies whenever we return from Add page
  useEffect(() => {
    const data = getStorageData();
    setProducts(data);
  }, [location.state?.updated]);

  // ✅ Delete a movie
  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    setStorageData(updated);
  };

  // ✅ Edit a movie
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  // ✅ Filter + Sort logic
  const filteredProducts = products
    .filter((p) => {
      const matchesSearch =
        p.title?.toLowerCase().includes(search.toLowerCase()) ||
        p.genre?.toLowerCase().includes(search.toLowerCase());
      const matchesGenre = !filterGenre || p.genre === filterGenre;
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "priceLowHigh":
          return a.price - b.price;
        case "priceHighLow":
          return b.price - a.price;
        case "titleAZ":
          return a.title.localeCompare(b.title);
        case "titleZA":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  return (
    <div className="home-bg">
      <Container className="py-4">
        <h2 className="text-center fw-bold neon-title mb-4">🎥 Movie Store</h2>

        {/* 🔍 Search, Filter, Sort */}
        <Row className="g-3 justify-content-center mb-4">
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Search by title or genre..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-box"
            />
          </Col>
          <Col md={3}>
            <Form.Select
              value={filterGenre}
              onChange={(e) => setFilterGenre(e.target.value)}
              className="filter-select"
            >
              <option value="">All Genres</option>
              <option value="Drama">Drama</option>
              <option value="Romantic">Romantic</option>
              <option value="Comedy">Comedy</option>
              <option value="Action">Action</option>
              <option value="Thriller">Thriller</option>
              <option value="Family">Family</option>
              <option value="Adventure">Adventure</option>
              <option value="Crime">Crime</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Musical">Musical</option>
              <option value="Mystery">Mystery</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Social">Social</option>
              <option value="Supernatural">Supernatural</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="filter-select"
            >
              <option value="">Sort By</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="titleAZ">Title: A-Z</option>
              <option value="titleZA">Title: Z-A</option>
            </Form.Select>
          </Col>
        </Row>

        {/* 🎞 Movie Cards */}
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Col md={3} sm={6} className="mb-4" key={product.id}>
                <Card className="movie-card">
                  <div className="card-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      className="movie-img"
                      alt={product.title}
                    />
                    <div className="overlay">
                      <span className="overlay-text">{product.title}</span>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="movie-title">
                      {product.title}
                    </Card.Title>
                    <Card.Text className="movie-desc">
                      {product.desc}
                    </Card.Text>
                    <div className="movie-meta">
                      <p>
                        <b>Price:</b> ₹{product.price}
                      </p>
                      <p>
                        <b>Genre:</b> {product.genre}
                      </p>
                      <p>
                        <b>Language:</b> {product.language}
                      </p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <Button
                        variant="outline-warning"
                        size="sm"
                        className="glow-btn"
                        onClick={() => handleEdit(product.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="glow-btn-del"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <h5 className="text-center text-muted mt-4">
              No movies found...!!
            </h5>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
