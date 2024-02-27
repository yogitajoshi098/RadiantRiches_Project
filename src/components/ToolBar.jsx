import React from 'react';
import '../style.scss';
import { CiCircleCheck } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function ToolBar() {
  return (
    <div>
         <h1 style={{fontSize:"48px",fontWeight:"400",textAlign:'start', fontFamily:'Inter', color:'#2c384a'}}>Best Website Builders in the Us</h1> 
        <div className='border'>
          <div style={{display:"flex",alignItems:"center",width:"50%", gap:'12px', justifyContent:'space-around'}}>
          <p className=' text-[#4b5665] text-sm flex '><CiCircleCheck style={{marginTop:'4px'}}/> Last Updated - February 22, 2020</p>
          <p className=' text-[#4b5665] text-sm flex'> <IoInformationCircleOutline style={{marginTop:'4px'}}/>Advertising Disclosure</p>
          </div>
          <div>
            <p className=' text-[#4b5665] font-[Inter] text-sm flex' > <RiArrowDropDownLine style={{marginTop:'4px'}}/>Top Relevant</p>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center" ,width:"80%", marginTop:'10px'}}>
         
        <p style={{color:'#4b5665', fontWeight:'400', fontFamily:'Inter', fontSize:'13px', background:'#ffffff', borderRadius:'12px', width:'110px', padding:'5px'}}>Tools</p>
          <p style={{color:'#4b5665', fontWeight:'400', fontFamily:'Inter', fontSize:'13px', background:'#ffffff', borderRadius:'12px', width:'110px', padding:'5px'}}>AWS Builder</p>
          <p style={{color:'#4b5665', fontWeight:'400', fontFamily:'Inter', fontSize:'13px', background:'#ffffff', borderRadius:'12px', width:'110px', padding:'5px'}}>Start Build</p>
          <p style={{color:'#4b5665', fontWeight:'400', fontFamily:'Inter', fontSize:'13px', background:'#ffffff', borderRadius:'12px', width:'110px', padding:'5px'}}>Build Supplies</p>
          <p style={{color:'#4b5665', fontWeight:'400', fontFamily:'Inter', fontSize:'13px', background:'#ffffff', borderRadius:'12px', width:'110px', padding:'5px'}}>Tooling</p>
          <p style={{color:'#4b5665', fontWeight:'400', fontFamily:'Inter', fontSize:'13px', background:'#ffffff', borderRadius:'12px', width:'110px', padding:'5px'}}>BlueHosting</p>
          </div>
    </div>
  )
}
