import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";


import Home from './Component/Home/Home.jsx';
import Root from './Root/Root.jsx';

import Middle from './Component/Middle/Middle.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />, // Home should be inside Root
        children: [
          {
            path: "",
            element: <Navigate to={"/category/01"} />, // No leading slash
          },
          {
            path: "category/:id",
            element: <Middle />, // No loader needed
          }
          
          
          
          
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
