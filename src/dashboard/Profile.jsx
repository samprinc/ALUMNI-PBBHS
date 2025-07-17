import React, { useEffect, useState } from 'react';
import api from '../api/api';
import './Profile.css'; // Assuming you have a CSS file for styling

function Profile() {
  const [form, setForm] = useState({ username: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('alumni/profile/')
      .then(res => {
        setForm(res.data);
        setLoading(false);
      })
      .catch(() => {
        setMessage('Failed to load profile');
        setLoading(false);
      });
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api.patch('alumni/profile/update/', form)
      .then(res => {
        setMessage('Profile updated!');
        setForm(res.data);
      })
      .catch(() => setMessage('Update failed'));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input name="username" value={form.username} onChange={handleChange} />

        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} />

        <button type="submit">Update</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Profile;
