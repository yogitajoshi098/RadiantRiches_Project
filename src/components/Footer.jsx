import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
function Footer() {
  return (
    <div className='footer' style={{maxWidth:'1592px' , height:'250px', background:'#212731', display:'flex', justifyContent:'space-around',padding:'75px'}}>
<div style={{display:'flex', flexDirection:'column', gap:'7px',  listStyle:'none'}}>
<li style={{fontFamily:'Inter', fontSize:'18px', fontWeight:'400', lineHeight:'20px', textAlign:'left', color:'#ffffff',}}>CATEGORIES</li>
<li style={{fontFamily:'Inter', fontSize:'13px', fontWeight:'400', lineHeight:'20px', textAlign:'left', color:'#B6BDC4'}}>Web Builder</li>
<li style={{fontFamily:'Inter', fontSize:'13px', fontWeight:'400', lineHeight:'20px', textAlign:'left', color:'#B6BDC4'}}>Hosting</li>
<li style={{fontFamily:'Inter', fontSize:'13px', fontWeight:'400', lineHeight:'20px', textAlign:'left', color:'#B6BDC4'}}>Data Center</li>
<li style={{fontFamily:'Inter', fontSize:'13px', fontWeight:'400', lineHeight:'20px', textAlign:'left', color:'#B6BDC4'}}>Robotic-Automation</li>
</div>
<div  style={{display:'flex', flexDirection:'column', gap:'7px' ,  listStyle:'none'}}>
    <li style={{fontFamily:'Inter', fontSize:'18px', fontWeight:'400', lineHeight:'20px', textAlign:'left', color:'#ffffff'}}>CONTACT</li>
    <li style={{fontFamily:'Inter', fontSize:'13px', fontWeight:'400', lineHeight:'20px', textAlign:'left', color:'#B6BDC4'}}>Contact</li>
    <li style={{fontFamily:'Inter', fontSize:'13px', fontWeight:'400', lineHeight:'20px', textAlign:'left', color:'#B6BDC4'}}>Privacy Policy</li>
    <li style={{fontFamily:'Inter', fontSize:'13px', fontWeight:'400', lineHeight:'20px', textAlign:'left', color:'#B6BDC4'}}>Terms of service</li>
    <li style={{fontFamily:'Inter', fontSize:'13px', fontWeight:'400', lineHeight:'20px', textAlign:'left', color:'#B6BDC4'}}>Categories</li>
    <li style={{fontFamily:'Inter', fontSize:'13px', fontWeight:'400', lineHeight:'20px', textAlign:'left', color:'#B6BDC4'}}>About</li>
</div>
<div style={{fontFamily:'Inter', fontWeight:'400px',fontSize:'13px', color:'white', marginTop:'20px'}}>United States<RiArrowDropDownLine/></div>
    </div>
  )
}

export default Footer;

