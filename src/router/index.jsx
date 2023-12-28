import { createBrowserRouter, Outlet } from "react-router-dom";

import { MainLayout } from "../layouts/main";


import { HomePage } from "../pages/home-page";
import { NotFoundPage } from "../pages/not-found-page";


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
 
        children: [
          {
            index: true,
            element: <HomePage />,
          },
      
        
          // Fallback to 404
          {
            path: "*",
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
]);
