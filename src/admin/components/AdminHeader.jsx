import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
    return (
        <>
            <div className='grid grid-cols-2 p-3'>
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
            <div className='text-center bg-slate-900 text-white p-1'>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed">Welcome, Admin!  You're' all set to manage and monitor the system. Let's get to work!</p>
            </div>
        </>
    )
}

export default AdminHeader
