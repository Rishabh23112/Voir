import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className='min-h-screen  w-screen relative overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App