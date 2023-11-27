import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import Auth from './components/Auth/Auth';
import { LoginForm } from './components/Login/LoginForm';

const router = createBrowserRouter([
  {
    path: '/sign-up',
    element: <div>Sign Up</div>,
  },
  {
    path: '/sign-in',
    element: <LoginForm />,
  },
  {
    element: <Auth />,
    children: [
      {
        path: '/',
        element: <div>dashboard</div>,
      },
      {
        path: '/sidebar',
        element: <div>sidebar</div>,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
