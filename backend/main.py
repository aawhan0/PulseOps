from fastapi import FastAPI
import uvicorn

app = FastAPI()

# Mock client data
clients = [
    {"id": 0, "name": "Acme Corp", "revenue": 10000, "cost": 7000, "sentiment": 0.7, "tickets": 5, "churn_risk": 0.2},
    {"id": 1, "name": "Beta Ltd", "revenue": 4000, "cost": 4200, "sentiment": 0.3, "tickets": 12, "churn_risk": 0.8},
    {"id": 2, "name": "Gamma Inc", "revenue": 15000, "cost": 8000, "sentiment": 0.9, "tickets": 1, "churn_risk": 0.1},
]

@app.get("/clients")
def get_clients():
    return clients

@app.get("/health_score/{client_id}")
def get_health_score(client_id: int):
    client = next((c for c in clients if c["id"] == client_id), None)
    if not client:
        return {"error": "Client not found"}
    # Simple health score calculation
    profit_ratio = (client["revenue"] - client["cost"]) / max(client["revenue"], 1)
    score = 0.5 * profit_ratio + 0.3 * client["sentiment"] - 0.2 * client["churn_risk"]
    return {"name": client["name"], "health_score": round(score, 2)}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
