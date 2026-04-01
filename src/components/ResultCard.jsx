import React, { useState } from 'react';
import './ResultCard.css';

function ResultCard({ item, category, onLog }) {
  const [logged, setLogged] = useState(false);

  const handleLog = () => {
    onLog(item);
    setLogged(true);
    setTimeout(() => setLogged(false), 2000);
  };

  return (
    <div className="result-card" style={{ borderLeftColor: category.color }}>
      <div className="card-header">
        <span className="card-icon">{category.icon}</span>
        <div>
          <h3 className="card-title">{item.name}</h3>
          <span
            className="card-badge"
            style={{ background: category.color }}
          >
            {category.label}
          </span>
        </div>
      </div>
      <p className="card-description">{category.description}</p>
      <div className="card-tip">
        <span className="tip-icon">💡</span>
        <p>{item.tip}</p>
      </div>
      <button
        className={`log-btn ${logged ? 'logged' : ''}`}
        onClick={handleLog}
        disabled={logged}
      >
        {logged ? '✓ Logged!' : 'Log this decision'}
      </button>
    </div>
  );
}

export default ResultCard;
