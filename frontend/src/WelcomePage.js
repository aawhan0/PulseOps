import "./WelcomePage.css";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1>Welcome to PulseOps</h1>
        <p>
          Get SOTA real-time churn risk assessment, health scores and actionable
          recommendations for all your clients in one clean dashboard.
        </p>
        <Link to="/clients" className="btn-primary">
          View Dashboard
        </Link>
      </div>

      <div className="welcome-illustration">
        {/* Placeholder for image/illustration */}
        {/* <svg
          width="400"
          height="300"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="300" rx="20" fill="#2c2c2c" />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            fill="#6b7280"
            fontSize="24"
            fontFamily="Inter, sans-serif"
            dy=".3em"
          >
            Dashboard Preview
          </text>
        </svg> */}
        <img src="demo.png" alt="sample" height={512}></img>
      </div>
    </div>
  );
}