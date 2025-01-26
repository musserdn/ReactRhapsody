import React from 'react';

function Project({ imgSrc, title, projectLink }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <img src={imgSrc} className="card-img-top" alt={title} />
        </a>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default Project;