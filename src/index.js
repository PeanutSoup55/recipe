import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './config/auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import New from './components/New';
import Sidebar from './components/Sidebar';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Auth",
    element: <Auth />,
  },
  {
    path: "/Sidebar",
    element: <Sidebar />,
  },
  {
    path: "/New",
    element: <New />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
