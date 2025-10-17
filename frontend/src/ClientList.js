import React, { useEffect, useState } from "react";
import axios from "axios";
import './ClientList.css';

function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchClients() {
      const resClients = await axios.get("http://localhost:8000/clients");
      const clientData = await Promise.all(
        resClients.data.map(async (client) => {
          const resScore = await axios.get(
            `http://localhost:8000/health_score/${client.id}`
          );
          return { ...client, health_score: resScore.data.health_score };
        })
      );
      setClients(clientData);
    }
    fetchClients();
  }, []);

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
