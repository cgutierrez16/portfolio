import './App.css'
import bootstrap from 'bootstrap'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { NBATracker } from './pages/NBATracker'
import { Lengua } from './pages/Lengua'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar'
import ScrollToTop from './utilities/ScrollToTop'

function App() {
  return (
    <div className="App base">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path='/portfolio/projects' element={<Projects />} />
            <Route path='/portfolio/projects/nbatracker' element={<NBATracker />} />
            <Route path='/portfolio/projects/lengua' element={<Lengua />} />
            <Route path='/portfolio/about' element={<About />} />            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
