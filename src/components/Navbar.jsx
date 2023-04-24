import { Link } from "react-router-dom"
import user from '../assets/user.png'
import navbaricon from '../assets/navbaricon.png'
import crossicon from '../assets/cross.png'
import { useState } from "react"
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="navbar mb-[20px] md:mb-[76px] relative container flex justify-between items-center">
            <div>
                <img
                    width={'65px'}
                    height={'65px'}
                    onClick={() => { setToggle(!toggle) }}
                    className="md:hidden" src={toggle ? crossicon : navbaricon}
                    alt="bar"
                />
            </div>
            <div
                className={`flex absolute md:visible ${toggle ? 'visible' : 'invisible'} rounded transition-[visibility] ease-in-out delay-100 flex-col md:flex-row top-[60px] md:bg-transparent bg-black md:p-0 p-[2rem] md:static  gap-2`}
            >
                <Link className="text-[#706F6F] text-[18px]">Home</Link>
                <Link className="text-[#706F6F] text-[18px]">About</Link>
                <Link className="text-[#706F6F] text-[18px]">Career</Link>
            </div>
            <div className="flex items-center gap-2">
                <div className="user">
                    <img src={user} alt="user" />
                </div>

                <Link to={'/login'} className="login btn bg-[#403F3F] text-[20px] text-[#FFFFFF] py-[5px] px-[43px]">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Navbar