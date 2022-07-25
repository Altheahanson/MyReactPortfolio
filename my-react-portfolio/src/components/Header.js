import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import Navigation from './Navigation'
 import Resume from '../../../my-react-portfolio/src/pdf/Resume.pdf'




const Header = () => {

    return (
        <React.Fragment>
         
            <AppBar sx={{background: "purple"}}>
           
                <Toolbar>   
                <Navigation/>
               
                <Typography sx={{ marginLeft: 20, fontSize: 50 }}> Althea Hanson</Typography>
                
              
                <Typography sx={{ marginLeft: "auto" }}> Toronto ON</Typography>

                <a style={{ textDecoration: 'none' }} href={Resume} target="_blank" rel="noreferrer" download>
                <Button sx={{ marginLeft: "auto" }} variant="contained" size="small"> DownLoad CV</Button>
                </a>
               
            
              
                </Toolbar>
             
            </AppBar>
  
        </React.Fragment>
    )
}
export default Header

