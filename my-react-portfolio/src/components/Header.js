import React, {useState} from 'react'

import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
 import Navigation from './Navigation'


const Header = () => {
    const [value, setValue] = useState();
    return (
        <React.Fragment>
            <AppBar sx={{background: "purple"}}>
                <Toolbar>   
                <Navigation/>
                <Typography sx={{ marginLeft: "auto" }}> Althea Hanson</Typography>
                
                <Tabs sx={{ marginLeft: "auto" }} textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary">
                    <Tab label="About Me"/>
                    <Tab label="Projects"/>
                    <Tab label="Contact"/>
                    <Tab label="Resume"/>
                </Tabs>
                <Typography sx={{ marginLeft: "auto" }}> Toronto ON</Typography>
                <Button sx={{ marginLeft: "auto" }} variant="contained"> DownLoad CV</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Header

