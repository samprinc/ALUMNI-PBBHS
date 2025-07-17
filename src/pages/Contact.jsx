import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>You can reach the Paul Boit Alumni Office at:</p>

      <ul>
        <li><strong>Email:</strong> paulboitalumni@gmail.com</li>
        <li><strong>Phone:</strong> +254 712 345 678</li>
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
