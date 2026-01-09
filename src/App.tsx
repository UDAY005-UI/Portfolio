import './App.css'
import Navbar from './components/layout/navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Academics from './components/sections/Academics';
import Contact from './components/sections/Contact';
import Footer from './components/layout/footer';

function App() {
    return (
      <>
      <Navbar/> 
      <div className='overflow-x-hidden flex flex-col'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Academics/>
      <Contact/>
      </div>
      <Footer/>
      </>
    )
}

export default App
