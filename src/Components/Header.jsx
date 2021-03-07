import { Button } from '@material-ui/core';
import React from 'react'
import { Link } from "react-router-dom";


function Header() {
    return (
    <div>
          <div style={{padding:20,display:'flex', width:'100%', height:15, backgroundColor:'black', alignContent:'right'}}>
    
        <Button  onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1FM7oJbPHUc-ir0yEzqh-DA0bnsQZh8hr/view?usp=sharing")}>
         <strong style={{color:'whitesmoke'}}>Cv</strong>
        </Button>

        <Button  onClick={() =>
                window.open("https://www.linkedin.com/in/ishaqamin/")}>
         <strong style={{color:'whitesmoke'}}>LinkedIn</strong>
        </Button>
      
        <Button onClick={() => window.open("https://github.com/zackhamin")}>
            <strong style={{color:'whitesmoke'}}>Git</strong>
        </Button>
        </div>
        <div style={{display:'flex', width:'100%', alignContent:'center', justifyContent:'center', backgroundColor:'black', padding:20}}>
          <Link to='/' style={{textDecoration:'none'}}><h1 style={{color:'#232b2b',fontSize:40,fontFamily:'Source Code Pro',textDecoration:'line-through', textDecorationColor:'red'}}>Ishaq</h1>
          </Link>
        </div>
    </div>
    )
}

export default Header
