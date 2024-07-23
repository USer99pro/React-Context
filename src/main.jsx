import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {ProductProvider} from "./context/ProductContxt.jsx";
import {RouterProvider } from 'react-router-dom';
import router from './routes/root.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
        <RouterProvider router={router} />
    </ProductProvider>
  </React.StrictMode>,
)
