import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="top-nav">
      <div className="top-nav-container">
        <div className="top-nav-brand">
          <img
            className="top-nav-logo"
            src="logo500.png"
            height={32}
            alt="Logo"
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="top-nav-title">PulseOps: Churn Risk Prediction</h1>
          </Link>
        </div>
        <div className="top-nav-actions">
          <button className="top-nav-button" title="Notifications">
            <svg
              className="lucide lucide-bell"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="top-nav-notification-badge"></span>
          </button>
          <button className="top-nav-button" title="Settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sun-icon lucide-sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </button>
          <div className="top-nav-avatar">JD</div>
        </div>
      </div>
    </nav>
  );
}
