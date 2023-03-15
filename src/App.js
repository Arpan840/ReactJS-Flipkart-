
import { useState } from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Grocery from "./Components/Grocery";
import Header from "./Components/Header";
import Home from "./Components/Home";
import {FaMoon,FaSun } from 'react-icons/fa';

import Mobile from "./Components/Mobile";
import Login from "./Components/Login";

function App() {
  let [textcolor,settextcolor]=useState('black')
  let [bg,setbg]=useState('white')
  let [mode,setMode]=useState(FaMoon)
 let changebg=()=>{
  if(bg==='white' )
  {
    setbg('#121212')
    setMode(FaSun)
    settextcolor('white')
  }
  else{
    setbg('white')
    setMode(FaMoon)
    settextcolor('black')
  }
 }
  return (
    <div className="App" style={{backgroundColor:bg, color:textcolor}}>
      <Router>
        <Header changebg={changebg} mode={mode}></Header>
       
       
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        
          <Route path="/Grocery" element={<Grocery></Grocery>}></Route>
          <Route path="/Mobile" element={<Mobile></Mobile>}></Route>
          <Route path="/Login" element={<Login textcolor={textcolor}></Login>}></Route>
          <Route path="*" element={<Home></Home>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
