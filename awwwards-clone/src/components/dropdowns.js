import React, { useState } from 'react';

const DropdownWithRadios = ({ title, options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown me-2">
      <button
        className="btn btn-light border dropdown-toggle"
        onClick={toggleDropdown}
        type="button"
      >
        {title}
      </button>

      {isOpen && (
        <div className="dropdown-menu show p-2 shadow" style={{ maxHeight: '260px', overflowY: 'auto' }}>
          {options.map((option, index) => (
            <label key={index} className="dropdown-item d-flex align-items-center gap-2">
              <input
                type="radio"
                className="form-check-input"
                name={title}
                value={option}
                checked={selected[title] === option}
                onChange={() => setSelected(prev => ({ ...prev, [title]: option }))}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default function DropdownGroup() {
  const [selectedFilters, setSelectedFilters] = useState({});

  const resetFilters = () => {
    setSelectedFilters({});
  };

  return (
    <div className="container-fluid bg-light rounded p-3 my-3 d-flex justify-content-between flex-wrap">
      <div className="d-flex flex-wrap gap-2 ms-2">
        <DropdownWithRadios
          title="Awards"
          options={[
            'Site of the Day', 'Sites of the Month', 'Sites of the Year', 'Developer',
            'Honorable Mention', 'Nominees', 'Typography Honors', 'No-code Honors',
            'E-commerce Honors', 'Product Honors', 'Portfolio Honors', 'Business & Services Honors'
          ]}
          selected={selectedFilters}
          setSelected={setSelectedFilters}
        />
        <DropdownWithRadios
          title="Category"
          options={[
            'Architecture', 'Art & Illustration', 'Business & Corporate', 'Culture & Education',
            'Design Agencies', 'E-Commerce', 'Events', 'Experimental', 'Fashion', 'Film & TV', 'Food & Drink'
          ]}
          selected={selectedFilters}
          setSelected={setSelectedFilters}
        />
        <DropdownWithRadios
          title="Tag"
          options={[
            '360', '3D', '404 Pages', 'About Page', 'Animation',
            'App Style', 'Big Background Images', 'Clean', 'Colorful',
            'Contact Pages', 'Contentful', 'Copy Design', 'Flat Design'
          ]}
          selected={selectedFilters}
          setSelected={setSelectedFilters}
        />
        <DropdownWithRadios
          title="Technology"
          options={[
            '11ty', 'AWS', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'After Effects',
            'Angular', 'Anime.js', 'BARBA.js', 'Blender', 'Bootstrap', 'CSS', 'Cables', 'Canvas API',
            'Cinema 4D', 'Contentful', 'Craft CMS', 'Curtains.js'
          ]}
          selected={selectedFilters}
          setSelected={setSelectedFilters}
        />
        <DropdownWithRadios
          title="Country"
          options={[
            'India', 'France', 'USA', 'Germany', 'China', 'South Korea',
            'Italy', 'Iran', 'UAE', 'Japan', 'Bhutan', 'Russia'
          ]}
          selected={selectedFilters}
          setSelected={setSelectedFilters}
        />
        <DropdownWithRadios
          title="Font"
          options={[
            'Adobe', 'Averta', 'Adieu', 'Ano', 'Antonio', 'Archia', 'Aventa', 'Almaria', 'Area Normal'
          ]}
          selected={selectedFilters}
          setSelected={setSelectedFilters}
        />
      </div>

      <button className="btn btn-outline-dark me-2 mt-2 mt-sm-0" onClick={resetFilters}>
        Reset Filter
      </button>
    </div>
  );
}
