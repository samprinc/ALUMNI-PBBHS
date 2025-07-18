import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import { Link } from 'react-router-dom';
import Events from '../pages/Events';
import bannerImg from '../assets/DSC_0261.jpg';
import alumniImg from '../assets/DSC_0263.jpg';

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section with Animated Intro */}
      <section className="hero" style={{ backgroundImage: `url(${bannerImg})` }}>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Paul Boit Boys Alumni Network</h1>
          <p>Reconnect. Inspire. Grow Together.</p>
        </motion.div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <motion.h2 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          Join Our Alumni Family
        </motion.h2>
<motion.p initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
  Stay updated on events, careers, and opportunities.
</motion.p>
<Link to="/register">
  <motion.button className="cta-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    Join Now
  </motion.button>
</Link>
      </section>

      {/* Events Preview */}
      <section className="events-preview">
        <h2>📅 Upcoming Events</h2>
        <Events />
      </section>

      {/* Gallery Preview */}
      <section className="gallery-preview">
        <h2>📸 Memories from the Past</h2>
        <motion.div
          className="gallery-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={alumniImg} alt="Alumni Event" />
          <img src={bannerImg} alt="Banner" />
          {/* Add more images here */}
        </motion.div>
        <Link to="/gallery">
          <button className="cta-button">View Full Gallery</button>
        </Link>
      </section>

    </div>
  );
}

export default Home;
