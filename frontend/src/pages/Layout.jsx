import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex min-h-screen'>
        <Sidebar />
        <div className='flex-1 ml-72 min-w-0'>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout