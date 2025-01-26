import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import './styles/main.scss'; // Import the main SCSS file
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS


import App from './App';
import Error from './pages/Error';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);