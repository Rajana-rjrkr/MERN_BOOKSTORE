import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    const [listStatus, setListStatus] = useState(false)
    return (
        <>
            <div className='grid grid-cols-3 p-3'>
                {/* logo */}
                <div className='flex items-center'>
                    <img width={'50px'} height={'50px'} src="/logo.png" alt="logo" />
                    <h1 className='text-5xl font-bold ms-2 md:hidden'>BookStore</h1>
                </div>
                {/* title  */}
                <div className='md:flex justify-center items-center hidden'>
                    <h1 className='text-5xl font-bold'>BookStore</h1>
                </div>
                {/* login  */}
                <div className='md:flex justify-end items-center hidden text-xl'>
                    <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faXTwitter} /></a>
                    <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faLinkedin} /></a>
                    {/* login link      */}
                    <Link to={'/login'}><button className='border border-black rounded px-3 py-2 ms-3 hover:bg-slate-900 hover:text-white'><FontAwesomeIcon icon={faUser} className='me-2' />Login</button></Link>
                </div>
            </div>

            <nav className='w-full p-3 bg-slate-900 text-white text-lg md:flex justify-center items-center'>
                {/* menubar & login  */}
                <div className="flex justify-between items-center md:hidden">
                    <button onClick={() => setListStatus(!listStatus)}><FontAwesomeIcon icon={faBars} /></button>
                    {/* login link      */}
                    <Link to={'/login'}><button className='border border-white rounded px-3 py-2 ms-3 hover:bg-white  hover:text-black'><FontAwesomeIcon icon={faUser} className='me-2' />Login</button></Link>
                </div>
                <ul className={listStatus ? 'flex flex-col' : 'md:flex justify-center items-center hidden font-bold'}>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'}>HOME</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/all-books'}>BOOKS</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/careers'}>CAREERS</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'}>CONTACT</Link></li>
                </ul>
            </nav>

        </>
    )
}

export default Header
