
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, Button } from '@mui/material';
import ImageAvatars from './Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Resume from '../../src/pdf/Resume.pdf'
import './styles/Footer.css'



// Setup NavItems
const PAGES = [ 'Projects', 'Contact', 'Resume'];


const Navigation = () => {
  
  return (
    <React.Fragment>
     <Box sx={{ display: 'flex' }}>
      <Drawer open={true}  variant="permanent" anchor="left" sx={{background: "#71C9CE"}} >
        <List sx={{ padding: '30px'}}>
        <Typography sx={{ fontSize: 20 }}> Althea Hanson</Typography>
        <ImageAvatars/>
        <ListItemButton sx={{ textAlign: 'Center' }} >
                <ListItemIcon>
                  <ListItemText>
                  <NavLink to='/MyReactPortfolio/' style={({ isActive  }) => { return { color: isActive ? 'blue' : 'Black' } }} > About </NavLink>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
          {
            PAGES.map((page, index) => (
              <ListItemButton sx={{ textAlign: 'Center' }}  key={index}>
                <ListItemIcon>
                  <ListItemText>
                    <NavLink to={page} style={({ isActive  }) => { return { color: isActive ? 'blue' : 'Black' } }} >
                    {page}</NavLink>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
          }

      <Typography sx={{ marginLeft: "auto", marginRight: 5  }}> Toronto ON</Typography>

<a style={{ textDecoration: 'none' }} href={Resume} target="_blank" rel="noreferrer" download>
<Button sx={{ marginLeft: "auto" }} variant="contained" size="small"> DownLoad CV</Button>
</a>

<section className='footer'> 
      <section className='footer__social'>
        <div><a href='https://www.linkedin.com/in/althea-hanson/' target="_blank"><LinkedInIcon sx={{ fontSize: "40px" }} /></a></div>
        <div><a href='https://github.com/Altheahanson' target="_blank"><GitHubIcon sx={{ fontSize: "40px" }} /></a></div>
        <div><a href='https://twitter.com/lifeoftia1?lang=en' target="_blank"><TwitterIcon sx={{ fontSize: "40px" }} /></a></div>
      </section>
    </section>
        </List>
      </Drawer>
      </Box>
    </React.Fragment>
  )
}

export default Navigation