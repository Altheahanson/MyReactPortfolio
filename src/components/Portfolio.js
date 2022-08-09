import React from 'react';
import './styles/project.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';


const Portfolio = (props) => {
  return (
  
<Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.alt}
        height="140"
        image={props.image}
      />
      <CardContent>
        <Typography className="card-header" gutterBottom variant="h5" component="div">
        {props.title}
        </Typography>
        <Typography className="card-body" variant="body2" color="text.secondary">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions className="card-links">
      <a href={props.repository} rel="noreferrer" target="_blank" className="btn btn-primary">
        <GitHubIcon sx={{ fontSize: "30px" }} /></a>

        <a href={props.deployed} rel="noreferrer" target="_blank" className="btn btn-primary">
          <LaunchIcon sx={{ fontSize: "30px" }} /></a>
  
      </CardActions>
    </Card>



  )
}

export default Portfolio