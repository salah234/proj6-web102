
import './App.css'
import Header  from './components/Header'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'


const API_KEY = import.meta.env.VITE_API_KEY


{/* Building the Components */}

function App() {
  

  return (
    <>
    <div className='sidebar'>
      <Header/>
      <NavBar/>
    </div>
    <div className='dashboard'>
      <Dashboard/>
     </div>
    </>
  )
}

export default App
