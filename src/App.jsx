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
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='roadmap' element={<Roadmap/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App