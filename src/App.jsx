import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import Home from './app/Home';
import Services from './app/Services';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        {/* {isLoading && <Loader />}  */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
