import { React, useState } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Pulse from 'react-reveal/Pulse';

export default function MenuBar() {

   

    return (
  
          <div style={{padding:20,display:'flex', flexDirection:'row',alignItems:'center' ,width:'100%', height:30, backgroundColor:'black'}}>
        <Link to="/" style={{textDecoration:'none'}}>
          <Pulse>
        <Button>
         <strong style={{color:'whitesmoke'}}>Home</strong>
        </Button>
        </Pulse>
        </Link>

        <Link to="/About" style={{textDecoration:'none'}}>
        <Pulse>
        <Button>
         <strong style={{color:'whitesmoke'}}>About</strong>
        </Button>
        </Pulse>
        </Link>

        <Link to="/Contact" style={{textDecoration:'none'}}>
        <Pulse>
        <Button>
         <strong style={{color:'whitesmoke'}}>Contact</strong>
        </Button>
        </Pulse>
        </Link>
        <div style={{display:'flex', width:'100%', alignContent:'center', justifyContent:'center'}}>
          <h1 style={{color:'#232b2b',fontSize:40,fontFamily:'Source Code Pro',textDecoration:'line-through', textDecorationColor:'red'}}>Ishaq</h1>
        </div>
        </div>
  
    )
}
