import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import '../style/ProductList.css';

function ProductList() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
  fetch('/products.json')
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter((item) => item.category === category);
      setProducts(filtered);
    })
    .catch(err => console.error("Fetch error:", err));
}, [category]);

const sortProducts = (products) => {
    switch (sortType) {
      case 'price-low-high':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-high-low':
        return [...products].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(products);

  return (

    <div className="product-list-container">
      <div className="sidebar">
        <h5>FILTERS</h5>
        <hr />
        <div className="filter-section">
          <h6>Price</h6>
          <input type="range" className="form-range" min="500" max="5000" />
        </div>
        <div className="filter-section">
          <h6>Color</h6>
          <div><input type="checkbox" /> Blue</div>
          <div><input type="checkbox" /> Red</div>
          <div><input type="checkbox" /> Black</div>
        </div>
        <div className="filter-section">
          <h6>Brand</h6>
          <div><input type="checkbox" /> Nike</div>
          <div><input type="checkbox" /> Adidas</div>
          <div><input type="checkbox" /> Puma</div>
        </div>
        <div className="filter-section">
          <h6>Discount</h6>
          <div><input type="checkbox" /> 10% or more</div>
          <div><input type="checkbox" /> 30% or more</div>
          <div><input type="checkbox" /> 50% or more</div>
        </div>
      </div>

      <div className="main-content">
        <div className="sortbar">
          <label>Sort By: </label>
          <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="default">Recommended</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>
  <div className="product-grid">
    {products.map((item) => {
      const originalPrice = Math.round(item.price / (1 - item.discount / 100));
      return (
        <Link to={`/product/${item.id}`} key={item.id} className="product-card-link">
          <div className="product-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.brand}</h3>
            <p>{item.title}</p>
            <p1>Rs.{item.price}</p1>
            <p2><s>Rs.{originalPrice}</s>({item.discount}% Off) <br /></p2>
          </div>
        </Link>
      );
    })}
  </div>
</div>
</div>
  );

}

export default ProductList;
