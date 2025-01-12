import "./udash.css"; // Make sure your CSS file matches the layout and styling
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


const Adashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="dashboard-header">
        <h1>Student Medical System - Faculty of Computing</h1>
        <div className="header-actions">
          <span>English (US)</span>
          <div className="profile-section">
            {/*<p>Good Morning</p>*/}
            <p>{currentTime.toLocaleDateString()} | {currentTime.toLocaleTimeString()}</p>
          </div>
          <img src="/path/to/profile-icon.png" alt="Profile Icon" className="profile-icon" />
        </div>
      </header>
{/*<h3>User Dashboard</h3>*/}      {/* Sidebar */}
      <aside className="sidebar">
      <ul>
       <li>User Dashboard</li>
  <li>
    <Link to="/overview">Overview</Link>
  </li>
  <li>
    <Link to="/pending">
      Pending Applications <span className="badge">5</span>
    </Link>
  </li>
  <li>
    <Link to="/approved">
      Approved Applications <span className="badge">10</span>
    </Link>
  </li>
  <li>
    <Link to="/rejected">
      Rejected Applications <span className="badge">2</span>
    </Link>
  </li>
  <li>
    <Link to="/records">
      Student Records <span className="badge">50</span>
    </Link>
  </li>
  <li>
    <Link to="/reports">Reports and Analysis</Link>
  </li>
  <li>
    <Link to="/settings">Settings</Link>
  </li>
</ul>

      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Statistics Cards */}
        <h3>Dashboard</h3>
        <section className="statistics-cards">
          <div className="stat-card">
            <p>Total Applications Submitted</p>
            <h2>15</h2>
          </div>
          <div className="stat-card">
            <p>Pending Applications</p>
            <h2>5</h2>
          </div>
          <div className="stat-card">
            <p>Approved Applications</p>
            <h2>10</h2>
          </div>
          <div className="stat-card">
            <p>Rejected Applications</p>
            <h2>2</h2>
          </div>
        </section>

        {/* Charts Section */}
        <section className="charts-section">
          <div className="chart">
            <h3>No. of Applications</h3>
            <img src="/path/to/bar-chart.png" alt="Bar Chart" />
          </div>
          <div className="chart">
            <h3>No. of Applications (Monthly)</h3>
            <img src="/path/to/line-chart.png" alt="Line Chart" />
          </div>
        </section>

        {/* Applications Table */}
        <section className="applications-table">
          <h3>Recent Applications</h3>
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Department</th>
                <th>Date Applied</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20APCXXXX</td>
                <td>A.B.C. Perera</td>
                <td>IS</td>
                <td>2024/09/10</td>
                <td className="status-approved">Approved</td>
              </tr>
              <tr>
                <td>20APCXXXX</td>
                <td>A.B.C. Perera</td>
                <td>DS</td>
                <td>2024/09/10</td>
                <td className="status-pending">Pending</td>
              </tr>
              <tr>
                <td>20APCXXXX</td>
                <td>A.B.C. Perera</td>
                <td>SE</td>
                <td>2024/09/10</td>
                <td className="status-rejected">Rejected</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>© 2024 copyrights</p>
      </footer>
    </div>
  );
};

export default Adashboard;
