import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material'
import Image from '../images';
import '../styles/about.css'



function About() {
  return (
    <Box component="main" sx={{  flexGrow: 1, pl: 25, pr:10, py: 12, background:"#E3FDFD" }}>
    <div className='photoHeader'  sx={{background:"#E3FDFD"}} >
      <div >
      <img className="me" src={Image.Althea} alt="Photo of Althea"/>
      </div>

      <div className="aboutME">
      <h1>About Me</h1>
      <Typography>
      Front End Developer leveraging a background in customer service, 
      problem-solving and critical thinking to help build more intuitive 
      user experiences on the web. Life-long learner having recently 
      earned a certificate as a Full Stack Web Developer from the 
      University of Toronto Bootcamp. Proven experience engaging audiences 
      and delivering impactful user experiences and responsive web designs. 
      Recognized for exceptional interpersonal communication skills and 
      attention to detail. Self-starter that thrives in collaborative team environments.
      </Typography>
      </div>
    </div>
    </Box>
  );
}
export default About