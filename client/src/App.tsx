import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <>
      <div className="bg-amber-300">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App
