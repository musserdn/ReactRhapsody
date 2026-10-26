
function Project({ imgSrc, title, description, projectLink }) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <article className="card h-100 project-card">
                <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link text-decoration-none"
                    aria-label={`Explore ${title}`}
                >
                    <img
                        src={imgSrc}
                        className="card-img-top project-img img-fluid"
                        alt={`Screenshot of ${title}`}
                        loading="lazy"
                    />

                    <div className="card-body d-flex flex-column">
                        <h2 className="card-title h5">{title}</h2>

                        <p className="card-text text-secondary">
                            {description}
                        </p>

                        <span className="project-cta mt-auto">
                            Explore project <span aria-hidden="true">→</span>
                        </span>
                    </div>
                </a>
            </article>
        </div>
    );
}

export default Project;
