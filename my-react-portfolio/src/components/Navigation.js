
import React from 'react';
// import { Link } from 'react-router-dom';
import { Drawer, Button, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// Setup NavItems
const PAGES = ['About', 'Projects', 'Contact', 'Resume'];

const Navigation = () => {
  return (
    <React.Fragment>
      <Drawer open={true}>
        <List sx={{ padding: '30px' }}>
          {
            PAGES.map((page, index) => (
              <ListItemButton sx={{ textAlign: 'Center' }}  key={index}>
                <ListItemIcon>
                  <ListItemText>
                     {page}  
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
          }
        </List>
        <Button sx={{ margin: "7px" }} variant="contained"> DownLoad CV</Button>
      </Drawer>
    </React.Fragment>
  )
}

export default Navigation