import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Navbar, Footer } from 'components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RoutesArray } from 'routes/routes'

function App() {
  const routing = useRoutes(RoutesArray)
  return (
    <div className='app'>
      <Navbar />
      <ToastContainer />
      {routing}
      <Footer />
    </div>
  )
}

// 6.4

export default App
