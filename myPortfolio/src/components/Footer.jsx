
const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer className="container text-center py-4 mt-5 border-top">
            <nav
                className="d-flex justify-content-center gap-4"
                aria-label="Social media links"
            >
                <a
                    className="text-secondary"
                    href="https://github.com/musserdn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    title="GitHub"
                >
                    <i className="bi bi-github fs-3" aria-hidden="true"></i>
                </a>

                <a
                    className="text-secondary"
                    href="https://www.linkedin.com/in/musserdn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    title="LinkedIn"
                >
                    <i className="bi bi-linkedin fs-3" aria-hidden="true"></i>
                </a>
            </nav>

            <p className="text-secondary small mt-3 mb-0">
                © {currentYear} Dan Musser
            </p>
        </footer>
    );
}

export default Footer;
