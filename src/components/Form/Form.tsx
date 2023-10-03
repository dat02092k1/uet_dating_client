import React from 'react'
import './Form.css';

export default function Form() {
  return (
    <div className='form-container rounded-[10px] flex flex-col items-center justify-center h-[700px] w-[450px]'>
        <div className="form-content flex flex-col text-center items-center">
            <h2 className='text-white text-[55px] mt-[6px]'>
                <a href="">
                    ChatSpace 
                </a>
            </h2>

            <h3 className='text-[#ffffff] text-[25px] italic mt-[120px] uppercase'>
            Login
            </h3>

            <p>
          By continuing you agree to our terms and conditions of use
          as well as our cookie policy.
        </p>

        <form action="" className='mt-[20px] w-full'>
            <form action="" placeholder='Username'></form>
            <input type="text" placeholder='Password'/>
            <input className='btn-login' type="text" />
        </form>

        <p>
          Don't you have an account ?
        <a href="">
        Register
        </a>
        </p>
        </div>
    </div>
  )
}
