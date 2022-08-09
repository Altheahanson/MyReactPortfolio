
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ImageAvatars from './Avatar';
import Box from '@mui/material/Box';



// Setup NavItems
const PAGES = [ 'Projects', 'Contact', 'Resume'];


const Navigation = () => {
  
  return (
    <React.Fragment>
     <Box sx={{ display: 'flex' }}>
      <Drawer open={true}  variant="permanent" anchor="left" >
        <List sx={{ padding: '30px' }}>
        <ImageAvatars/>
        <ListItemButton sx={{ textAlign: 'Center' }} >
                <ListItemIcon>
                  <ListItemText>
                  <NavLink to='/MyReactPortfolio/' style={({ isActive  }) => { return { color: isActive ? 'blue' : 'DarkGreen' } }} > About </NavLink>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
          {
            PAGES.map((page, index) => (
              <ListItemButton sx={{ textAlign: 'Center' }}  key={index}>
                <ListItemIcon>
                  <ListItemText>
                    <NavLink to={page} style={({ isActive  }) => { return { color: isActive ? 'blue' : 'DarkGreen' } }} >
                    {page}</NavLink>
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