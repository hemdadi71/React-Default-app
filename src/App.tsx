import './App.css'
import Home from 'src/pages/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/aboutUs'
import MainLayout from './components/MainLayout'
import SingleCharacter from './pages/SingleCharacter'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="/:id" element={<SingleCharacter />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
