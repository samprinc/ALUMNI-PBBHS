import React, { useState } from 'react';
import api from '../api/api';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
  const [form, setForm] = useState({
    current_password: '',
    new_password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    setMessage('');

    api.post('alumni/profile/change-password/', form)
      .then(res => {
        setMessage(res.data.message);
        // Clear tokens and redirect after 3 seconds
        setTimeout(() => {
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          navigate('/login');
        }, 3000);
      })
      .catch(err => {
        const errMsg = err.response?.data?.error || "Failed to change password";
        setError(errMsg);
      });
  };

  return (
    <div className="profile-page">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Current Password</label>
        <input type="password" name="current_password" onChange={handleChange} required />

        <label>New Password</label>
        <input type="password" name="new_password" onChange={handleChange} required />

        <button type="submit">Update Password</button>

        {message && <p style={{ color: 'green' }}>{message} Redirecting to login...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default ChangePassword;
