
import { socialLinks } from '../data/siteData';

const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer className="container text-center py-4 mt-5 border-top">
            <nav
                className="d-flex justify-content-center gap-4"
                aria-label="Social media links"
            >
                {socialLinks.map(({ label, title, url, iconClass }) => (
                    <a
                        key={title}
                        className="text-secondary"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        title={title}
                    >
                        <i className={`${iconClass} fs-3`} aria-hidden="true"></i>
                    </a>
                ))}
            </nav>

            <p className="text-secondary small mt-3 mb-0">
                © {currentYear} Dan Musser
            </p>
        </footer>
    );
}

export default Footer;
