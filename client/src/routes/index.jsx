import { createBrowserRouter } from 'react-router-dom';
import UiView from '../pages/UiView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World!</div>,
  },
  {
    path: '/teste',
    element: <UiView />,
  },
]);
