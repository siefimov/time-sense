import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthenticationForm } from './components/AuthForm/AuthForm2';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Users from './components/Users/Users';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/authentication', element: <AuthenticationForm /> },
      {
        path: '/clients',
        element: <div>clients</div>,
      },
      {
        path: '/projects',
        element: <div>projects</div>,
      },
      {
        path: '/tasks',
        element: <div>tasks</div>,
      },
      {
        path: '/users',
        element: <Users />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
