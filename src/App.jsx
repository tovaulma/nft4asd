import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import Roadmap from './pages/roadmap/Roadmap'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <NotFound/>
      <Roadmap/>
    </BrowserRouter>
  )
}

export default App