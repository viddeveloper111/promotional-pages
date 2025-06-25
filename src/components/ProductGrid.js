import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const mockProducts = [
  {
    id: 1,
    name: 'Nike Air Force 1 Low',
    category: 'Men\'s Shoes',
    price: 9000.00,
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a8a998dd76ab/AIR+FORCE+1+%2707.png'
  },
  {
    id: 2,
    name: 'Nike Dunk Low Retro',
    category: 'Men\'s Shoes',
    price: 9500.00,
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7aef352-9c82-4e51-9337-af5ab09861c5/NIKE+DUNK+LOW.png'
  },
  {
    id: 3,
    name: 'Nike Air Max 90',
    category: 'Women\'s Shoes',
    price: 10500.00,
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2c110166-1932-4b30-9755-07b69a9ab0cf/WMNS+AIR+MAX+90.png'
  },
  {
    id: 4,
    name: 'Nike Blazer Mid \'77 Vintage',
    category: 'Unisex Shoes',
    price: 8800.00,
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/BLAZER+MID+%2777+VNTG.png'
  },
  {
    id: 5,
    name: 'Nike Tech Fleece Windrunner',
    category: 'Men\'s Hoodie',
    price: 10000.00,
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7deb0efc-4a47-4ac3-8abf-ae49b4f33b50/AS+M+NK+TCH+FLC+FZ+WR+HOODIE.png'
  },
  {
    id: 6,
    name: 'Nike Dri-FIT T-Shirt',
    category: 'Women\'s Top',
    price: 2900.00,
    imageUrl:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67d5e94f-f2c2-43ed-873e-cd66d137df34/AS+W+ACG+DF+BABY+LUNGS+SS.png'
  }
];

const ProductGrid = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Top Picks</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {mockProducts.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;