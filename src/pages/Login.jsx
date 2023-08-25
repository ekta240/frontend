import React, { useState } from 'react'
// import NavBar from '../Components/NavBar'
import { toast } from 'react-toastify'
import { loginApi } from '../api/Api'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from '../store/userSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  const [emailError, setEmailError] = useState('')
  const[passwordError, setPasswordError] =useState('')


  const validate =() => {
    var isValid = true

    if(email.trim() === ''){
      setEmailError('Email is requied')
      isValid = false
    }

    if(password.trim() === ''){
      setPasswordError('Password is required')
      isValid = false
    }

    
    return isValid;
  }

  // for redux dispatch
  const dispatch = useDispatch()

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(email,password)

    const data ={
      email: email,
      password: password
    }
    loginApi(data).then (res =>{
      console.log(res.data)
      //save token in local storage
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user',JSON.stringify(res.data.user))

      //for redux dispatch
      dispatch(addUser(res.data.user))

      toast.success(res.data.message)
      navigate('/')
    }).catch(err =>{
      console.log(err)
      toast.error('Login failed!!')
    })
  }

  return (
    <div className='container w-25'>
      <h3 className='text-center'>Sign in to your account</h3>
      <form action="" className='mt-4'>
        <label htmlFor="email" >Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" className='form-control'  placeholder='abc123@gmail.com'/>
        {
              emailError && <p className='text-danger'>{emailError}</p>
            }
        
        <label htmlFor="password" >Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" className='form-control'  placeholder='********'/>
        {
              passwordError && <p className='text-danger'>{passwordError}</p>
            }

        <button className='btn btn-black w-100 mt-2' onClick={handleSubmit}>Login</button>

        <Link to={'/forgotPassword'}>
          <p>Forgot your password?</p>
        </Link>
      </form>
    </div>
  )
}

export default Login;