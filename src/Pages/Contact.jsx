import Paper  from '@material-ui/core/Paper';
import React,{ useState } from 'react';
import TextFields from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const Contact = () => {

  const serviceID = 'service_ldzqgxa';
  const templateID = 'template_0uxrcpt';
  const userID = 'user_k0UJhEZsy374k2ZLM6pFa'

  const [sender, setSender] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [message, setMessage] = useState(" ")
  const [showSuccessBanner, setShowSuccessBanner] = useState(false)
  const [showFailureBanner, setShowFailureBanner] = useState(false)
  const [openSuccess, setOpenSuccess] = useState(false);
  const [open, setOpen] = useState(false);
      
  const templateParams = {
    from_name: sender,
    from_email: email,
    message: message
  };

  const sendEmail = (e) => {
    e.preventDefault()
    window.emailjs.send(serviceID, templateID,templateParams,userID)
        .then(() => {
          setBannerSuccess()
        })
        .catch(setBannerFailure)
      }  

      const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      } 
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSuccess(false);
      };

      const setBannerSuccess = () => {
          return setShowSuccessBanner(true),handleClickSuccess()
      }

      const setBannerFailure = () => {
        return setShowSuccessBanner(true),handleClickFailure()
    }
      const handleClickSuccess = () => {
        setOpenSuccess(true);
      };

      const handleClickFailure = () => {
        setOpen(true);
      };

      return (
        <div style={{display:'flex',flexDirection:'column' ,alignItems:'center', width:'100%', height:'100vh',backgroundColor:'black'}}>
        <Paper elevation={3} style={{borderRadius:'10%',minHeight:300, width:300, backgroundColor:'whitesmoke', display:'flex', padding:10,
            alignItems:'center', justifyContent:'center', marginTop:40,flexDirection:'column',flexWrap:'wrap'}}>
            <form onSubmit={sendEmail}>
            <Grid container spacing={2} direction='column'>
                <Grid item > <TextFields label="Name" variant="outlined" size="small" type="text" onChange={e => setSender(e.target.value)} /> </Grid>
                <Grid item > <TextFields label="Email" variant="outlined" size="small" type="email" onChange={e => setEmail(e.target.value)}  /></Grid>
                <Grid item > <TextFields multiline="true" label="Message" variant="outlined" size="small" type="text" onChange={e => setMessage(e.target.value)}  /></Grid>
                <Grid item > <Button type='submit'
                variant="contained"
                color="primary"
                disabled={
                  sender === ' ' || email === ' ' || message === ' '
                } >
                  Submit
                </Button>
                </Grid>
                { showSuccessBanner && (
                <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                     <Alert onClose={handleClose} severity="success">
                       Message sent successfully
                     </Alert>
                   </Snackbar>
                )}
             <Grid>
                { showFailureBanner && (
                   <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
                     <Alert onClose={handleClose} severity="error">
                       Message failed to send
                     </Alert>
                   </Snackbar>
                )}
                </Grid>
                </Grid>
            </form>
          </Paper>
          </div>
      );
  }
 
  export default Contact;

