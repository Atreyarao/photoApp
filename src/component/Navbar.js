import React from "react";


function Navbar(){
    return(
        <>
        <nav style={{display:"flex",margin:0,padding:0,width:'100%',height:'10vh',marginBottom:50}}>
<div style={{width:"50%",display:'flex',justifyContent:'space-between',alignItems:'center',height:'100%',marginLeft:50}}>
   <a href="https://atreyarao.github.io/Atreya/" target='_blank' style={{textDecoration:'none'}}> <h1 style={{fontFamily:'sans-serif',fontSize:30}}>Atreya Rao</h1></a>
</div>
        </nav>
        </>
    )
}


export default Navbar;