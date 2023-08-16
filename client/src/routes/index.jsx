import { createBrowserRouter } from 'react-router-dom';
import UiView from '../pages/UiView';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/teste',
    element: <UiView />,
  },
]);
