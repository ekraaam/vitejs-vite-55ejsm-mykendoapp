import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@progress/kendo-theme-default/dist/all.css";
import './index.css'
import DrawerRouterContainer from './routes/DrawerRouterContainer';
import Inbox from './components/Inbox';
import { FormComponent } from './components/FormComponent';

import Tilelayout from './components/Tilelayout';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DrawerRouterContainer>
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/FormComponent" element={<FormComponent />} />
          <Route path="/tilelayout" element={<Tilelayout/>} />
        </Routes>
      </DrawerRouterContainer>
    </BrowserRouter>
  </React.StrictMode>,
)
