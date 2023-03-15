import React, { useState } from 'react'
import "./stylesheet/Login.css"

const Login = ({textcolor}) => {
    
    
    let [onc,setonc]=useState("")
    let[itype,setItype]=useState('Request Otp')
    let [namee,setnamee]=useState()
   let sotp=()=>{
    if(itype==='Request Otp')
    {
        setItype('Resend Otp')
        setnamee(onc)
    }
    else{
        setItype("Request Otp")
        setnamee(onc)
    }

   }
   let changeEvent=(e)=>{
     setonc(e.target.value)
   }

    
  return (
    <><div className='Login' >
        <h1>Login</h1>
        <p>Get Access to your order by login</p>
       </div><div className="form" style={{color:{textcolor}}}>
        
      <h3>  Enter Email Id/Mobile Number {namee} </h3>
     
        <br />
        <input type='text' onChange={changeEvent} value={onc} />
        <br />
        <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
        <br />
        <button className='otp' onClick={sotp}>{itype}</button>
        </div></>
  )
}

export default Login