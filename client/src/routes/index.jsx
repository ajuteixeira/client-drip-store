import { createBrowserRouter } from 'react-router-dom';
import UiView from '../pages/UiView';
import Home from '../pages/Home';
import { cardsInfo } from '../utils/cardsMock'
import ProductDetail from '../pages/ProductDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/produtos',
    element: <UiView />,
  },
  {
    path: '/categorias',
    element: <UiView />
  },
  {
    path: '/meuspedidos',
    element: <UiView />,
  },
  {
    path: `/produtos/:itemId`,
    element: <ProductDetail/>
  }
]);
