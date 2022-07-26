
import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ImageAvatars from './Avatar';
import Box from '@mui/material/Box';


// Setup NavItems
const PAGES = [ 'Projects', 'Contact', 'Resume'];


const Navigation = () => {
  return (
    <React.Fragment>
     <Box sx={{ display: 'flex' }}>
      <Drawer open={true}  variant="permanent" anchor="left">
        <List sx={{ padding: '30px' }}>
        <ImageAvatars/>
        <ListItemButton sx={{ textAlign: 'Center' }} >
                <ListItemIcon>
                  <ListItemText>
                    <Link to="/" style={{ textDecoration: 'none' }}> About </Link> 
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
          {
            PAGES.map((page, index) => (
              <ListItemButton sx={{ textAlign: 'Center' }}  key={index}>
                <ListItemIcon>
                  <ListItemText>
                    <Link to={page} style={{ textDecoration: 'none' }}> {page} </Link> 
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
          }
        </List>
      </Drawer>
      </Box>
    </React.Fragment>
  )
}

export default Navigation