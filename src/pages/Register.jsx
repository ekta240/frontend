import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerApi } from '../api/Api'
import { toast } from 'react-toastify'
const Register = () => {
  const [firstname,setFirstname]=useState('')
  const[lastname,setLastname]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]= useState('')
  const[confpassword,setConfpassword]= useState('')

  //form error
  const [fnameError, setFnameError] = useState('')
  const [lnameError, setLnameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confpasswordError, setConfPasswordError] = useState('')

  const navigate = useNavigate();

  //validate
  const validate =() => {
    var isValid = true
    if(firstname.trim() === ''){
      setFnameError('Firstname is required')
      isValid = false
    }

    if(lastname.trim() === ''){
      setLnameError('Lastname is required')
      isValid = false
    }

    if(email.trim() === ''){
      setEmailError('Email is requied')
      isValid = false
    }

    if(password.trim() === ''){
      setPasswordError('Password is required')
      isValid = false
    }

    if(confpassword.trim()=== ''){
      setConfPasswordError('Confirm password is required')
      isValid = false
    }

    if (password!== confpassword){
      setConfPasswordError('Password and confirm password different')
      isValid= false
    }
    return isValid;
  }
  

  // on submit function
  const handleSubmit= (e) =>{
    e.preventDefault()

    //validate
    if(!validate) { 
      return
    } 

    //calling api
    registerApi({
      fname: firstname,
      lname: lastname,
      email: email,
      password: password
    }).then(res => {
      navigate('/login')
      toast.success(res.data.message)
    }).catch(err => {
      toast.error('Something went wrong!')
    })
    
  }




  return (
    <div className='container w-25 '>
        <h3 className='text-center'>Create a new account</h3>
        <form action="" className='mt-4'>
            <label htmlFor="fname">First Name</label>
            
            <input type="text" className='form-control' onChange={(e)=>setFirstname(e.target.value)}/>
            {
              fnameError && <p className='text-danger'>{fnameError}</p>
            }
            
            <label htmlFor="lname">Last Name</label>
            <input type="text" className='form-control' onChange={(e)=>setLastname(e.target.value)}/>
            {
              lnameError && <p className='text-danger'>{lnameError}</p>
            }

            <label htmlFor="email">Email</label>
            <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
            {
              emailError && <p className='text-danger'>{emailError}</p>
            }

            <label htmlFor="password">Password</label>
            <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
            {
              passwordError && <p className='text-danger'>{passwordError}</p>
            }
            
            <label htmlFor="cpass">Confirmation Password</label>
            <input type="password" className='form-control'onChange={(e)=>setConfpassword(e.target.value)} />
            {
              confpasswordError && <p className='text-danger'>{confpasswordError}</p>
            }

            <button className='btn btn-primary w-100 mt-2' onClick={handleSubmit}>
                Register
            </button>
            <Link to={'/login'} className='btn btn-link w-100 mt-2'>
                Already have an account?Login
            </Link>
        </form>
    </div>
  )
}

export default Register