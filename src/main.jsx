import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About/About.jsx';
import Resume from './pages/Resumes/Resume.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Blog from './pages/Blogs/Blog.jsx';
import Contact from './pages/Contacts/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <About></About>
      },
      {
        path: "/resume",
        element: <Resume></Resume>
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>
      },
      {
        path: "/blogs",
        element: <Blog></Blog>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
