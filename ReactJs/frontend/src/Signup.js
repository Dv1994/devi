import React, { useState } from 'react'
import axios from 'axios';


export default function SignUp() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (event) =>{
        setValues({...values, [event.target.name]: [event.target.value]})
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        axios.post('http://localhost:8081/signup', values)
        .then(res => console.log("Registered Successfully!!"))
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 bg-primary justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='text' placeholder='enter your Name' name='name' className='form-control rounded-0' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='text' placeholder='enter your Email' name='email' className='form-control rounded-0' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0' onChange={handleChange}/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>SignUp</button>
            </form>
        </div>
    </div>
  )
}
