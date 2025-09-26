// src/components/Sidebar/Tags.jsx
import React from "react";
import { Badge } from "react-bootstrap";

export default function Tags({ tags = [] }) {
  return (
    <div className="mb-4" style={{paddingTop: '20px', paddingLeft:20}}>
      <h4 style={{paddingBottom:30}}>Tags Cloud</h4 >
      <div className="d-flex flex-wrap gap-2">
        {tags.map(t => <Badge key={t} bg="light" text="dark" className="border">{t}</Badge>)}
      </div>
    </div>
  );
}
  