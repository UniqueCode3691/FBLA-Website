import './App.css'
import AboutUs from './pages/AboutUs.jsx'
import Home from './pages/Home.jsx'
import BoxOffice from './pages/BoxOffice.jsx'
import Rentals from './pages/Rentals.jsx'
import Info from './pages/Info.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/box-office" element={<BoxOffice />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  )
}
