import { createBrowserRouter } from 'react-router-dom';
import UiView from '../pages/UiView';
import Home from '../pages/Home';

import { cardsInfo } from '../utils/cardsMock';

import ProductDetail from '../pages/ProductDetail';
import MyRequests from '../pages/MyRequests';
import MyInformations from '../pages/MyInformations';

import ProductCart from '../pages/ProductCart';

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
    path: '/pedidosroutes',
    element: <MyRequests />,
  },
  {
    path: `/produtos/:itemId`,
    element: <ProductDetail />,
  },

  {

    path: '/informations',
    element: <MyInformations />
  },
  {

    path: `/produtos/cart`,
    element: <ProductCart/>
  },

 
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/criar-conta',
    element: <CreateAccount />,
  }

]);
