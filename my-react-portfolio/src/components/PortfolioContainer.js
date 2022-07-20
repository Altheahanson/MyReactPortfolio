// import React, { useState } from 'react';
// import NavTabs from './NavTabs';
// import Home from './pages/Home';
// import About from './pages/About';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState('Home');

//   // TODO: Add a comment describing the functionality of this method
//   const renderPage = () => {
//     if (currentPage === 'Home') {
//       return <Home />;
//     }
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Blog') {
//       return <Blog />;
//     }
//     return <Contact />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       {/* // TODO: Add a comment describing what we are passing as props */}
//       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* // TODO: Add a comment explaining what is happening on the following line */}
//       {renderPage()}
//     </div>
//   );
// }

import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';


function PortfolioContainer({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default PortfolioContainer;