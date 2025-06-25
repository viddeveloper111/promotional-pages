import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, category, price, imageUrl } = product;

  return (
    <Card className="product-card text-center h-100 shadow-sm">
      <Card.Img variant="top" src={imageUrl} alt={name} className="product-card-img" />
      <Card.Body>
        <Card.Title className="fw-bold mb-1">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
        <Card.Text className="fs-5 fw-bold">
          ₹{price.toFixed(2)}
        </Card.Text>
        <Button variant="dark" className="rounded-pill px-4">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;