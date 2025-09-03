import About from './about/about';
import Header  from './header/header'
import Home from './home/home';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Project from './projects/project';

function App() {
  
  return (<>
  <div className='App'>
    <Header/>
  </div>
  
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Project />} />
            <Route exact path="/contacts" element={<Home />} />
            <Route exact path="/extra-curricular" element={<Home />} />
            
        </Routes>
    
  </>
  )
}

export default App
