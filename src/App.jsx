import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import Navbar from './components/Navbar'
import SpaceBackground from './components/space/SpaceBackground'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <SpaceBackground/>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App