import React from 'react';
import './ImpactTracker.css';

function ImpactTracker({ decisions, categories }) {
  const stats = decisions.reduce((acc, d) => {
    acc[d.category] = (acc[d.category] || 0) + 1;
    return acc;
  }, {});

  const totalDecisions = decisions.length;
  const properlyDisposed = decisions.filter(
    (d) => d.category !== 'landfill'
  ).length;
  const diversionRate =
    totalDecisions > 0
      ? Math.round((properlyDisposed / totalDecisions) * 100)
      : 0;

  return (
    <div className="impact-tracker">
      <h2>My Impact</h2>
      <p className="impact-intro">
        Track your waste decisions and see your environmental impact grow.
      </p>

      <div className="impact-stats">
        <div className="stat-card">
          <span className="stat-number">{totalDecisions}</span>
          <span className="stat-label">Decisions Made</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{diversionRate}%</span>
          <span className="stat-label">Diverted from Landfill</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{properlyDisposed}</span>
          <span className="stat-label">Items Diverted</span>
        </div>
      </div>

      {totalDecisions > 0 ? (
        <>
          <div className="breakdown">
            <h3>Breakdown by Category</h3>
            <div className="breakdown-bars">
              {Object.entries(stats)
                .sort((a, b) => b[1] - a[1])
                .map(([catId, count]) => {
                  const cat = categories[catId];
                  const pct = Math.round((count / totalDecisions) * 100);
                  return (
                    <div key={catId} className="bar-row">
                      <span className="bar-label">
                        {cat.icon} {cat.label}
                      </span>
                      <div className="bar-track">
                        <div
                          className="bar-fill"
                          style={{
                            width: `${pct}%`,
                            background: cat.color,
                          }}
                        />
                      </div>
                      <span className="bar-count">{count}</span>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="recent-decisions">
            <h3>Recent Decisions</h3>
            <ul>
              {decisions.slice(0, 10).map((d, i) => {
                const cat = categories[d.category];
                return (
                  <li key={i} className="decision-item">
                    <span className="decision-icon">{cat.icon}</span>
                    <span className="decision-name">{d.name}</span>
                    <span
                      className="decision-badge"
                      style={{ background: cat.color }}
                    >
                      {cat.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <div className="empty-impact">
          <p className="empty-icon">📊</p>
          <p>No decisions logged yet.</p>
          <p className="empty-hint">
            Search for waste items and click "Log this decision" to start
            tracking your impact!
          </p>
        </div>
      )}
    </div>
  );
}

export default ImpactTracker;
