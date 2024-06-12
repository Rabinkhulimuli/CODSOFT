import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout'
import Home from './home'
import Project from './inner_componenet/project'
import Skill from './inner_componenet/skill'
function App() {


  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
                  <Route index element={<Home/>} /> 
                  <Route path='project' element={<Project/>}/>
                  <Route path='skill' element={<Skill/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
     
}

export default App
