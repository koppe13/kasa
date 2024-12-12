import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import './styles/components.scss';
import './styles/valderoulant.scss';
import Main404 from "./components/main404.jsx";
import {Home} from "./pages/home";
import Logement from "./components/logement";
import {Apropos} from "./pages/apropos.jsx";
import ProfileContainer from "./components/logementcontainer/index.jsx";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Home/>,
    },
    {
      path: 'component/mainpropos',
      element: <Apropos/>
    },
    {
      path: 'logement/:id',
      element: <ProfileContainer/>
    },
    {
        path: '*',
        element: <Main404/>
    }
]);


//function PageError (){
//    return  <>
//            <Main404 />
//    </>
//}


//function Root () {
//  return <>
//         <Home/>
//        </>
//}




function App () {
 
 return <RouterProvider router={router}/>
  }
          
export default App;
