import React from 'react'

export default function TopCard({builder,star,rating,title, caption, para}) {
  return (
    <div style={{display:"flex", marginTop:"18px", justifyContent:"space-around", background:'#ffffff'}}>
        <div style={{width:"28%", display:"flex",flexDirection:'column', alignItems:"center",justifyContent:"center"}}><img src={builder} style={{width:"141px", height:"103px"}}/>
        <figcaption style={{textAlign: "center", marginTop: "8px", color:'#626e79', fontFamily:'Inter', fontSize:'14px', fontWeight:'400'}}>{caption}</figcaption>
        </div>
        <div style={{width:"50%"}} >
          <p style={{fontWeight:"bold"}}>{para}
            <span style={{fontWeight: "lighter"}}>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface For Professional Websites and Online Stores (Black/Blue)</span></p>
            <h6 style={{display:"flex",justifySelf:"start", color:'#2c384a', fontWeight:'700', fontSize:'16px' , fontFamily:'Inter'}}>Main highlights</h6>
            <p>[What you Get]:Recieve the WixPro website builder suite, access to premium design templates, an extra library of widgets and apps, and detailed setp-by-step guides.</p>
            <button style={{}}>Show More</button>
        </div>
        <div style={{width:"15%", background:'#f3f9ff' }}>
          <div style={{display:'flex', flexDirection:'column', alignContent:'center', justifyContent:'center' }}>
            <p>{rating}</p>
            <p>{title}</p>
            <img src={star}/>
          </div>
          <button>View</button>
        </div>
    </div>
  )
}
