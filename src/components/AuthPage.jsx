import React, { useState, useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import './AuthPage.css';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab === 'signup') {
      setActiveTab('signup');
    }
  }, []);

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <div className="logo-icon">CF</div>
            <div className="logo-text">CampusFlow</div>
          </div>
          <h2>Welcome to CampusFlow</h2>
          <p className="subtitle">Your campus management platform</p>
        </div>
        <div className="tab-buttons">
          <button onClick={() => setActiveTab('login')} className={activeTab === 'login' ? 'active' : ''}>Login</button>
          <button onClick={() => setActiveTab('signup')} className={activeTab === 'signup' ? 'active' : ''}>Signup</button>
        </div>
        <div className="auth-content">
          {activeTab === 'login' ? <Login /> : <Signup />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
