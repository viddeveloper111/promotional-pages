
import React from 'react';
import '../style/MegaMenu.css';

function MegaMenu({ data }) {
  return (
    <div className="mega-menu">
      {Object.entries(data).map(([category, items], idx) => (
        <div className="mega-column" key={idx}>
          <h6 className="mega-title">{category}</h6>
          <ul className="list-unstyled">
            {items.map((item, i) => (
              <li key={i} className="mega-item">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MegaMenu;
