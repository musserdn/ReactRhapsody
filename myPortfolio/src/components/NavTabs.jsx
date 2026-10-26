
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    const navItems = [
        { label: 'About', path: '/' },
        { label: 'Portfolio', path: '/Portfolio' },
        { label: 'Resume', path: '/Resume' },
        { label: 'Contact', path: '/Contact' }
    ];

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
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
                    {navItems.map((item) => {
                        const isActive = currentPage === item.path;

                        return (
                            <li className="nav-item" key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`nav-link px-2 ${
                                        isActive
                                            ? 'active fw-bold text-primary border-bottom border-2 border-primary'
                                            : 'text-secondary'
                                    }`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {item.label}
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
