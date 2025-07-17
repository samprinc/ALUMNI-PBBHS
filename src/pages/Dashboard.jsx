import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import api from '../api/api';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Initialize collapsed state from localStorage
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem('sidebar_collapsed') === 'true';
  });

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (!token) {
      navigate('/login');
      return;
    }

    api.get('alumni/profile/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => setUser(res.data))
      .catch(() => {
        console.log("Not authenticated");
        navigate('/login');
      });
  }, [navigate]);

  const handleClickOutside = (e) => {
    if (!e.target.closest('.sidebar') && !e.target.closest('.toggle-btn')) {
      setCollapsed(true);
      localStorage.setItem('sidebar_collapsed', 'true');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Toggle function to update state and localStorage
  const toggleSidebar = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    localStorage.setItem('sidebar_collapsed', newState);
  };

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/');
  };

  return (
    <div className="dashboard-layout">
      <aside className={`sidebar ${collapsed ? 'collapsed' : 'expanded'}`}>
        <h2 className="sidebar-title">Alumni</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {collapsed ? '➡️' : '⬅️'}
        </button>
        <nav className="dashboard-menu">
          <button onClick={() => { navigate('/dashboard/library'); setCollapsed(true); }}>📚 Library</button>
          <button onClick={() => { navigate('/dashboard/gallery'); setCollapsed(true); }}>🖼 Gallery</button>
          <button onClick={() => { navigate('/dashboard/events'); setCollapsed(true); }}>📅 Events</button>
          <button onClick={() => { navigate('/dashboard/testimonials'); setCollapsed(true); }}>✍️ Share Story</button>
          <button onClick={() => { navigate('/dashboard/profile'); setCollapsed(true); }}>👤 Profile</button>
          <button onClick={() => { navigate('/dashboard/ChangePassword'); setCollapsed(true); }}>🔐 Change Password</button>
          <button onClick={() => { handleLogout(); setCollapsed(true); }}>🚪 Logout</button>
        </nav>
      </aside>

      <div className="main-content">
        <header className="dashboard-header">
          <button className="toggle-btn" onClick={toggleSidebar}>
            ☰
          </button>
          <h2>Welcome {user?.username || '...'}</h2>
        </header>

        <div className="dashboard-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
