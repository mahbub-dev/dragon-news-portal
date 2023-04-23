import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Marque from './components/Marque'
import Marquee from "react-fast-marquee";
function App() {
  return (
    <>
      <Header />
<Marque/>
      <Outlet />
    </>
  )
}

export default App
