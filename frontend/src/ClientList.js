import { useState } from "react";
import "./ClientList.css";
import { Link } from "react-router-dom";

import Navbar from "./components/navbar";
import {
  LucideCheckCircle,
  LucideTrendingUp,
  LucideTrendingDown,
  LucideAlertCircle,
} from "./components/icons";
import { mockClients } from "./data/mock-data";

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
            <span className="client-card-status-label">
              {getStatusLabel(client.status)}
            </span>
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
              className={`client-card-progress-fill ${getRiskClass(
                client.churnRisk
              )}`}
              style={{ width: `${client.churnRisk}%` }}
            ></div>
          </div>
        </div>
        <div className="client-card-recommendation">
          <p className="client-card-recommendation-text">
            {client.recommendation}
          </p>
        </div>
        <Link
          to={`/clients/${client.id}`}
          className="client-card-action-button"
        >
          View Details
        </Link>
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
          Real-time churn risk assessment and actionable insights for{" "}
          {mockClients.length} accounts
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
      <main>
        <Navbar />
        <ClientGrid />
      </main>
    </div>
  );
}
