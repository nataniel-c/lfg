import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import TeamUp from './pages/TeamUp.jsx'
// // import Matchup from './pages/Matchup';
// import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Login from './pages/Login';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/teamup',
        element: <TeamUp />
      }, 
      {
        path: '/login',
        element: <Login />
      },
      // {
      //   path: '/me',
      //   element: <Profile />
      // }, {
      // //   path: '/matchup/:id',
      // //   element: <Vote />
      // // },
      // }, 
      // {
      //   path: '/matchup',
      //   element: <Matchup />
      // }, {
      //   path: '/matchup/:id',
      //   element: <Vote />
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
