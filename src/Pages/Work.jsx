import React from 'react'
import { Paper } from '@material-ui/core'
import { Fade } from "react-awesome-reveal";

const tech = ['React', 'Javascript', 'Node', 'AWS',' GitLab', 'Docker', 'Elastic', 'Java']
const previousTech = ['Kotlin', 'Swift', 'SourceTree', 'BitBucket']
const developerTools = ['VSCode', 'IntelliJ', 'Android Studio', 'XCode']
const otherSkills = ['Python', 'SEO', 'Photoshop']



function Work() {
    return (
            <div>
                <div style={{display:'flex',flexDirection:'column' ,alignItems:'center', width:'100%', height:'100%vh',backgroundColor:'black', paddingBottom:20}}>
                <Paper elevation={3} style={{height:'70%', width:'50%', backgroundColor:'black',padding:10}}>
                    <Fade>

                    <h3 style={{color:'whitesmoke', fontSize:30, fontWeight:20}}>Checkout my Git for projects.<span style={{color:'red'}}></span></h3>
                        <h3 style={{color:'whitesmoke', fontSize:30, fontWeight:20}}>Current Tech Stack<span style={{color:'red'}}>;</span></h3>
                        
                          <ul>
                        
                            {tech.map(i => ( <li key='item' style={{color:'whitesmoke', fontSize:20,fontFamily:'Source Code Pro'}}>{i}</li>))}
                          </ul>
                    
                        <h3 style={{color:'whitesmoke', fontSize:30, fontWeight:20}}>Previously Worked With<span style={{color:'red'}}>;</span></h3>
                          <ul>
                        
                            {previousTech.map(i => ( <li key='item' style={{color:'whitesmoke', fontSize:20,fontFamily:'Source Code Pro'}}>{i}</li>))}
                          </ul>

                        <h3 style={{color:'whitesmoke', fontSize:30, fontWeight:20}}>Developer Tools<span style={{color:'red'}}>;</span></h3>
                          <ul>
                        
                            {developerTools.map(i => ( <li key='item' style={{color:'whitesmoke', fontSize:20,fontFamily:'Source Code Pro'}}>{i}</li>))}
                          </ul>

                          <h3 style={{color:'whitesmoke', fontSize:30, fontWeight:20}}>Other skills<span style={{color:'red'}}>;</span></h3>
                          <ul>
                        
                            {otherSkills.map(i => ( <li key='item' style={{color:'whitesmoke', fontSize:20,fontFamily:'Source Code Pro'}}>{i}</li>))}
                          </ul>
                    </Fade>
    
    
                </Paper>
                    </div>
            </div>
        )
}

export default Work
