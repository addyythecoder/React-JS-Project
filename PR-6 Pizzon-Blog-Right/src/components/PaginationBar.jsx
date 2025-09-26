// src/components/PaginationBar.jsx
import React from "react";
import { Pagination } from "react-bootstrap";

export default function PaginationBar({ total, perPage, current, onChange }) {
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const pages = Array.from({length: totalPages}, (_, i) => i + 1);
  return (
    <div className="d-flex justify-content-center my-4">
      <Pagination>
        <Pagination.Prev disabled={current <= 1} onClick={() => onChange(current - 1)} />
        {pages.map(p => (
          <Pagination.Item key={p} active={p === current} onClick={() => onChange(p)}>{p}</Pagination.Item>
        ))}
        <Pagination.Next disabled={current >= totalPages} onClick={() => onChange(current + 1)} />
      </Pagination>
    </div>
  );
}
