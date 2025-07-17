import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import './Register.css'; // Optional if you have styling

function Register() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    password: '',
    phone: '',
    admission_number: '',
    kcse_year: '',
    course: '',
    graduation_year: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/alumni/register/', form);

      if (response.status === 201) {
        setSuccess('Registration successful! You can now log in.');
        setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
      }
    } catch (err) {
      console.error('Registration error:', err);
      if (err.response?.data) {
        const data = err.response.data;
        const firstError = Object.values(data)[0][0];
        setError(firstError || 'Registration failed. Please check your inputs.');
      } else {
        setError('Something went wrong.');
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Register as Alumni</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={form.full_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="admission_number"
          placeholder="Admission Number"
          value={form.admission_number}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="kcse_year"
          placeholder="KCSE Year"
          value={form.kcse_year}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Course (optional)"
          value={form.course}
          onChange={handleChange}
        />
        <input
          type="number"
          name="graduation_year"
          placeholder="Graduation Year (optional)"
          value={form.graduation_year}
          onChange={handleChange}
        />

        <button type="submit">Register</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>

      {/* Login Link */}
      <p className="redirect-text">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Register;
