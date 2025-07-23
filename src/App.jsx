import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './components/Home'
import Details from './components/Details'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MainLayout from './components/MainLayout'

{/* Add Some charts that shows a story from the data EX: precipation form the last 10 days or temp line chart of the previous 5 days*/}

const API_KEY = import.meta.env.VITE_API_KEY


{/* Building the Components */}

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchAllWeatherData = async () => {
          try {
              setLoading(true)
              const today = new Date()
              const pastDate = new Date()
              pastDate.setDate(today.getDate() - 10)
              const startDate = pastDate.toISOString().slice(0, 10);
              const endDate = today.toISOString().slice(0, 10);
              const URL = `https://api.weatherbit.io/v2.0/history/daily?city=Minneapolis&start_date=${startDate}&end_date=${endDate}&key=${API_KEY}&units=I`;
              const response = await axios.get(URL)
              if (response.status != 200) {
                  throw new Error(`HTTP Error status: ${response.status}`)
              }
              setData(response.data.data)
              console.log(response)
          } catch (error) {
              setError(error)
          
          } finally {
              setLoading(false);
          }
      };
      fetchAllWeatherData();
      }, []);
  

  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Home data={data} loading={loading} error={error}/>} />
        <Route path="details/:dateID" element={<Details data={data}/>}/>
      </Route>
      
    </Routes>
    </>
  )
}

export default App
