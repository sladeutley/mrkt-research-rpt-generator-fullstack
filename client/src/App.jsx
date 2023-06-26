import React from 'react';
import { BrowserRouter, HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost, ReportDetail } from './pages';

const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
    // <BrowserRouter>
    //   <AppContent />
    // </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === '/create-post';
  const linkText = isHomePage ? 'View Reports' : 'Create';
  const linkPath = isHomePage ? '/share' : '/create-post';

  return (
    <>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <h1 className="font-extrabold text-[#7385e1] text-[32px]">Generatrr</h1>
        </Link>
        
        <Link to={linkPath} className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
          {linkText}
        </Link>
        
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<CreatePost />} />
          <Route path="/share" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/report/:id" element={<ReportDetail />} />
        </Routes>
      </main>
    </>
  );
};

// const LinkButton = ({ to, text }) => {
//   return (
//     <Link to={to} className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
//       {text}
//     </Link>
//   );
// };

export default App;



// import React from 'react'
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// import { logo } from './assets';
// import { Home, CreatePost, ReportDetail } from './pages';

// const App = () => {
//   return (
//     // Below, we're wrapping everything in BrowserRouter, the latest of v6 of react-router-dom 
//     <BrowserRouter>
//       <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
//         <Link to="/"> 
//         {/* Above, we're creating a Link component */}
//           {/* <img src={logo} alt="logo" className="w-28 object-contain" /> */}
//           {/* Above, is where we could create a logo image */}
//           {/* <h1 className="font-extrabold text-[#222328] text-[32px]">Generatrr</h1> */}
//           <h1 className="font-extrabold text-[#7385e1] text-[32px]">Generatrr</h1>
//         </Link>

//         <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
//           Create
//         </Link>
//       </header>
//       <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
//         <Routes>
//           {/* <Route path="/" element={<Home />} /> */}
//           <Route path="/" element={<CreatePost />} />
//           <Route path="/share" element={<Home />} />
//           <Route path="/create-post" element={<CreatePost />} />
//           <Route path="/report/:id" element={<ReportDetail />} />
//         </Routes>
//       </main>
//     </BrowserRouter>
//   )
// }

// export default App