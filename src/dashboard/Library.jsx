import React, { useEffect, useState } from 'react';
import api from '../api/api';
import './Library.css'; // Assuming you have a CSS file for styling


function Library() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    api.get('alumni/library/')
      .then(res => setDocuments(res.data))
      .catch(err => console.error("Failed to load library documents", err));
  }, []);

  return (
    <div className="library-container">
      <h2>📚 Library Documents</h2>
      {documents.length === 0 ? (
        <p>No documents available.</p>
      ) : (
        <ul className="document-list">
          {documents.map(doc => (
            <li key={doc.id}>
              <strong>{doc.title}</strong> <br />
              <a href={doc.file} target="_blank" rel="noreferrer" download>
                📥 Download
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Library;
