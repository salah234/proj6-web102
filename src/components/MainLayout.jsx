
import Header  from './Header'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import { Outlet } from 'react-router-dom';


function MainLayout() {

return (
        <>
        <div className='sidebar'>
        <Header/>
        <NavBar/>
        </div>
        <div className='main-outlet'>
            <Outlet></Outlet>
        </div>
        </>
    )
}


export default MainLayout;
