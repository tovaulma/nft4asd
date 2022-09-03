import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Autism from './pages/autism/Autism'
import NotFound from './pages/notFound/NotFound'
import Roadmap from './pages/roadmap/Roadmap'
import Login from './pages/login/NFT'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='autism' element={<Autism/>}/>
        <Route path='roadmap' element={<Roadmap/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App