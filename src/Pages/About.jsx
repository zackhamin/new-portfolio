import React from 'react'
import { Paper } from '@material-ui/core'
import { Fade } from "react-awesome-reveal";

function About() {
    return (
        <div>
            <div style={{display:'flex',flexDirection:'column' ,alignItems:'center', width:'100%', height:'100%vh',backgroundColor:'#232b2b',padding:20}}>
            <Paper elevation={3} style={{height:'70%', width:'90%', backgroundColor:'#0e1111',padding:10}}>
                <Fade>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>This is the part where I tell you a little about  <span style={{color:'red'}}>me.</span></h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>Usually you hear about all the tech stuff, well, you already know that.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>Here is a little of what my CV or posts won't tell  <span style={{color:'red'}}>you</span><span style={{color:'red'}}></span>.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>I am a proud <span style={{color:'red'}}>dad</span> and <span style={{color:'red'}}>husband</span>.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>I <span style={{color:'red'}}>LOVE</span> what I do. </h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>From my first line of code, I have worked <span style={{color:'red'}}>incredibly</span> hard.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>Teaching myself how to <span style={{color:'red'}}>study</span> again.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>To balancing my time with my <span style={{color:'red'}}>family</span>, work and studies. </h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>I  <span style={{color:'red'}}>mentor</span> because I have met some incredible self-taught developers. </h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>I love <span style={{color:'red'}}>hiking</span> </h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>Reverse engineering is one of my <span style={{color:'red'}}>favourite</span> things to do.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>I  <span style={{color:'red'}}>learn</span> from doing. </h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>In a short time I have made amazing  <span style={{color:'red'}}>progress</span> in this industry.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:30,fontFamily:'Source Code Pro'}}>I am only just getting  <span style={{color:'red',textDecoration:'line-through', textDecorationColor:'black'}}>started</span>.</h3>
                    <h3 style={{color:'whitesmoke', fontSize:50}}><span style={{color:'red'}}>Mentor</span> organiser <span style={{color:'red'}}>STEM </span>ambassador <span style={{color:'red'}}>GDG  </span>Manchester <span style={{color:'red'}}>founder  </span>.</h3>
                </Fade>


            </Paper>
                </div>
        </div>
    )
}

export default About
