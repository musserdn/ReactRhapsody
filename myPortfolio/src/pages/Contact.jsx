
export default function Contact() {
    return (
        <section className="container py-5">
            <div className="row g-5 align-items-start">
                <div className="col-12 col-lg-5">
                    <p className="text-uppercase fw-semibold text-primary mb-2">
                        Get in Touch
                    </p>

                    <h1 className="display-5 fw-bold mb-3">
                        Let's talk about building better products.
                    </h1>

                    <p className="lead text-secondary">
                        Interested in product leadership, technology, or
                        solving complex business problems? I'd be glad to
                        connect.
                    </p>
                </div>

                <div className="col-12 col-lg-6 offset-lg-1">
                    <div className="card shadow-sm">
                        <div className="card-body p-4">
                            <h2 className="h4 fw-bold mb-3">
                                Connect With Me
                            </h2>

                            <p className="text-secondary">
                                Connect professionally on LinkedIn or
                                explore my projects and code on GitHub.
                            </p>

                            <a
                                className="btn btn-linkedin w-100 mb-3"
                                href="https://www.linkedin.com/in/musserdn/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-linkedin me-2" aria-hidden="true"></i>
                                Connect on LinkedIn
                            </a>

                            <a
                                className="btn btn-github w-100"
                                href="https://github.com/musserdn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-github me-2" aria-hidden="true"></i>
                                Explore My GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
