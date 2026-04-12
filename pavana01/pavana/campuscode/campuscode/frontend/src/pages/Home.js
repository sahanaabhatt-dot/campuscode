import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="#ffa116"/>
              <path d="M26 11C22 9 16 9 12 13C8 17 8 23 12 27C16 31 22 31 26 29" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round"/>
              <path d="M16 16L13 20L16 24" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 16L25 20L22 24" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>CampusCode</span>
          </div>
          <div className="nav-menu">
            <a href="#home">Home</a>
            <a href="#explore">Explore</a>
            <a href="#problems">Problems</a>
            {isLoggedIn ? (
              <>
                <button onClick={() => navigate('/dashboard')} className="nav-btn">Dashboard</button>
                <button onClick={handleLogout} className="nav-btn-highlight">Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => navigate('/login')} className="nav-btn">Sign In</button>
                <button onClick={() => navigate('/register')} className="nav-btn-highlight">Get Started</button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Left Side - Dashboard Illustration */}
          <div className="hero-left">
            <div className="dashboard-card">
              <div className="card-header">
                <div className="color-tile tile-orange"></div>
                <div className="color-tile tile-blue"></div>
                <div className="color-tile tile-purple"></div>
              </div>
              <div className="card-body">
                <div className="stat-row">
                  <div className="stat-dot dot-green"></div>
                  <div className="stat-bar bar-long"></div>
                </div>
                <div className="stat-row">
                  <div className="stat-dot dot-yellow"></div>
                  <div className="stat-bar bar-medium"></div>
                </div>
                <div className="stat-row">
                  <div className="stat-dot dot-red"></div>
                  <div className="stat-bar bar-short"></div>
                </div>
              </div>
            </div>
            
            <div className="dashboard-card card-small">
              <div className="mini-chart">
                <div className="chart-bar" style={{height: '60%'}}></div>
                <div className="chart-bar" style={{height: '80%'}}></div>
                <div className="chart-bar" style={{height: '45%'}}></div>
                <div className="chart-bar" style={{height: '90%'}}></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="hero-right">
            <h1 className="hero-heading">
              Master Coding with<br />
              <span className="highlight">Syllabus-Based Practice</span>
            </h1>
            <p className="hero-subtitle">
              A comprehensive coding platform designed for BCA students. Practice problems aligned with your curriculum, track your progress, and excel in your exams.
            </p>
            <div className="button-group">
              <button className="cta-button" onClick={() => navigate(isLoggedIn ? '/dashboard' : '/register')}>
                {isLoggedIn ? 'Go to Dashboard' : 'Get Started'}
              </button>
              <button className="cta-button-secondary" onClick={() => navigate('/login')}>
                {isLoggedIn ? 'View Problems' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon icon-orange">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <h3 className="feature-title">Syllabus Based</h3>
            <p className="feature-desc">Problems organized by semester, subject, and unit matching your BCA curriculum</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h3 className="feature-title">Online Editor</h3>
            <p className="feature-desc">Write and run code directly in your browser with syntax highlighting</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 className="feature-title">Auto Validation</h3>
            <p className="feature-desc">Instant feedback with automated test cases to verify your solutions</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <h3 className="feature-title">Track Progress</h3>
            <p className="feature-desc">Monitor your performance and see your improvement over time</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
