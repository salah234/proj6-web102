
import Header  from './Header'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import { Outlet } from 'react-router-dom';


function Home({data, loading, error}) {

return (
        <>
        <div className='dashboard'>
        <Dashboard data={data} loading={loading} error={error}/>
        <Outlet></Outlet>

        </div>
        </>
    )
}


export default Home;
