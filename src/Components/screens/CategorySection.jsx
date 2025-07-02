import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/CategorySection.css';

function CategorySection() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch('/categories.json');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('Failed to load categories:', error);
      }
    };

    loadCategories();
  }, []);

  return (
    <div className="category-wrapper">
      <h3 className="center">Shop By Category</h3>
      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => navigate(`/category/${cat.slug}`)} // ✅ Fixed this line
          >
            <img
              src={cat.image || '/images/default-category.jpg'}
              alt={cat.name}
              className="category-img"
            />
            <p className="cat-name">{cat.name}</p>
            <p className="cat-offer">Up to {cat.discount}% off</p>
            <p className="cat-shop">shop now</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
