import React from 'react'
import './index.css'
import Hero from './components/Hero'
import WhoAmI from './components/WhoAmI'
import Projects from './components/projects'
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {

  return (
    <div>
       <Hero/>
       <WhoAmI/>
       <Projects/>
    </div>
  )
}

export default App
