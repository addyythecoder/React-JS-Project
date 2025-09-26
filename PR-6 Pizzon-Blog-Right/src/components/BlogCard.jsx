import React from "react";
import { Card, Button } from "react-bootstrap";

export default function BlogCard({ post }) {
  return (
    <Card className="mb-4 border-0 shadow-sm" style={{paddingTop: 70}}>
      <div className="blogimg1" > 
        <Card.Img variant="top" src={post.image} alt={post.title} style={{ objectFit: "cover", maxHeight: 420, }} />
      </div>
      <Card.Body>
        <div className="text-muted small">{new Date(post.date).toLocaleDateString("en-GB",
           { day: "2-digit", month: "short", year: "numeric" })}</div>
        <Card.Title className="mt-2 blogtitle" >{post.title}</Card.Title>
        <Card.Text className="text-secondary">{post.excerpt}</Card.Text>
        <Button variant="link" className="p-0 text-danger text-decoration-none" style={{ fontWeight: 600, fontSize: 22 }}>
          Read More <img src="/images/imgi_13_right-arrow-red.png" alt="arrow" style={{ width: 16, marginLeft: 6, }} />
        </Button>
      </Card.Body>
    </Card>
  );
}
