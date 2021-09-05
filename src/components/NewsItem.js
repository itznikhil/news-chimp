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
          {article.source.name}
        </Badge>
      </div>
      <Card.Img
        variant="top"
        src={article.urlToImage ? article.urlToImage : NotAvailable}
      />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Subtitle>
          By {article.author ? article.author : "Unknown"} on{" "}
          {new Date(article.publishedAt).toGMTString()}
        </Card.Subtitle>
        <Card.Text>{article.description}</Card.Text>
        <Button variant="primary" size="sm" href={article.url}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}
