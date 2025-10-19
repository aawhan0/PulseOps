import "./ClientDetails.css";

import { useParams, Link } from "react-router-dom";
import { mockClients } from "./data/mock-data";
import {
  LucideCheckCircle,
  LucideTrendingUp,
  LucideTrendingDown,
  LucideAlertCircle,
  LucideArrowLeft,
} from "./components/icons";

function getStatusIcon(status) {
  switch (status) {
    case "excellent":
      return <LucideCheckCircle className="icon green" />;
    case "stable":
      return <LucideTrendingUp className="icon blue" />;
    case "warning":
      return <LucideTrendingDown className="icon yellow" />;
    case "critical":
      return <LucideAlertCircle className="icon red" />;
    default:
      return null;
  }
}

export default function ClientDetails() {
  const { id } = useParams();
  const client = mockClients.find((c) => String(c.id) === id);

  if (!client)
    return (
      <div className="client-details not-found">
        <p>Client not found.</p>
        <Link to="/clients" className="back-button">
          Go Back
        </Link>
      </div>
    );

  return (
    <div className="client-details">
      {/* Header */}
      <div className="header">
        <Link to="/clients" className="back-link">
          <LucideArrowLeft className="icon small" /> Back to Clients
        </Link>
        <div className="client-header">
          <div>
            <h1>{client.name}</h1>
            <p className="client-id">Client ID: {client.id}</p>
          </div>
          <div className={`status-badge ${client.status}`}>
            {getStatusIcon(client.status)}
            <span>{client.status}</span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="metrics">
        <div className="card">
          <h2>Health Score</h2>
          <div className="metric">
            <span>Overall Score</span>
            <span>{client.healthScore}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill green"
              style={{ width: `${client.healthScore}%` }}
            ></div>
          </div>
          <p className="metric-note">
            A higher score indicates strong engagement and satisfaction.
          </p>
        </div>

        <div className="card">
          <h2>Churn Risk</h2>
          <div className="metric">
            <span>Risk Probability</span>
            <span
              className={
                client.churnRisk > 70
                  ? "red"
                  : client.churnRisk > 40
                  ? "yellow"
                  : "green"
              }
            >
              {client.churnRisk}%
            </span>
          </div>
          <div className="progress-bar">
            <div
              className={`progress-fill ${
                client.churnRisk > 70
                  ? "red"
                  : client.churnRisk > 40
                  ? "yellow"
                  : "green"
              }`}
              style={{ width: `${client.churnRisk}%` }}
            ></div>
          </div>
          <p className="metric-note">
            Indicates the likelihood of the client discontinuing services.
          </p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="card recommendation">
        <h2>Recommendations</h2>
        <p>{client.recommendation}</p>
      </div>

      {/* Insights */}
      <div className="insights">
        <div className="card">
          <h3>Engagement Trend</h3>
          <p>User activity has been <strong>steady</strong> with slight growth last quarter.</p>
        </div>
        <div className="card">
          <h3>Support Tickets</h3>
          <p>Raised <strong>3 tickets</strong> this month — down 40% from last month.</p>
        </div>
        <div className="card">
          <h3>Revenue Retention</h3>
          <p>Projected renewal rate is <strong>92%</strong> based on recent payments.</p>
        </div>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Client Health Report — Powered by Your App
      </footer>
    </div>
  );
}
