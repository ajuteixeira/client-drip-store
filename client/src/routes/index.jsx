import { createBrowserRouter } from 'react-router-dom';
import UiView from '../pages/UiView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UiView />,
  },
  {
    path: '/produtos',
    element: <UiView />,
  },
  {
    path: '/categorias',
    element: <UiView />,
  },
  {
    path: '/meuspedidos',
    element: <UiView />,
  },
]);
