# PulseOps: Client Health AI Dashboard

## Overview
PulseOps is a full-stack web app that visualizes client health scores, identifies churn risk, and provides AI-powered recommendations to help customer success teams take action.

## Features
- Backend API to serve clients, calculate health scores, and generate recommendations.
- React frontend dashboard that displays client data with alerts and recommendations.
- Dark mode, polished UI with responsive and user-friendly design.
- Real-time data integration between backend and frontend.

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js and npm

### Backend Setup
1. Navigate to the backend directory:

cd backend

text

2. Install Python dependencies:
pip install fastapi uvicorn

text

3. Run the backend server:
uvicorn main:app --reload

text

4. Backend runs on: `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
cd frontend

text

2. Install frontend dependencies:
npm install

text

3. Start the React app:
npm start

text

4. Access the dashboard at: `http://localhost:3000`

## API Reference

- `GET /clients`  
Returns a list of clients with basic details.

- `GET /health_score/{client_id}`  
Returns the calculated health score for a specified client.

- `GET /recommendation/{client_id}`  
Returns an action recommendation based on client health and churn risk.

## Demo

Include screenshots or links to a demo video here to showcase your app visually.

---

Thank you for exploring PulseOps! Contributions, issues, and feature requests are welcome.