import React from "react";
import { ListGroup, Badge } from "react-bootstrap";

export default function Categories({ items = [], active, onSelect }) {
  return (
    <div className="mb-4 categories" style={{paddingTop: '20px', paddingLeft:20}}>
      <h5>Categories</h5>
      <ul>
        <li>
          Hamburger
        </li>
        <li>
          Talian Pizza
        </li>
        <li>
          Veg Soup
        </li>
        <li>
          Seafoods
        </li>
      </ul>
    </div>
  );
}
