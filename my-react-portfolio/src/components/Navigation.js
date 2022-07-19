import React from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'

const Navigation = () => {
    return (
        <React.Fragment>
            <AppBar sx={{background: "purple"}}>
                <Toolbar>   

                <Typography> Althea Hanson Portfolio </Typography>
                <Tabs sx={{ marginLeft: "auto" }} textColor="inherit">
                    <Tab label="About Me"/>
                    <Tab label="Projects"/>
                    <Tab label="Contact"/>
                    <Tab label="Resume"/>
                </Tabs>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Navigation