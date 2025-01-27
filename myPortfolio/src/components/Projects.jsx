import React from 'react';
import '../styles/main.scss'; // Ensure you import the CSS file

function Project({ imgSrc, title, projectLink }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card bg-secondary project-card">
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
          <img src={imgSrc} className="card-img-top project-img img-fluid" alt={title} />
          <div className="card-img-overlay d-flex align-items-end justify-content-end">
            <h5 className="card-title text-bg-secondary p-3 align-items-end py-1 px-1">{title}</h5>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Project;