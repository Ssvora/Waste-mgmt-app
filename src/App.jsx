import React, { useState, useMemo } from 'react';
import { CATEGORIES, WASTE_ITEMS } from './wasteData';
import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
import CategoryFilter from './components/CategoryFilter';
import WasteGuide from './components/WasteGuide';
import ImpactTracker from './components/ImpactTracker';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [decisions, setDecisions] = useState([]);
  const [activeTab, setActiveTab] = useState('search');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return WASTE_ITEMS.filter((item) => {
      const matchesName = item.name.toLowerCase().includes(q);
      const matchesKeyword = item.keywords.some((k) => k.includes(q));
      const matchesCategory = selectedCategory
        ? item.category === selectedCategory
        : true;
      return (matchesName || matchesKeyword) && matchesCategory;
    }).slice(0, 12);
  }, [query, selectedCategory]);

  const browseItems = useMemo(() => {
    if (query.trim()) return [];
    if (!selectedCategory) return [];
    return WASTE_ITEMS.filter((item) => item.category === selectedCategory);
  }, [query, selectedCategory]);

  const displayItems = query.trim() ? results : browseItems;

  const logDecision = (item) => {
    setDecisions((prev) => [
      { ...item, timestamp: Date.now() },
      ...prev.slice(0, 49),
    ]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="app-icon">♻️</span> WasteWise
          </h1>
          <p className="app-subtitle">
            Make smarter decisions about your waste
          </p>
        </div>
        <nav className="tab-nav">
          <button
            className={`tab-btn ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => setActiveTab('search')}
          >
            Search
          </button>
          <button
            className={`tab-btn ${activeTab === 'guide' ? 'active' : ''}`}
            onClick={() => setActiveTab('guide')}
          >
            Guide
          </button>
          <button
            className={`tab-btn ${activeTab === 'impact' ? 'active' : ''}`}
            onClick={() => setActiveTab('impact')}
          >
            My Impact
          </button>
        </nav>
      </header>

      <main className="app-main">
        {activeTab === 'search' && (
          <div className="search-tab">
            <SearchBar query={query} setQuery={setQuery} />
            <CategoryFilter
              categories={CATEGORIES}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />

            {displayItems.length > 0 && (
              <div className="results-grid">
                {displayItems.map((item, i) => (
                  <ResultCard
                    key={`${item.name}-${i}`}
                    item={item}
                    category={CATEGORIES[item.category]}
                    onLog={logDecision}
                  />
                ))}
              </div>
            )}

            {query.trim() && results.length === 0 && (
              <div className="no-results">
                <p className="no-results-icon">🔍</p>
                <p className="no-results-text">
                  No results found for "<strong>{query}</strong>"
                </p>
                <p className="no-results-hint">
                  Try searching for common items like "plastic bottle", "battery",
                  or "food scraps"
                </p>
              </div>
            )}

            {!query.trim() && !selectedCategory && (
              <div className="welcome-section">
                <h2>What do you want to throw away?</h2>
                <p>
                  Search for an item or browse by category to learn how to
                  dispose of it properly.
                </p>
                <div className="quick-search">
                  <p className="quick-label">Popular searches:</p>
                  <div className="quick-tags">
                    {['plastic bottle', 'battery', 'pizza box', 'phone', 'clothing'].map(
                      (tag) => (
                        <button
                          key={tag}
                          className="quick-tag"
                          onClick={() => setQuery(tag)}
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'guide' && <WasteGuide categories={CATEGORIES} />}
        {activeTab === 'impact' && (
          <ImpactTracker decisions={decisions} categories={CATEGORIES} />
        )}
      </main>

      <footer className="app-footer">
        <p>
          WasteWise — Helping you make better waste decisions, one item at a time.
        </p>
      </footer>
    </div>
  );
}

export default App;
