import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='header container'>
            <img className='d-block m-auto' src={logo} alt="logo" />
            <p className='text-[#706F6F] text-[18px] font-poppins mt-[20px] mb-[10px]' >
                Journalism Without Fear or Favour
            </p>
            <p className='text-[20px] '>
                <span className='text-[#403F3F]'>Sunday, </span>
                <span className='text-[#706F6F]'>November 27, 2022</span>
            </p>
        </div>
    )
}

export default Header