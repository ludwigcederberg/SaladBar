import { createBrowserRouter, Navigate } from "react-router-dom";
import App from './App.js';
import ErrorPage from './ErrorPage.js';
import MovieList from './MovieList.js';
import Form from "./Form.js";
import HomePage from "./HomePage.js";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movielist",
        element: <MovieList />,
      },
      {
        path: "/search",
        element: <Form />,
      }

    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;