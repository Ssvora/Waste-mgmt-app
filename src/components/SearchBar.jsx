import React, { useRef } from 'react';
import './SearchBar.css';

function SearchBar({ query, setQuery }) {
  const inputRef = useRef(null);

  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder="Search for an item (e.g., plastic bottle, battery, food scraps)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />
      {query && (
        <button
          className="search-clear"
          onClick={() => {
            setQuery('');
            inputRef.current?.focus();
          }}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
