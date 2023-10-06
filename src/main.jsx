import React, { Children } from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App.jsx';
import './index.css';


import { Route, RouterProvider  , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


import Layout from './layout.jsx'

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Error from './components/Error/Error'

import Github , {githubInfoLoader}  from './components/Github/Github.jsx'



// this is one way to use router  . 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:  [
//       // this all are called nested routing . 
//     {
//       path: '',
//       element: <Home />
//     }, 
//     {
//       path : 'about',
//       element : <About />
//     },
//     {
//       path : 'contact',
//       element : <Contact />
//     }
//   ]
// }, 

// ]

// )


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route
      loader={githubInfoLoader} /* we can fetch all thing here but not do  call a call back function or function from another file  */
       path='github' 
       element={<Github />}
       errorElement={<Error />}

       
       />


      <Route 
      path='user/:userid' 
      element={<User />} 

      
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />


  </React.StrictMode>,
)
