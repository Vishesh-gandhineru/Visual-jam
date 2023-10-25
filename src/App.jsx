import './App.css'
import Layout from './Pages/layout'
import Home from './Pages/Home'
import Work from './Pages/Work'
import Contact from './Pages/Contact'
import Team from './Pages/Team'
import WorkSinglePage from './Components/Templete/WorkSinglePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
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
