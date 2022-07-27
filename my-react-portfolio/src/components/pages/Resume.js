import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Box from '@mui/material/Box';
import resume from '../../pdf/Resume.pdf'


const Resume = () => {

  return (
    <Box component="main" sx={{  display:"flex",  justifyContent:"center", pl: 30, marginTop: 10,  }}>
  <div>
    <Document file={resume} >
      <Page pageNumber={1} width="1024"/>
    </Document>
  </div>   
    </Box>
  )
}

export default Resume