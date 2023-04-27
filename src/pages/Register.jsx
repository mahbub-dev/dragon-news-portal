import Input from "../components/Input"
import { useState } from "react"
// import app from "../../firebase.config"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../../firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const Register = () => {
  const navigate = useNavigate()
  const [registerData, setRegisterData] = useState({ email: '', password: '', name: '', photo_url: '' })
  const [isAgree, setIsAgree] = useState(false)
  const auth = getAuth(app)
  const handleChange = (e) => {
    setRegisterData(p => ({ ...p, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isAgree) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, registerData.email, registerData.password)
        const user = userCredential.user;
        await updateProfile(user, { displayName: registerData.name, photoURL: registerData.photo_url })
        navigate('/all_news')
      } catch (error) {
        toast(error.message)
      }
    } else {
      toast('Please Accept Term & Conditions before Submit')
    }
  }
  return (
    <div className="container m-auto max-w-[606px] p-5 bg-white md:px-[73px] md:py-[76px]">
      <h1 className="md:text-[35px] text-[25px] font-[600] text-[#403F3F] ">Register your account</h1>
      <hr className="border-solid border-[1px] my-6 md:my-[50px] border-[#E7E7E7]" />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Input
          type='text'
          name='name'
          placeholder={'Enter your name'}
          title={'Your Name'}
          value={registerData.name}
          onChange={handleChange}
        />
        <Input
          type='text'
          name='photo_url'
          placeholder={'Paste a photo url'}
          title={'Photo URL'}
          value={registerData.photo_url}
          onChange={handleChange}
        />
        <Input
          type='email'
          name='email'
          placeholder={'Enter your email address'}
          title={'Email address'}
          value={registerData.email}
          onChange={handleChange}
        />
        <Input
          type='password'
          name='password'
          placeholder={'Enter your password'}
          title={'Password'}
          value={registerData.password}
          onChange={handleChange}
        />
        <div className="flex gap-2 mb-[30px]">
          <input type="checkbox" onChange={(e) => setIsAgree(e.target.checked)} className="w-[25px] h-[25px]" name="agree" /> <label className="text-[#706F6F]" htmlFor="agree">
            <span className="font-100">Accept</span> <span className="font-[600]">Term & Conditions</span>
          </label>
        </div>
        <button type="submit" className="w-100 p-[20px] text-white mb-[24px] rounded bg-[#403F3F]">Register</button>
      </form>
    </div>
  )
}

export default Register