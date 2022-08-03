import React from 'react'
import Box from '@mui/material/Box';
import Portfolio from '../Portfolio';
import Images from '../images';



const projects = [
  {
    title: "Movie Vs Trivia",
    image: Images.MovieVsTriviaLogo,
    alt: "",
    repository: "https://github.com/DlonMusk/fullstack-movie-vs-trivia",
    deployed: "https://serene-carlsbad-caverns-28814.herokuapp.com/login"
  },
  {
    title: " Explosive TicTacToe",
     image:Images.TicTacToe ,
    alt: "",
    repository: "https://github.com/RichardZhang01/explosive-tic-tac-toe",
    deployed: "https://explosive-tic-tac-toe.herokuapp.com/"
  },
  {
    title: "Rewind",
   image: Images.ReWindLogo,
    alt: "",
    repository: "https://github.com/Altheahanson/Rewind",
    deployed: "https://rewind-a-javascript-project.netlify.app"
  },
  {
    title: "Tech Blog",
     image: Images.techblog ,
    alt: "",
    repository: "https://github.com/Altheahanson/TechBlog",
    deployed: "https://pacific-atoll-54698.herokuapp.com/"
  },
  {
    title: "Weather Dashboard",
     image: Images.weatherDashboardLogo ,
    alt: "",
    repository: "https://github.com/Altheahanson/weatherDashboard",
    deployed: "https://altheahanson.github.io/weatherDashboard/"
  },
  {
    title: "workdayscheduler",
     image: Images.WorkDayScheduler ,
    alt: "",
    repository: "https://github.com/Altheahanson/workdayscheduler",
    deployed: "https://altheahanson.github.io/workdayscheduler/"
  },
 
];

const Projects = () => {
  return (
    <Box component="main" sx={{ pl: 25, pr:10, py: 12, background:"#E3FDFD" }}>

<section>
      <h2>Projects</h2>
      <div className="work-container"  >
        {projects.map( (project) =>
          <Portfolio title={project.title} image={project.image} alt={project.alt} repository={project.repository} deployed={project.deployed}/>
        )}
      </div>
    </section>

</Box>
  
  )
}

export default Projects