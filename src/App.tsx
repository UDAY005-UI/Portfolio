import './App.css'
import Navbar from './components/layout/navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Academics from './components/sections/Academics';

function App() {
    return (
      <>
      <Navbar/> 
      <div className='flex flex-col'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Academics/>
      </div>
      </>
    )
}

export default App
