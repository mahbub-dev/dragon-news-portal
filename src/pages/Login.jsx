import { useState } from "react"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.config";
import { toast } from 'react-toastify';
const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const auth = getAuth(app)
  const handleChange = (e) => {
    setLoginData(p => ({ ...p, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      navigate('/all_news')
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage)
      toast(errorMessage)
      setLoginData({ email: '', password: '' })
    }
  }
  return (
    <div className="container m-auto max-w-[606px] p-5 bg-white md:px-[73px] md:py-[76px]">
      <h1 className="md:text-[35px] text-[25px] font-[600] text-[#403F3F] ">Login your account</h1>
      <hr className="border-solid border-[1px] my-6 md:my-[50px] border-[#E7E7E7]" />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Input
          type='email'
          name='email'
          placeholder={'Enter your email address'}
          title={'Email address'}
          value={loginData.email}
          onChange={handleChange}
        />
        <Input
          type='password'
          name='password'
          placeholder={'Enter your password'}
          title={'Password'}
          value={loginData.password}
          onChange={handleChange}
        />
        <button type="submit" className="w-100 p-[20px] text-white mb-[24px] rounded bg-[#403F3F]">Login</button>
        <p className="text-[#706F6F] font-[600]" >
          <span >Dont’t Have An Account?</span>
          <Link className="text-[#FF7D73]" to='/register'>Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login