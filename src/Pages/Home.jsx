import { Paper } from '@material-ui/core'
import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Home() {


    return (
        <div style={{display:'flex',flexDirection:'column' ,alignItems:'center', width:'100%', height:700,backgroundColor:'#232b2b', padding:20}}>
            <Paper elevation={3} style={{height:'95%', width:'90%', backgroundColor:'#0e1111',padding:10}}>
            <Typewriter style={{fontSize:90, color:'white'}}
                onInit={(typewriter) => { 
                    typewriter.typeString("<h1 style='color:white'>...My name?<h1/>")
                    .callFunction(() => {
                        // console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    typewriter.typeString("<h1 style='color:red'>...Ishaq<h1/>")
                    .pauseFor(2500)
                    typewriter.typeString("<h1 style='color:white'>...<h1/>")
                    .pauseFor(2500)
                    .deleteChars(3)
                    typewriter.typeString("<h1 style='color:white'>But you already knew that<h1/>")
                    .pauseFor(2500)
                    typewriter.typeString("<h1 style='color:red'> Didn't you...<h1/>")
                    .pauseFor(2500)
                    typewriter.typeString("<h1 style='color:white'> I like to...<h1/>")
                    .pauseFor(2500)
                    typewriter.typeString("<h1 style='color:red'> Make things...<h1/>")
                    .pauseFor(2500)
                    typewriter.typeString("<h1 style='color:red'> ...Break things<h1/>")
                    .pauseFor(2500)
                    typewriter.typeString("<h1 style='color:white'> And of course...<h1/>")
                    .pauseFor(2500)
                    typewriter.typeString("<h1 style='color:red'> Build suspense...<h1/>")
                    .pauseFor(2500)
                    typewriter.typeString("<h1 style='color:white'> For absolutely....<h1/>")
                    .pauseFor(2500)
                    typewriter.typeString("<h1 style='color:red'> ...NO REASON...<h1/>")

                    .deleteAll()
                    .callFunction(() => {
                        // console.log('All strings were deleted');
                    })
                    .start();
                }}
                />
            </Paper>
        

            
      
        </div>
    )
}


