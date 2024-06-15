// React
import { Route, Routes } from 'react-router-dom'

// Stlyes
import './App.css'

// Components
import Navbar from './assets/components/Navbar/Navbar'
import HomePage from './routes/HomePage'
import ProjectsPage from './routes/ProjectsPage'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path ='/' element={ <HomePage /> } />
          <Route path ='/projects' element={ <ProjectsPage /> } />
        </Routes>
      </main>
    </>  
    )
}

export default App
