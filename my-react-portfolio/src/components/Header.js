import React from 'react'

import { AppBar, Button, Toolbar, Typography } from '@mui/material'
 import Navigation from './Navigation'


const Header = () => {

    return (
        <React.Fragment>
            <AppBar sx={{background: "purple"}}>
                <Toolbar>   
                <Navigation/>
                <Typography sx={{ marginLeft: "auto", fontSize: 50 }}> Althea Hanson</Typography>
                
                <Typography sx={{ marginLeft: "auto" }}> Toronto ON</Typography>
                <Button sx={{ marginLeft: "auto" }} variant="contained"> DownLoad CV</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Header

