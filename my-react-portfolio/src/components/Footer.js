import React from 'react'
import Box from '@mui/material/Box';



function Footer() {

  const icons = [
      {
          name: "fab fa-github",
          link: "https://github.com/Altheahanson"
      },
      {
          name: "fab fa-linkedin",
          link: "https://www.linkedin.com/in/althea-hanson/"
      },
      {
          name: "fab fa-stack-overflow",
          link: ""
      }
  ]

  return (
    <Box component="main" sx={{  flexGrow: 1, px: 25, py: 12,  }}>
      <section>
          <footer className="container">
              <div className="row">
                  <div className="col-lg-8 mx-auto text-center">
                      {icons.map(icon =>
                          (
                              <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                          )
                      )}
                  </div>
              </div>
          </footer>
      </section>
      </Box>
  );
}

export default Footer