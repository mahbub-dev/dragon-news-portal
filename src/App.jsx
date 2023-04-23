import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Marque from './components/Marque'
function App() {
  return (
    <>
      <Header />
      <Marque />
      <Navbar/>
      <Outlet />
    </>
  )
}

export default App
