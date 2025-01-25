function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://img.icons8.com/hatch/64/mario.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                    Dan Musser
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">About Me</a>
                        <a className="nav-link" href="#">Portfolio</a>
                        <a className="nav-link" href="#">Contact</a>
                        <a className="nav-link" href="#">Resume</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;