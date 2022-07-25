import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material'



function About() {
  return (
    <Box component="main" sx={{  flexGrow: 1, pl: 25, pr:10, py: 12,  }}>
    <div>
       
      <h1>About Me</h1>
      <Typography>
      I am a Software Developer based in Toronto Canada and I specialize in building 
      Javascript based websites and applications. I help convert a vision and an idea
       into meaningful and useful products. Having a sharp eye for product evolution 
       helps me prioritize tasks, iterate fast and deliver faster. Currently, 
       I'm enrolled in a Full-Time Coding Bootcamp at the University of Toronto. 
       My expected Completion date is August 3rd, 2022.
      </Typography>
    </div>
    </Box>
  );
}
export default About