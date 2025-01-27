import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-lg bg-secondary pb-0">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://img.icons8.com/hatch/64/mario.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top tertiary" />
                    Dan Musser
                </a>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link
                            to="/"
                            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                            className={currentPage === '/' ? 'nav-link active bg-primary' : 'nav-link bg-dark'}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Portfolio"
                            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === '/Portfolio' ? 'nav-link active bg-primary' : 'nav-link bg-dark'}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Contact"
                            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === '/Contact' ? 'nav-link active bg-primary' : 'nav-link bg-dark'}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Resume"
                            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === '/Resume' ? 'nav-link active bg-primary' : 'nav-link bg-dark'}
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavTabs;