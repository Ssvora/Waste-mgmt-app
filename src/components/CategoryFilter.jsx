import React from 'react';
import './CategoryFilter.css';

function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="category-filter">
      <button
        className={`filter-chip ${selected === null ? 'active' : ''}`}
        onClick={() => onSelect(null)}
      >
        All
      </button>
      {Object.values(categories).map((cat) => (
        <button
          key={cat.id}
          className={`filter-chip ${selected === cat.id ? 'active' : ''}`}
          onClick={() => onSelect(selected === cat.id ? null : cat.id)}
          style={
            selected === cat.id
              ? { background: cat.color, borderColor: cat.color, color: 'white' }
              : {}
          }
        >
          <span className="chip-icon">{cat.icon}</span> {cat.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
