import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import Home from '../Pages/Home'
import About from '../Pages/About'
import Cv from '../Pages/Cv'
import Contact from '../Pages/Contact'
import Pulse from 'react-reveal/Pulse';

export default function MenuBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>
          <div style={{padding:20,display:'flex', width:'100%', height:100, backgroundColor:'#232b2b'}}>
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

        <Link to="/Cv" style={{textDecoration:'none'}}>
        <Pulse>
        <Button>
         <strong style={{color:'whitesmoke'}}>CV</strong>
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
          <h1 style={{fontSize:40,fontFamily:'Source Code Pro',textDecoration:'line-through', textDecorationColor:'red'}}>Ishaq</h1>
        </div>
        </div>
      </div>
    )
}
