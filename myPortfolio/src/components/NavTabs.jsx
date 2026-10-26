
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../data/siteData';

function NavTabs() {
    const { pathname } = useLocation();

    return (
        <nav className="navbar navbar-expand navbar-light bg-light" aria-label="Primary navigation">
            <div className="container">
                <Link
                    className="navbar-brand fw-bold d-flex align-items-center gap-2"
                    to="/"
                    aria-label="Dan Musser home"
                >
                    <img
                        src="https://img.icons8.com/hatch/64/mario.png"
                        alt=""
                        width="30"
                        height="30"
                    />
                    <span>Dan Musser</span>
                </Link>

                <ul className="navbar-nav flex-row flex-wrap ms-auto gap-1">
                    {navigationItems.map(({ label, path }) => {
                        const isActive = pathname === path;

                        return (
                            <li className="nav-item" key={path}>
                                <Link
                                    to={path}
                                    className={`nav-link px-2 ${
                                        isActive
                                            ? 'active fw-bold text-primary border-bottom border-2 border-primary'
                                            : 'text-secondary'
                                    }`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default NavTabs;
