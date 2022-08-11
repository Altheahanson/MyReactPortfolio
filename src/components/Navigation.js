
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, Button } from '@mui/material';
import ImageAvatars from './Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Resume from '../../src/pdf/Resume.pdf'
import './styles/navigation.css'



// Setup NavItems
const PAGES = [ 'Projects', 'Contact', 'Resume'];


const Navigation = () => {
  
  return (
    <React.Fragment>
     <Box sx={{ display: 'flex' }}>
      <Drawer open={true}  variant="permanent" anchor="left" sx={{background: "#71C9CE"}} >
        <List sx={{ padding: '30px'}}>
        <ImageAvatars/>
        <Typography className='myName' sx={{ fontSize: 20 }}> Althea Hanson</Typography>
        <ListItemButton sx={{ textAlign: 'Center' }} >
                <ListItemIcon>
                  <ListItemText>
                  <NavLink className='Links' to='/MyReactPortfolio/' style={({ isActive }) => ({
                  fontSize: '20px',
                  textDecoration: 'none',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  padding: '10px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  boxShadow: '3px 5px 5px #888888',
                  color: isActive ? '#002B5B' : '#fff',
                  background: isActive ? '#8FE3CF' : '#002B5B',
                })} 
                > About </NavLink>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
          {
            PAGES.map((page, index) => (
              <ListItemButton sx={{  }}  key={index}>
                <ListItemIcon>
                  <ListItemText>
                    <NavLink className='Links' to={page} style={({ isActive }) => ({
                  fontSize: '20px',
                  textDecoration: 'none',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  padding: '10px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  boxShadow: '3px 5px 5px #888888',
                  color: isActive ? '#002B5B' : '#fff',
                  background: isActive ? '#8FE3CF' : '#002B5B',
                })} >
                    {page}</NavLink>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
          }

      <Typography className='location' sx={{ margin: "auto"  }}> Toronto ON</Typography>

<a style={{ textDecoration: 'none' }} href={Resume} target="_blank" rel="noreferrer" download>
<Button className='download' sx={{ marginLeft: "auto" }} variant="contained" size="small"> DownLoad CV</Button>
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