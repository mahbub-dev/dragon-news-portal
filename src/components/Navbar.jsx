import { Link } from "react-router-dom"
import userIcon from '../assets/user.png'
import navbaricon from '../assets/navbaricon.png'
import crossicon from '../assets/cross.png'
import { useState } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { useContext } from "react"
import { getAuth } from "firebase/auth"
import app from "../../firebase.config"
const Navbar = () => {
    const auth = getAuth(app)
    const [toggle, setToggle] = useState(false)
    const { user } = useContext(AuthContext)
    return (
        <div className="navbar mb-[20px] md:mb-[76px] relative container flex justify-between items-center">
            <div className="md:w-[33%]">
                <img
                    width={'65px'}
                    height={'65px'}
                    onClick={() => { setToggle(!toggle) }}
                    className="md:hidden" src={toggle ? crossicon : navbaricon}
                    alt="bar"
                />
            </div>
            <div
                className={`flex md:w-[33%] justify-center absolute md:visible ${toggle ? 'visible' : 'invisible'} 
                rounded transition-[visibility] ease-in-out delay-100 flex-col md:flex-row top-[60px]
                md:bg-transparent bg-black md:p-0 p-[2rem] md:static  gap-3`}
            >
                <Link className="text-[#706F6F] text-[18px]">Home</Link>
                <Link className="text-[#706F6F] text-[18px]">About</Link>
                <Link className="text-[#706F6F] text-[18px]">Career</Link>
                {user && <button className="text-[#706F6F] text-[18px]" onClick={() => auth.signOut()} >Logout</button>}
            </div>
            <div className="flex md:w-[33%] items-center justify-end gap-2">
                {user ?
                    <div className="user">
                        <img src={user ? user.photoURL : userIcon} alt="user" width={'40px'} height={'40px'} className="rounded-full" />
                    </div> :
                    <Link to={'/login'} className="login btn bg-[#403F3F] text-[20px] text-[#FFFFFF] py-[5px] px-[43px]">
                        Login
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar