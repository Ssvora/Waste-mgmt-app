import React from 'react';
import { WASTE_ITEMS } from '../wasteData';
import './WasteGuide.css';

function WasteGuide({ categories }) {
  return (
    <div className="waste-guide">
      <h2>Waste Disposal Guide</h2>
      <p className="guide-intro">
        Learn the basics of waste sorting and make a positive environmental impact.
      </p>

      <div className="guide-cards">
        {Object.values(categories).map((cat) => {
          const items = WASTE_ITEMS.filter((i) => i.category === cat.id);
          return (
            <div key={cat.id} className="guide-card">
              <div
                className="guide-card-header"
                style={{ background: cat.color }}
              >
                <span className="guide-icon">{cat.icon}</span>
                <h3>{cat.label}</h3>
              </div>
              <p className="guide-desc">{cat.description}</p>
              <div className="guide-examples">
                <strong>Common items:</strong>
                <ul>
                  {items.slice(0, 5).map((item) => (
                    <li key={item.name}>{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="guide-tips">
        <h3>General Tips</h3>
        <ul>
          <li><strong>When in doubt, find out</strong> — check your local municipality's website for specific rules.</li>
          <li><strong>Rinse containers</strong> — a quick rinse prevents contamination of recyclables.</li>
          <li><strong>Reduce first</strong> — the best waste is waste that's never created.</li>
          <li><strong>Buy in bulk</strong> — less packaging means less waste.</li>
          <li><strong>Refuse single-use</strong> — bring reusable bags, bottles, and containers.</li>
          <li><strong>Learn the numbers</strong> — plastic resin codes (#1-#7) tell you what's recyclable locally.</li>
        </ul>
      </div>
    </div>
  );
}

export default WasteGuide;
