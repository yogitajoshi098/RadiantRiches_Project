import React from 'react';
import { IoIosSearch } from "react-icons/io";
import './Navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar_main'>
        <div className='navbar_div'>
        <div style={{display:"flex", alignItems:'center', background:"white",borderRadius:"5px"}}>
        <IoIosSearch style={{background:'white'}}/>
        <input style={{width:"200px", height:"25px",background:'white',border:"none", color:'gray',borderBottomRightRadius:"5px", borderTopRightRadius: "5px"}}/>
      </div>
      <div style={{display:'flex', width:"90%", gap:"30px",justifyContent:"end"}}>
        <h5 style={{color:'#d1d6da', fontFamily:'Inter', fontSize:'14px'}}>Categories</h5>
        <h5 style={{color:'#d1d6da',  fontFamily:'Inter', fontSize:'14px'}}>Website Builders</h5>
        <h5 style={{color:'#d1d6da',  fontFamily:'Inter' , fontSize:'14px'}}>Today's Deals</h5>
      </div>
        </div>
     
    </div>
  )
}

