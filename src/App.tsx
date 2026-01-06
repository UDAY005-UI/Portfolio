import './App.css'
import Navbar from './components/layout/navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';

function App() {
    return (
      <>
      <Navbar/>
      <div className='flex flex-col'>
      <Hero/>
      <About/>
      </div>
      </>
    )
}

export default App
