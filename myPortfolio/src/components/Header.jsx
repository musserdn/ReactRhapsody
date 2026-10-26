
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="container py-4 py-lg-5">
            <div className="row justify-content-center text-center">
                <div className="col-12 col-lg-9">
                    <p className="text-uppercase fw-semibold text-primary mb-2">
                        Product Leadership · Technology · Operations
                    </p>

                    <h1 className="header-title fw-bold mb-3">
                        I build products that drive business results.
                    </h1>

                    <p className="lead text-secondary mb-4 mx-auto">
                        I combine product strategy, operational expertise,
                        and technical depth to turn complex problems into
                        scalable solutions.
                    </p>

                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
                        <Link to="/Portfolio" className="btn btn-primary">
                            Explore My Work
                        </Link>

                        <Link to="/Resume" className="btn btn-outline-primary">
                            View My Resume
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
