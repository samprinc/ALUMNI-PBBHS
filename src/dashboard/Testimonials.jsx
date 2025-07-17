import React, { useEffect, useState } from 'react';
import api from '../api/api';
import './Testimonials.css';

function Testimonials() {
  const [stories, setStories] = useState([]);
  const [form, setForm] = useState({ name: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = () => {
    api.get('alumni/testimonials/')
      .then(res => setStories(res.data))
      .catch(err => console.error("Failed to fetch testimonials", err));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api.post('alumni/testimonials/', form)
      .then(() => {
        setSuccess(true);
        setForm({ name: '', message: '' });
        fetchTestimonials(); // refresh list
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(err => console.error("Error submitting testimonial", err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="testimonial-container">
      <h2>🎓 Alumni Stories</h2>

      <form className="testimonial-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your story or message..."
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Your Story'}
        </button>
        {success && <p className="success-msg">✅ Story submitted!</p>}
      </form>

      <div className="testimonial-list">
        {stories.map(story => (
          <div key={story.id} className="testimonial-card">
            <h4>{story.name}</h4>
            <p>"{story.message}"</p>
            <small>{new Date(story.created_at).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
