
import Card from './Card';
import List from './List';
import DataViz from './dataViz';

const API_KEY = import.meta.env.VITE_API_KEY



function Dashboard ({data, loading, error}) {
   return (
        <>
        <div>
            <h2>Weather for Minneapolis</h2>
            {loading && <p>Loading Data....</p>}
            {error && <p>Error Occurred: {error.message}</p>}
            {!loading && !error && (
                <>
                <div className='main-dashboard-container'>
                    <div className='dashboard-container'>
                        <div className='card-container'>
                            <Card data={data} value={"temp"} type={" 🌡️ Max Temperature"}></Card>
                            <Card data={data} value={"wind_spd"} type={"💨 Wind Speed"}></Card>
                            <Card data={data} value={"precip"} type={" ☔️ in of Precipitation"}></Card>

                        </div>
                        <div className='list-container'>
                            <List data={data}></List>
                        </div>
                    </div>
                    <div className='visual-container'>
                        <DataViz data={data}></DataViz>
                    </div>
               
                
                </div>
                </>
            )}
        </div>
        
        </>
    );
}


export default Dashboard;

