import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import NotAvailable from "./not-available.png";

export default function NewsItem({article}) {
  return (
    <Card className="my-3">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          right: 0,
        }}
      >
        <Badge pill bg="danger">
          {article.rights}
        </Badge>
      </div>
      <Card.Img
        variant="top"
        src={article.media ? article.media : NotAvailable}
        onError={
          (e) => {
            e.target.onerror = null 
            e.target.src = NotAvailable
          }
        }
      />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Subtitle>
          By {article.author ? article.author : "Unknown"} on article.published_date
        </Card.Subtitle>
        <Card.Text>{article.summary}</Card.Text>
        <Button variant="primary" size="sm" href={article.link}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}
