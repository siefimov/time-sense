import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import Auth from './components/Auth/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },

]);

export function Router() {
  return <RouterProvider router={router} />;
}
