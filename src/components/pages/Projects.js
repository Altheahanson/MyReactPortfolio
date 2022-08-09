import React from 'react'
import Box from '@mui/material/Box';
import Portfolio from '../Portfolio';
import Images from '../images';



const projects = [
  {
    title: "Movie Vs Trivia",
    image: Images.MovieVsTriviaLogo,
    alt: "",
    description: "This is a full stack collaborative project demonstrates the use of models, views and controllers.",
    repository: "https://github.com/DlonMusk/fullstack-movie-vs-trivia",
    deployed: "https://serene-carlsbad-caverns-28814.herokuapp.com/login"
  },
  {
    title: " Explosive TicTacToe",
     image:Images.TicTacToe ,
    alt: "",
    description: "A real time application that allows users to play tic-tac-toe and chat with a friend online. This application uses the MERN stack and features the use of Socket.IO to create real-time connections between players.",
    repository: "https://github.com/RichardZhang01/explosive-tic-tac-toe",
    deployed: "https://explosive-tic-tac-toe.herokuapp.com/"
  },
  {
    title: "Rewind",
   image: Images.ReWindLogo,
    alt: "",
    description: "This project demonstrates the use of Javascript loops to reverse a string.",
    repository: "https://github.com/Altheahanson/Rewind",
    deployed: "https://rewind-a-javascript-project.netlify.app"
  },
  {
    title: "Tech Blog",
     image: Images.techblog ,
    alt: "",
    description: "An ExpressJS SQL Tech blog where users may sign in to add posts and comments",
    repository: "https://github.com/Altheahanson/TechBlog",
    deployed: "https://pacific-atoll-54698.herokuapp.com/"
  },
  {
    title: "Weather Dashboard",
     image: Images.weatherDashboardLogo ,
    alt: "",
    description: "A weather dashboard that allows the user to get a city's current weather conditions and the five day forecast. Third-party APIs are used to access weather data by making requests with specific parameters to a URL.",
    repository: "https://github.com/Altheahanson/weatherDashboard",
    deployed: "https://altheahanson.github.io/weatherDashboard/"
  },
  {
    title: "workdayscheduler",
     image: Images.WorkDayScheduler ,
    alt: "",
    description: "A simple calendar app for scheduling appointments and planning out your work day. This project utilizes JQuery, JavaScript and Bootstrap.",
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
          <Portfolio title={project.title} image={project.image} alt={project.alt} repository={project.repository} deployed={project.deployed} description={project.description}/>
        )}
      </div>
    </section>

</Box>
  
  )
}

export default Projects