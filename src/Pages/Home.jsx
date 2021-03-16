import { Paper } from '@material-ui/core'
import { React, useState } from 'react'
import Pulse from 'react-reveal/Pulse';
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";
import { MediaQuery, useMediaQuery } from 'react-responsive';
import myImage from '../images/polaroid.jpg'

export default function Home() {

    const [welcomeText, setWelcomeText] = useState("Hi.")
    const [iAmText, setIAmText] = useState("I am")
    const [nameText, setNameText] = useState("Ishaq")

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1020px)' })
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
     
    
// About text
    const mouseOver = () => {
        return setWelcomeText("About")
    }

    const mouseExit = () => {
        return setWelcomeText("Hi.")
    }
// I am text
    const mouseOverIAm = () => {
        return setIAmText("Work")
    }

    const mouseExitIAm = () => {
        return setIAmText("I am")
    }

// Name text
    const mouseOverName = () => {
        return setNameText("Contact")
    }   

    const mouseExitName = () => {
        return setNameText("Ishaq")
    }


    return (
        <div style={{display:'flex',flexDirection:'row' ,justifyContent:'center', width:'100%', height:'100vh',backgroundColor:'black'}}>
            <Paper elevation={3} style={{display:'flex',flexDirection:'column', height:'95%', width:'90%', backgroundColor:'black'}}>
                
            { isBigScreen && 
            <div>
            <Pulse>
                <Link to="/About" style={{textDecoration:'none'}}>
                <Button onMouseEnter={mouseOver} onMouseLeave={mouseExit}>
                <span style={{color:'whitesmoke', fontSize:90, fontWeight:900,fontFamily:'Source Code Pro'}}>
                   {welcomeText}
                </span>
                </Button>
            </Link>
            </Pulse>
            </div>
            }

            { isTabletOrMobile && 
            <div>
            <Pulse>
                <Link to="/About" style={{textDecoration:'none'}}>
                <Button onMouseEnter={mouseOver} onMouseLeave={mouseExit}>
                <span style={{color:'whitesmoke', fontSize:50, fontWeight:900,fontFamily:'Source Code Pro'}}>
                   About
                </span>
                </Button>
            </Link>
            </Pulse>
            </div>
            }

            { isBigScreen && 
            <div>
            <Link to="/Work" style={{textDecoration:'none'}}>
                <Button onMouseEnter={mouseOverIAm} onMouseLeave={mouseExitIAm}>
                <span style={{color:'white', fontSize:90}}>
                   {iAmText}
                </span>
                </Button>
                </Link>
            </div>
            }

            { isTabletOrMobile && 
            <div>
            <Pulse>
                <Link to="/Work" style={{textDecoration:'none'}}>
                <Button onMouseEnter={mouseOver} onMouseLeave={mouseExit}>
                <span style={{color:'whitesmoke', fontSize:50, fontWeight:900,fontFamily:'Source Code Pro'}}>
                   Work
                </span>
                </Button>
            </Link>
            </Pulse>
            </div>
            }

            { isBigScreen && 
            <div>
            <Link to="/Contact" style={{textDecoration:'none'}}>
                <Button onMouseEnter={mouseOverName} onMouseLeave={mouseExitName}>
                <span style={{color:'red', fontSize:90}}>
                   {nameText}
                </span>
                </Button>
                </Link>
            </div>
            }
             { isTabletOrMobile && 
            <div>
            <Pulse>
                <Link to="/Contact" style={{textDecoration:'none'}}>
                <Button onMouseEnter={mouseOver} onMouseLeave={mouseExit}>
                <span style={{color:'red', fontSize:50, fontWeight:900,fontFamily:'Source Code Pro'}}>
                   Contact
                </span>
                </Button>
            </Link>
            </Pulse>
            </div>
            }   
        
        </Paper>      
        </div>
    )
}
