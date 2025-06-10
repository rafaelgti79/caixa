import React from 'react';
import ReactDom from "react-dom/client";
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Cadastro from './pages/CadastroLoja/CadastroLoja.jsx';
import Home from './pages/Home/home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
