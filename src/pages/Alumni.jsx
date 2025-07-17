import React from "react";
import "./Alumni.css";

const alumniList = [
  {
    name: "Daniel Kiptoo",
    year: 2007,
    profession: "Software Engineer, Google",
    quote: "Paul Boit gave me the discipline to pursue excellence.",
    image: "/alumni1.jpg",
  },
  {
    name: "Peter Kiplagat",
    year: 2005,
    profession: "Medical Doctor, Moi Teaching & Referral",
    quote: "I'm proud to be a product of Boit — strong foundation for life.",
    image: "/gallery1.jpeg",
  },
  {
    name: "John Rono",
    year: 2010,
    profession: "Lecturer, University of Eldoret",
    quote: "Boit sharpened both my academic and leadership skills.",
    image: "/alumni3.jpg",
  },
];

function Alumni() {
  return (
    <div className="alumni-container">
      <h1>Alumni Spotlight</h1>
      <div className="alumni-grid">
        {alumniList.map((alumni, index) => (
          <div className="alumni-card" key={index}>
            <img src={alumni.image} alt={alumni.name} />
            <h3>{alumni.name}</h3>
            <p className="year">Class of {alumni.year}</p>
            <p className="profession">{alumni.profession}</p>
            <blockquote>“{alumni.quote}”</blockquote>
          </div>
        ))}
      </div>
    </div>
    

  );
}

export default Alumni;
