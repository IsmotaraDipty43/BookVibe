import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Component/Root/Roots';
import Errorpage from './Component/Errorpage/Errorpage';
import Home from './Component/Home/Home';
import Dashbroad from './Component/Dashbroad/Dashbroad';
import Bookdetails from './Component/BookDetails/Bookdetails';
import ListedBooks from './Component/ListedBooks/ListedBooks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Errorpage></Errorpage>,
    children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/dashbroad',
            element:<Dashbroad></Dashbroad>
          },
          {
               path:'books/:bookId',
               element:<Bookdetails></Bookdetails>,
               loader:()=>fetch('/booksData.json')
          },
          {
            path:'/listedbook',
            element:<ListedBooks></ListedBooks>,
            loader: ()=>fetch('/booksData.json')
          },
          {
            path:'/dashbroad',

          }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
