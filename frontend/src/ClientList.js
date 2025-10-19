import React, { useState } from "react";
import "./ClientList.css";

// SVG icon components for inline SVG use, matching your icons and colors
const LucideCheckCircle = () => (
  <svg className="lucide lucide-check-circle" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
const LucideTrendingUp = () => (
  <svg className="lucide lucide-trending-up" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 17"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);
const LucideTrendingDown = () => (
  <svg className="lucide lucide-trending-down" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
    <polyline points="17 18 23 18 23 12"></polyline>
  </svg>
);
const LucideAlertCircle = () => (
  <svg className="lucide lucide-alert-circle" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

// Mock data
const mockClients = [
  {
    id: '1',
    name: 'Acme Corporation',
    healthScore: 78,
    churnRisk: 22,
    recommendation: 'Schedule quarterly business review to strengthen relationship',
    status: 'stable',
  },
  {
    id: '2',
    name: 'TechFlow Industries',
    healthScore: 45,
    churnRisk: 78,
    recommendation: 'Immediate outreach required. Offer dedicated support package',
    status: 'critical',
  },
  {
    id: '3',
    name: 'Global Solutions Ltd',
    healthScore: 92,
    churnRisk: 5,
    recommendation: 'Excellent engagement. Consider for case study or testimonial',
    status: 'excellent',
  },
  {
    id: '4',
    name: 'Innovation Labs',
    healthScore: 62,
    churnRisk: 48,
    recommendation: 'Increase feature adoption through targeted training sessions',
    status: 'warning',
  },
  {
    id: '5',
    name: 'Enterprise Systems',
    healthScore: 85,
    churnRisk: 12,
    recommendation: 'Maintain current engagement level with monthly check-ins',
    status: 'stable',
  },
  {
    id: '6',
    name: 'Digital Ventures',
    healthScore: 38,
    churnRisk: 85,
    recommendation: 'Critical intervention needed. Escalate to account executive',
    status: 'critical',
  },
  {
    id: '7',
    name: 'CloudFirst Partners',
    healthScore: 71,
    churnRisk: 31,
    recommendation: 'Introduce premium features to increase stickiness',
    status: 'stable',
  },
  {
    id: '8',
    name: 'NextGen Consulting',
    healthScore: 88,
    churnRisk: 8,
    recommendation: 'Upsell opportunity. Present advanced tier options',
    status: 'excellent',
  },
];

// Helper functions
function getStatusIcon(status) {
  switch (status) {
    case "excellent":
      return <LucideCheckCircle />;
    case "stable":
      return <LucideTrendingUp />;
    case "warning":
      return <LucideTrendingDown />;
    case "critical":
      return <LucideAlertCircle />;
    default:
      return null;
  }
}
function getStatusLabel(status) {
  const labels = {
    excellent: "Excellent",
    stable: "Stable",
    warning: "At Risk",
    critical: "Critical",
  };
  return labels[status] || "Unknown";
}
function getRiskClass(risk) {
  if (risk > 70) return "risk-high";
  if (risk > 40) return "risk-medium";
  return "risk-low";
}

// Top Navigation
function TopNavigation() {
  return (
    <nav className="top-nav">
      <div className="top-nav-container">
        <div className="top-nav-brand">
          <div className="top-nav-logo">CR</div>
          <h1 className="top-nav-title">Churn Risk</h1>
        </div>
        <div className="top-nav-actions">
          <button className="top-nav-button" title="Notifications">
            <svg className="lucide lucide-bell" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="top-nav-notification-badge"></span>
          </button>
          <button className="top-nav-button" title="Settings">
            <svg className="lucide lucide-settings" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"></path>
            </svg>
          </button>
          <div className="top-nav-avatar">JD</div>
        </div>
      </div>
    </nav>
  );
}

// Client Card
function ClientCard({ client }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="client-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`client-card-gradient ${client.status}`}></div>
      <div className="client-card-content">
        <div className="client-card-header">
          <div style={{ flex: 1 }}>
            <h3 className="client-card-name">{client.name}</h3>
          </div>
          <div className="client-card-status">
            {getStatusIcon(client.status)}
            <span className="client-card-status-label">{getStatusLabel(client.status)}</span>
          </div>
        </div>
        <div className="client-card-metric">
          <div className="client-card-metric-header">
            <span className="client-card-metric-label">Health Score</span>
            <span className="client-card-metric-value">
              {client.healthScore}
            </span>
          </div>
          <div className="client-card-progress-bar">
            <div
              className="client-card-progress-fill"
              style={{ width: `${client.healthScore}%` }}
            ></div>
          </div>
        </div>
        <div className="client-card-metric">
          <div className="client-card-metric-header">
            <span className="client-card-metric-label">Churn Risk</span>
            <span className="client-card-metric-value">
              {client.churnRisk}%
            </span>
          </div>
          <div className="client-card-progress-bar">
            <div
              className={`client-card-progress-fill ${getRiskClass(client.churnRisk)}`}
              style={{ width: `${client.churnRisk}%` }}
            ></div>
          </div>
        </div>
        <div className="client-card-recommendation">
          <p className="client-card-recommendation-text">{client.recommendation}</p>
        </div>
        <button
          className={"client-card-action-button" + (hovered ? "" : " hidden")}
          onClick={() => window.alert("View details for " + client.name)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

// Main grid
function ClientGrid() {
  return (
    <div className="client-grid-container">
      <div className="client-grid-header">
        <h2 className="client-grid-title">Customer Portfolio</h2>
        <p className="client-grid-subtitle">
          Real-time churn risk assessment and actionable insights for {mockClients.length} accounts
        </p>
      </div>
      <div className="client-grid">
        {mockClients.map((c) => (
          <ClientCard key={c.id} client={c} />
        ))}
      </div>
    </div>
  );
}

// Main export
export default function ClientList() {
  return (
    <div>
      <TopNavigation />
      <main>
        <ClientGrid />
      </main>
    </div>
  );
}
