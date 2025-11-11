import { useEffect, useState } from "react";
import { Button, Container, Row, Form, Col, Card } from "react-bootstrap";
import { getStorageData, setStorageData } from "../../services/storage";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";

const EditProduct = () => {
  const initialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    genre: "",
    language: "",
    image: "",
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  // ✅ Load movie data for editing
  useEffect(() => {
    const data = getStorageData() || [];
    const record = data.find((product) => String(product.id) === String(id));
    if (record) {
      setInputForm(record);
    }
  }, [id]);

  // ✅ Validation logic (same as Add.jsx)
  const validationForm = (formData) => {
    const errors = {};
    if (!formData.title.trim()) errors.title = "Title is required";
    if (!formData.desc.trim()) errors.desc = "Description is required";
    if (!formData.price) errors.price = "Price is required";
    else if (Number(formData.price) <= 0) errors.price = "Price must be positive";
    if (!formData.genre) errors.genre = "Genre is required";
    if (!formData.language) errors.language = "Language is required";
    if (!formData.image.trim()) errors.image = "Image URL is required";
    return errors;
  };

  // ✅ Update movie
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validationForm(inputForm);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = getStorageData() || [];
    const updatedData = data.map((product) =>
      String(product.id) === String(inputForm.id) ? inputForm : product
    );

    setStorageData(updatedData);
    navigate("/"); // Go back to home
  };

  // ✅ Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  if (!inputForm.id) {
    return (
      <Container className="py-5 text-center text-light">
        <h3>⚠ Movie not found</h3>
      </Container>
    );
  }

  return (
    <Container className="edit-container py-5">
      <h2 className="text-center form-title mb-4">🎬 Edit Movie</h2>

      <Card className="p-4 shadow-lg rounded bg-dark text-light">
        <Form onSubmit={handleSubmit}>
          {[ 
            { label: "Title", name: "title", type: "text", placeholder: "Enter movie title" },
            { label: "Description", name: "desc", type: "text", placeholder: "Enter movie description" },
            { label: "Price", name: "price", type: "number", placeholder: "Enter movie price" }
          ].map((field) => (
            <Form.Group as={Row} className="mb-3" key={field.name}>
              <Form.Label column sm={3} className="text-white">
                {field.label}
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type={field.type}
                  value={inputForm[field.name]}
                  name={field.name}
                  onChange={handleChange}
                  isInvalid={!!errors[field.name]}
                  placeholder={field.placeholder}
                  className="form-input-custom"
                />
                <Form.Control.Feedback type="invalid">
                  {errors[field.name]}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          ))}

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3} className="text-white">
              Genre
            </Form.Label>
            <Col sm={7}>
              <Form.Select
                name="genre"
                value={inputForm.genre}
                onChange={handleChange}
                isInvalid={!!errors.genre}
                className="form-input-custom"
              >
                <option value="">Select Movie genre...</option>
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
              <Form.Control.Feedback type="invalid">
                {errors.genre}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3} className="text-white">
              Language
            </Form.Label>
            <Col sm={7}>
              <Form.Select
                name="language"
                value={inputForm.language}
                onChange={handleChange}
                isInvalid={!!errors.language}
                className="form-input-custom"
              >
                <option value="">Select Movie language...</option>
                <option value="Hindi">Hindi</option>
                <option value="Gujarati">Gujarati</option>
                <option value="English">English</option>
                <option value="Telugu">Telugu</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.language}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={3} className="text-white">
              Movie Poster URL
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="text"
                value={inputForm.image}
                name="image"
                onChange={handleChange}
                isInvalid={!!errors.image}
                placeholder="Enter movie image URL"
                className="form-input-custom"
              />
              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          {inputForm.image && (
            <div className="text-center mb-3">
              <img
                src={inputForm.image}
                alt="Preview"
                className="img-preview rounded shadow"
              />
            </div>
          )}

          <div className="text-center">
            <Button variant="warning" type="submit" size="lg" className="glow-btn">
              Save Changes
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default EditProduct;
