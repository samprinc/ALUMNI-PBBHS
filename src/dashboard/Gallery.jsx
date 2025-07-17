import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://alumni-backend-sjku.onrender.com/api/alumni/gallery/")
      .then((response) => setImages(response.data))
      .catch((error) => console.error("Error fetching gallery:", error));
  }, []);

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((img) => (
          <div key={img.id} className="gallery-item">
            <img src={img.image} alt={img.caption} />
            <p>{img.caption}</p>
            {img.link && (
              <a href={img.link} target="_blank" rel="noopener noreferrer">
                🔗 View More
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
