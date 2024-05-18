import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Conducteurs from './Pages/conducteurs/Conducteurs';
import Trajets from './Pages/trajets/Trajets';
import Login from './Pages/login/Login'
import Reclamation from './Pages/reclamation/Reclamation';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';
import Menu from './Components/menu/Menu';
import Passagers from './Pages/passagers/Passagers';

function App() {

  const Layout = () =>{
    return(
      <div className='main'>
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
     path:"/",
     element:<Layout/>,
     children:[
      {
        path: "/",
        element:<Conducteurs/>
      },
  
      {
        path: "/passagers",
        element: <Passagers/>
      },
  
      {
        path: "/trajets",
        element: <Trajets/>
      },
  
      {
        path: "/reclamation",
        element: <Reclamation/>
      },
     ],
    },

     {
      path:"/login",
      element: <Login/>
    }

    
  ]);

  return   <RouterProvider router={router} />

}

export default App
