import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card';
import List from './List';

const API_KEY = import.meta.env.VITE_API_KEY



function Dashboard () {
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
                const URL = `https://api.weatherbit.io/v2.0/history/daily?city=Minneapolis&start_date=${startDate}&end_date=${endDate}&key=${API_KEY}`;
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
        <div>
            <h2>Weather for Minneapolis</h2>
            {loading && <p>Loading Data....</p>}
            {error && <p>Error Occurred: {error.message}</p>}
            {!loading && !error && (
                <>
                <div className='dashboard-container'>
                    <div className='card-container'>
                        <Card data={data} value={"temp"} type={" 🌡️ Max Temperature"}></Card>
                        <Card data={data} value={"wind_spd"} type={"💨 Wind Speed"}></Card>
                        <Card data={data} value={"precip"} type={" ☔️ mm of Precipitation/Hr"}></Card>

                    </div>
                    <div className='list-container'>
                        <List data={data}></List>
                    </div>
               
                
                </div>
                </>
            )}
        </div>
        
        </>
    );
}


export default Dashboard;

