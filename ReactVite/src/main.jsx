
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import { Tecnologies } from './tecnologies.jsx';
import { Calc } from './Calc.jsx';
import { Contact } from './contact.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/contact",
    element:  <Contact />,
  },
  {
    path: "/tec",
    element:  <Tecnologies />,
  },
  {
    path: "/calc",
    element:  <Calc />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)