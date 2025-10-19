import React, { useEffect, useState } from "react";
import axios from "axios";
import './ClientList.css';

function ClientList() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchClients() {
      try {
        setLoading(true);
        setError(null);

        const resClients = await axios.get("http://localhost:8000/clients");
        const clientData = await Promise.all(
          resClients.data.map(async (client) => {
            const resScore = await axios.get(
              `http://localhost:8000/health_score/${client.id}`
            );
            const resRec = await axios.get(
              `http://localhost:8000/recommendation/${client.id}`
            );
            return {
              ...client,
              health_score: resScore.data.health_score,
              recommendation: resRec.data.recommendation
            };
        })
      );
        setClients(clientData);
      } catch (err) {
        setError("Failed to fetch client data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchClients();
  }, []);

  if (loading) {
    return <div className="loading">Loading client data...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-title">Client Health Dashboard</div>
      <div className="cards-holder">
        {clients.map((client) => (
          <div
            key={client.id}
            className={`client-card ${
              client.churn_risk > 0.7 || client.health_score < 0 ? 'alert' : 'healthy'
            }`}
          >
            <div className="client-name">{client.name}</div>
            <div className="client-detail">Health Score: {client.health_score}</div>
            <div className="client-recommendation">Recommendation: {client.recommendation}</div>
            {client.churn_risk > 0.7 && (
              <div className="alert-message">High Churn Risk Alert!</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientList;
