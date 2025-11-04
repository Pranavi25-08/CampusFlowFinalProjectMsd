import React from "react";

const Dashboard = () => (
  <div className="dashboard">
    <div className="dashboard-header">
      <h1>Welcome to CampusFlow</h1>
      <p>Your comprehensive campus management portal</p>
    </div>

    <div className="dashboard-stats">
      <div className="stat-card">
        <div className="stat-icon">📅</div>
        <div className="stat-content">
          <h3>Events</h3>
          <p>Manage campus events and activities</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">💼</div>
        <div className="stat-content">
          <h3>Placements</h3>
          <p>Track job opportunities and internships</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">💬</div>
        <div className="stat-content">
          <h3>Forum</h3>
          <p>Connect with fellow students</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">👤</div>
        <div className="stat-content">
          <h3>Profile</h3>
          <p>Manage your personal information</p>
        </div>
      </div>
    </div>

    <div className="dashboard-content">
      <div className="welcome-message">
        <h2>Get Started</h2>
        <p>Use the sidebar navigation to explore different features of the portal. Stay updated with campus activities, find placement opportunities, and connect with your peers.</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
