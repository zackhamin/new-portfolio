import React from 'react'
import { Paper } from '@material-ui/core'
import { Fade } from "react-awesome-reveal";
import myImage from '../images/polaroid3.png'
import Flash from 'react-reveal/Flash';

function About() {

    const textStyle = {color:'whitesmoke', fontSize:30, fontWeight:20}

    return (
        <div>
            
            <div style={{display:'flex',flexDirection:'column' ,alignItems:'center', width:'100%', height:'100%',backgroundColor:'black'}}>
            <Paper elevation={3} style={{height:'70%', width:'70%', backgroundColor:'black'}}>
                <Fade>
                    <div style={{display:'flex',flexDirection:'column' ,alignItems:'center', width:'100%', height:'100vh',backgroundColor:'black'}}>
                    <h1 style={{color:'whitesmoke', fontSize:60}}>Software Engineering:<br></br> <Flash><span>Problems.</span></Flash></h1>
                    <h2 style={{color:'whitesmoke', fontSize:60}}>Languages:<br></br><Flash><span>Tools.</span></Flash></h2>
                    </div>

                    <div style={{display:'flex',flexDirection:'row' , flexDirection:'row-reverse', width:'100%', height:400,backgroundColor:'black'}}>
                    <img src={myImage} style={{height:400,width:350, opacity:'70%'}}/>
                    </div>

                     <h3 style={textStyle}>I enjoy writing code in different languages.
                     <br></br>
                     <span style={{color:'red'}}>The right tool for the right job.</span></h3>

                     <h3 style={textStyle}>
                     <br></br>My passion for learning has been ignited.<br></br>  <span style={{color:'red'}}>I love to be challenged.</span></h3>


                     <h3 style={textStyle}>
                     <br></br>Solving problems.<br></br>  <span style={{color:'red'}}>Reverse engineering is a joy.</span></h3>

                     <h3 style={textStyle}>
                     <br></br>Team work brings out the best in me.<br></br>  <span style={{color:'red'}}>Collaboration is key.</span></h3>

                     <h3 style={textStyle}>
                     <br></br>Giving back is what I am about.<br></br>  <span style={{color:'red'}}>GDG Manchester founder and community speaker.</span></h3>

                     <h3 style={textStyle}>
                     <br></br>Diversity && inclusion in tech.<br></br>  <span style={{color:'red'}}>MPA task force member.</span></h3>


                     <h3 style={textStyle}>
                     <br></br>Software is more than code.<br></br>  <span style={{color:'red'}}>Design, Thought, Ideas. </span></h3>

                     <h3 style={textStyle}>
                     <br></br>The curious.<br></br>  <span style={{color:'red'}}>New opportunity to learn? yes, please.</span></h3>

                     <h3 style={textStyle}>
                     <br></br>Communication works both ways.<br></br>  <span style={{color:'red'}}>Speaking. Presenting. Blogs. Social media.</span></h3>

                    <h3 style={{color:'whitesmoke', fontSize:50}}><span style={{color:'red'}}>Mentor</span> organiser <span style={{color:'red'}}>STEM </span>ambassador <span style={{color:'red'}}>GDG  </span>Manchester <span style={{color:'red'}}>founder  </span></h3>
                </Fade>


            </Paper>
                </div>
        </div>
    )
}

export default About
