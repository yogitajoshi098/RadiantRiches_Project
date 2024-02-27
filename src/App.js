import './App.css';
import './style.scss';
import Navbar from './components/Navbar';
import builder from './components/builder.png'
import star from './components/star.png'
import TopCard from './components/TopCard';
import Prize from "./components/Prize.png"
import ToolBar from './components/ToolBar';
import BottomCard from './components/BottomCard';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className="main_div">
       <ToolBar/>
        <div style={{ width:"12%",alignItems:"center",borderRadius:"5px", marginTop:"10px", background:"#FF7724", display:"flex",justifyContent:"space-around"}}>
        <img src={Prize} style={{width:"20px",height:"20px"}}/>
        <p style={{fontSize:"14px",color:"white"}}>Best Choice</p>
        </div>
        
      <TopCard builder={builder} rating={9.8} title='Exceptional' star={star}/>
      <div style={{ width:"12%",alignItems:"center",borderRadius:"5px", marginTop:"10px", background:"#FF7724", display:"flex",justifyContent:"space-around"}}>
        <img src={Prize} style={{width:"20px",height:"20px"}}/>
        <p style={{fontSize:"14px",color:"white"}}>Best Value</p>
      </div>
      <TopCard builder={builder} rating={9.5} title='Excellent' star={star} caption="Builder" para="SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"/>
      <TopCard builder={builder} rating={9.5} title='Exceptional' star={star} caption="Builder 1" para="WixPro 72-Inch Responsive Website Builder - " />
      <BottomCard builder={builder} rating={9.1} title='Very Good' star={star} caption="CDK" para="CDK Resposive Builder: An extensive library of widgets and apps, and detailed step-by-step guides "/>
      <p className='mid-heading'>Related deals you might like for</p>
      <div className='card_div'>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div style={{maxWidth:'1024px', height:'171px', background:'white', display:'flex', justifyContent:'space-between', marginTop:'30px'}}>
<h2 style={{color:'#5c6874',fontSize:'30px', fontFamily:'Inter', width:'398px', height:'88px '}}>Sign up and get exclusive special deals</h2>
<div>
<input type='text' style={{background:'white', maxWidth:'180px', borderRadius:'12px, 0px, 0px, 12px', border:'none', padding:'12px'}}/>
<button style={{maxWidth:'100px',height:'50px', fontFamily:'Inter',fontWeight:'400', fontSize:'14px',textAlign:'center',color:'white', border:"none", borderRadius:"5px", background:' #1B88F4', marginTop:'7px',padding:'7px 12px'
}}>Sign Up</button>
</div>

      </div>
      </div> 
      <Footer/>
    </div>
    
  );
}

export default App;
