import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import Root, { loader as rootLoader, action as rootAction, action } from '../../viteReact/src/routes/root'
import ErrorPage from '../../viteReact/src/error-page'
import Contact, { loader as contactLoader} from '../../viteReact/src/routes/contact'
import EditContact ,{action as editAction }from '../../viteReact/src/routes/edit'
import {action as destroyAction}from '../../viteReact/src/routes/destroy';


const router= createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children:[
      {
        path: 'contacts/:contactId',
        element: <Contact/>,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact/>,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
