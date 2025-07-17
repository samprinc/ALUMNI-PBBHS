import React from 'react';
import './Join.css';

function Join() {
  return (
    <div className="join-container">
      <h1>Join the Alumni</h1>
      <div className="form-wrapper">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfupQMdrCfVXZcoCwro2-zGv3qvzbDE_vNGdgG3B7vKVLANFA/viewform?embedded=true"
          width="100%"
          height="1300"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Paul Boit Alumni Join Form"
          loading="lazy"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Join;
