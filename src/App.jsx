import './App.css'
import Layout from './Pages/layout'
import Home from './Pages/Home'
import Work from './Pages/Work'
import Contact from './Pages/Contact'
import Team from './Pages/Team'
import WorkSinglePage from './Components/Templete/WorkSinglePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react'


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() { 
  
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/work" element={ <Work />} />
        <Route path="/work/:slug" element={ <WorkSinglePage />} />
        <Route path="/our-team" element={ <Team />} />
        <Route path="/contact-us" element={ <Contact />} />
      </Routes>
      <Footer/>
      </Layout>
    </BrowserRouter>
  )
}

export default App
