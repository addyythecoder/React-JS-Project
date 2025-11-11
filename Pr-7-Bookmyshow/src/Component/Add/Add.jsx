import { Button, Container, Row, Form, Col } from "react-bootstrap";
import { getStorageData, setStorageData } from "../../services/storage";
import { useNavigate } from "react-router-dom";
import generateUniqueId from "generate-unique-id";
import "./Add.css";
import { useState } from "react";

const AddProduct = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validationForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newProduct = {
      ...inputForm,
      id: generateUniqueId({ length: 5, useLetters: false }),
    };

    const oldData = getStorageData();
    setStorageData([...oldData, newProduct]);

    setInputForm(initialState);
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const validationForm = () => {
  const errors = {};
  if (!inputForm.title.trim()) errors.title = "Title is required";
  if (!inputForm.desc.trim()) errors.desc = "Description is required";
  if (!inputForm.price) errors.price = "Price is required";
  else if (Number(inputForm.price) <= 0)
    errors.price = "Price must be positive";
  if (!inputForm.genre) errors.genre = "Genre is required"; // ✅ FIXED
  if (!inputForm.language) errors.language = "Language is required"; // ✅ ADD THIS
  if (!inputForm.image.trim()) errors.image = "Image URL is required";
  return errors;
};


  return (
    <div className="add-bg">
      <Container className="form-container py-5">
        <h2 className="form-title text-center mb-4">🎬 Add New Movie</h2>
        <Form onSubmit={handleSubmit} className="p-4 shadow-lg rounded form-box">
          {[
            { label: "Title", name: "title", type: "text", placeholder: "Enter movie title" },
            { label: "Description", name: "desc", type: "text", placeholder: "Enter movie description" },
            { label: "Price", name: "price", type: "number", placeholder: "Enter movie price" },
          ].map((field) => (
            <Form.Group as={Row} className="mb-3" key={field.name}>
              <Form.Label column sm={3} className="form-label-custom">
                {field.label}
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type={field.type}
                  placeholder={field.placeholder}
                  value={inputForm[field.name]}
                  name={field.name}
                  onChange={handleChange}
                  isInvalid={!!errors[field.name]}
                  className="form-input-custom"
                />
                <Form.Control.Feedback type="invalid">
                  {errors[field.name]}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          ))}

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3} className="form-label-custom">
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
            <Form.Label column sm={3} className="form-label-custom">
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
                <option value="Hindi">Hindi </option>
                <option value="Gujarati">Gujarati </option>
                <option value="English">English </option>
                <option value="Telugu">Telugu</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.language}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={3} className="form-label-custom">
              Movie Poster URL
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="text"
                placeholder="Enter movie image URL"
                value={inputForm.image}
                name="image"
                onChange={handleChange}
                isInvalid={!!errors.image}
                className="form-input-custom"
              />
              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <div className="text-center">
            <Button variant="warning" size="lg" type="submit" className="glow-btn">
              Add Movie
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default AddProduct;
