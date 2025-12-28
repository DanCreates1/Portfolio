import React, { useEffect } from 'react'
import './index.css'
import Hero from './components/Hero'
import WhoAmI from './components/WhoAmI'
import Projects from './components/projects'
import RubiksCube from './components/RubiksCube'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './components/Contact'



function App() {
  useEffect(() => {
    const nav = document.querySelector('.navBar');
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 8) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // set initial state
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
       <Hero/>
       <WhoAmI/>
       <Projects/>
      <Contact/>
    </div>
  )
}

export default App
