import React from "react";
import builder from "../components/builder.png";
import "./Card.scss"

export default function Card() {
  return (
        <div className="card_body">
            <div>
            <img src={builder} style={{width:"141px",height:"103px"}}/>
            </div>     
          <div>
          <p style={{color:'#074786', background:'#f2f4f7'}}>Limited time </p>
          <p style={{color:'#074786' , background:'#f2f4f7', borderRadius:'8px'}}>(20% Off)</p>
          </div>
          <h6 style={{color:'#626E79', fontSize:'16px'}}>Webbuilder 1</h6>
          <p  className="" style={{fontSize:"16px" ,textAlign:"start", fontFamily:'Inter', color:'#626e79', fontWeight:'400', width:'284px'}}>Computer Modern clasic with wix support</p>
          <div>
            <p style={{color:'#5c6784', fontFamily:'Inter', fontSize:'20px', fontWeight:'400'}}>$39.96</p>
            <p style={{color:'#9fa9b3', fontFamily:'Inter', fontSize:'14px', fontWeight:'400'}}>$49.96</p>
            <p style={{color:"#ef4c5d", fontWeight:'400', fontSize:'13px'}}>(20% Off)</p>
          </div>
        <button style={{background:'#1b88f4', color:'#ffffff', borderRadius:'12px', border:'#1b88f4', width:"95%", padding:'8px 18px'}}>View Deal</button>
      </div>
  )
}




