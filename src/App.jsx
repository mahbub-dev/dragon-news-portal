import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Marque from './components/Marque'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const location = useLocation().pathname.split('/')[1]
  return (
    <section >
      <ToastContainer/>
      {!['register', 'login'].includes(location) && <Header />}
      {!['news', 'register', 'login'].includes(location) && <Marque />}
      {location !== 'news' && <Navbar />}
      <Outlet />
    </section>
  )

}

export default App
