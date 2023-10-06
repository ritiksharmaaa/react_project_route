import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header />
    <Home />
    <Footer /> */}
    <h1 className=" bg-green-600 p-4  text-center my-4 mx-5 ml-4 "> React Route !! </h1>
    </>
  )
}

export default App;