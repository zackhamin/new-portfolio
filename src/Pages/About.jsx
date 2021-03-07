import React from 'react'
import { Paper } from '@material-ui/core'
import { Fade } from "react-awesome-reveal";
import myImage from '../images/meBW.png'

function About() {
    return (
        <div>
            <div style={{display:'flex',flexDirection:'column' ,alignItems:'center', width:'100%', height:'100%vh',backgroundColor:'black',padding:20}}>
            <Paper elevation={3} style={{height:'70%', width:'90%', backgroundColor:'black',padding:10}}>
                <Fade>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>A lot of people say they love what they <span style={{color:'red'}}>do</span>.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>However, most have never done anything else.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>Luckily for me, I have.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>So, when I say I <span style={{color:'red'}}>love</span> what I do<span style={{color:'red'}}>.</span></h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>It's because I know there is <span style={{color:'red'}}>nothing</span> else I would rather do.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>I started Teaching myself how to <span style={{color:'red'}}>code</span> a year and a half ago.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>Balancing my time with my <span style={{color:'red'}}>family</span>, work and studies. </h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>I worked <span style={{color:'red'}}>Incredibly</span> hard. </h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>To relax, I <span style={{color:'red'}}>hike</span>.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>I  <span style={{color:'red'}}>learn</span> from doing. </h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>Reverse engineering is one of my <span style={{color:'red'}}>favourite</span> things to do.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>I  <span style={{color:'red'}}>mentor</span> because I have met some incredible self-taught developers. </h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>I  <span style={{color:'red'}}>advise</span> career changers. </h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>In a short time I have made amazing  <span style={{color:'red'}}>progress</span> in this industry.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>I am only just getting  <span style={{color:'red',textDecoration:'line-through', textDecorationColor:'black'}}>started</span>.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:50}}><span style={{color:'red'}}>Mentor</span> organiser <span style={{color:'red'}}>STEM </span>ambassador <span style={{color:'red'}}>GDG  </span>Manchester <span style={{color:'red'}}>founder  </span></h3>
                </Fade>


            </Paper>
                </div>
        </div>
    )
}

export default About
