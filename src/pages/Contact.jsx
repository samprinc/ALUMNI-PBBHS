import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>You can reach the Paul Boit Alumni Office at:</p>

      <ul>
        <li><strong>Phone:</strong> +254 718 659480</li>
        <li><strong>Location:</strong> Paul Boit Boys High School, Eldoret</li>
      </ul>

      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="100%"
        height="300"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Contact;
