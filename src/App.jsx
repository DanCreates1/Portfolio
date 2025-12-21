import React from 'react'
import './index.css'
import Hero from './components/Hero'
import WhoAmI from './components/WhoAmI'
import Projects from './components/projects'
import RubiksCube from './components/RubiksCube'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './components/Contact'



function App() {

  return (
    <div>
       <Hero/>
       <WhoAmI/>
      <RubiksCube/>
       <Projects/>
      <Contact/>
    </div>
  )
}

export default App
