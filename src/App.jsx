import About from "./components/About"
import Hero from "./components/Hero"

const App = () => {
  return (
    <div className='min-h-screen  w-screen relative overflow-x-hidden'>
      <Hero/>
      <About/>
    </div>
  )
}

export default App