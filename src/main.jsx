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
import Login from './Component/Login/Login.jsx';
import LoginPage from './Component/LoginPage/LoginPage.jsx';
import Register from './Component/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import NewsDetails from './Component/NewsDetails/NewsDetails.jsx';
import PrivateRoutes from './Component/Routes/PrivateRoutes.jsx';

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
          },         
        ],
      },
    ],
  },
  
  {
    path: "auth",
    element:<LoginPage></LoginPage>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>, 
      },
      {
        path: "/auth/register",
        element: <Register></Register>, 
      },
              
    ], // No loader needed
  },

  {
    path: "/news/:id",
    element: <PrivateRoutes>
      <NewsDetails></NewsDetails>
    </PrivateRoutes>, 
    loader: ({params}) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
