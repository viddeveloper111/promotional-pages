import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/ProductDetails.css"; // Styling for full page
import "../style/ProductList.css";    // Reuse same product-card styling

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => {
        const selected = data.find(p => p.id === parseInt(id));
        const similar = data
          .filter(p => p.id !== parseInt(id) && p.category === selected.category)
          .slice(0, 3); // get similar products from same category
        setProduct(selected);
        setSimilarProducts(similar);
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details-container">
      <div className="product-main">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
           <h2>{product.brand}</h2>      
           <p>{product.title}</p>       
          <p6>MRP ₹{product.price}</p6>
          <p>Discount: {product.discount}% Off</p>
          <p7>inclusive of all taxes</p7>

          <div className="product-buttons">
            <button className="btn-cart">
              <i className="fas fa-shopping-bag" style={{ color: "white", marginRight: "8px" }}></i>
              Add to Bag
            </button>
            <button className="btn-wishlist">♡ Wishlist</button>
          </div>
        </div>
      </div>

      <h3 className="sim">SIMILAR PRODUCTS</h3>
      <div className="similar-product">
        {similarProducts.map((item) => {
          const originalPrice = Math.round(item.price / (1 - item.discount / 100));
          return (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="similar-product-link"
            >
              <div className="similar-product-card">
                <img src={item.image} alt={item.title} />
                <h3>{item.brand}</h3>
                <p>{item.title}</p>
                <p1>Rs.{item.price}</p1>
                <p2><s>Rs.{originalPrice}</s> ({item.discount}% Off)</p2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProductDetails;
