import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import './nav_layout.css'
import Layout from './layout'
import Home from './home'
import Project from './inner_componenet/project'
import Skill from './inner_componenet/skill'
import Contact from './inner_componenet/contact'
import About from './inner_componenet/about'
import Resume from './inner_componenet/resume'
function App() {


  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
                  <Route index element={<Home/>} /> 
                  <Route path='project' element={<Project/>}/>
                  <Route path='skill' element={<Skill/>}/>
                  <Route path='contact' element={<Contact/>}/>
                  <Route path='about' element={<About/>}/>
                  <Route path='resume' element={<Resume/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
     
}

export default App
