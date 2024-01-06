import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.tsx';
import Dashboard from './components/Dashboard.tsx';
import Login from './components/Login.tsx';
import Form from './components/Form.tsx';
import Hero from './components/Hero.tsx';
import UserDetail from './components/UserDetail.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user",
        element: <UserDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
			<RouterProvider router={router} />
  </React.StrictMode>,
)
