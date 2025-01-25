function Footer() {
    return (
        <footer className="container text-center py-5">
            <div className="d-flex justify-content-center">
                <a className="icon-link mx-3" href="https://github.com/musserdn/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github" style={{ fontSize: '2rem' }}></i>
                </a>
                <a className="icon-link mx-3" href="https://www.linkedin.com/in/musserdn/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin" style={{ fontSize: '2rem' }}></i>
                </a>
                <a className="icon-link mx-3" href="https://www.instagram.com/musserdn" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram" style={{ fontSize: '2rem' }}></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;