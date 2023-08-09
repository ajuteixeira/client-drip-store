import { createBrowserRouter } from 'react-router-dom';
import UiView from '../pages/UiView';

export const router = createBrowserRouter([
  {
    path: '/teste',
    element: <UiView/>,
  },
]);
