import React, { useState } from 'react'
import './stylesheet/Grocery.css'

const Grocery = () => {

 let time=new Date().toLocaleTimeString();
 let [ctime,setTime]=useState(time)
   let digital=()=>{
    time=new Date().toTimeString();
    setTime(time)
   }
   setInterval(digital,1000)
   let [color,setColor]=useState('brown')
   let [text,setText]=useState("Click Me")
   let [textColor,setTextColor]=useState("White")
   let changeColor=()=>{
    if(color==='brown')
    { setColor('red')
    setText('red')
    setTextColor('white')
   }
   else if(color==='red'){
    setColor('yellow')
    setText('yellow')
    setTextColor('black')
   }
   else if(color==='yellow')
   {
    setColor('green')
    setText('green')
    setTextColor('white')
    
   }
   else if(color==='green')
   {
    setColor('blue')
    setText('blue')
    setTextColor('white')
   }
   else if(color==='blue')
   {
    setColor('black')
    setText('black')
    setTextColor('white')
   }
   else{
    setColor('brown')
    setText('brown')
    setTextColor('white')
   }
   }
   setTimeout(changeColor,1000)
   

   
  
  return (
    <div className='Groc' style={{backgroundColor:color ,color:textColor}}>
      <h1>{ctime}</h1>
      <button className='clickme' onMouseOver={changeColor} style={{backgroundColor:color,color:textColor}}>{text}</button>
      </div>
  )
  }

export default Grocery