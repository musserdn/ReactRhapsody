
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            <Nav />
            {isHomePage && <Header />}
            <main className="mx-3">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;
