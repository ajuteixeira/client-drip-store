import { createBrowserRouter } from 'react-router-dom';
import UiView from '../pages/UiView';
import Home from '../pages/Home';
import { cardsInfo } from '../utils/cardsMock';
import ProductDetail from '../pages/ProductDetail';
import UiTest from '../pages/UiView';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';

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
    element: <UiView />,
  },
  {
    path: '/meus-pedidos',
    element: <UiView />,
  },
  {
    path: `/produtos/:itemId`,
    element: <ProductDetail />,
  },
  {
    path: '/teste',
    element: <UiTest />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/criar-conta',
    element: <CreateAccount />,
  },
]);
