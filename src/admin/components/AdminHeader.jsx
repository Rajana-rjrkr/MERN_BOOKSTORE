import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
    return (
        <>
            <div className='flex justify-between p-3 md:px-40'>
                {/* logo */}
                <div className='flex items-center'>
                    <img width={'50px'} src="/logo.png" alt="logo" />
                    <h1 className="font-bold ml-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"> BookStore</h1>
                </div>

                {/* login link      */}
                <div className='flex gap-2 justify-end items-center text-lg sm:text-xl'>
                    <Link to={'/login'}><button className='border border-black rounded px-3 py-2 ms-3 hover:bg-slate-900 hover:text-white'><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button></Link>
                </div>
            </div>
            {/* Marquee  */}
            <div className='w-full bg-slate-900 text-white p-1'>
                <marquee>Welcome, Admin!  You're' all set to manage and monitor the system. Let's get to work!</marquee>
            </div>
        </>
    )
}

export default AdminHeader
