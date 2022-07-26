import React from 'react'
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import './styles/Footer.css'

const Footer = () => {
  return (
    <Box component="main" sx={{  flexGrow: 1, pl: 25, pr:10, py: 12,  }}>

<section className='footer'> 
      <section className='footer__social'>
        <div><a href='https://www.linkedin.com/in/althea-hanson/' target="_blank"><LinkedInIcon sx={{ fontSize: "40px" }} /></a></div>
        <div><a href='https://github.com/Altheahanson' target="_blank"><GitHubIcon sx={{ fontSize: "40px" }} /></a></div>
        <div><a href='https://twitter.com/lifeoftia1?lang=en' target="_blank"><TwitterIcon sx={{ fontSize: "40px" }} /></a></div>
      </section>
    </section>

    </Box>
  )
}

export default Footer