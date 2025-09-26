import { faBook, faBriefcase, faHouse, faScrewdriverWrench, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
    const [listStatus, setListStatus] = useState(false)
    return (
        <>
            <div className='bg-gray-200 min-h-screen flex flex-col text-center py-15'>
                <div className='flex justify-center'><img style={{ width: "100px", height: "100px", borderRadius: "50%" }} src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png" alt="admin" /></div>
                <h1 className='py-5'>Admin Name</h1>
                <button onClick={() => setListStatus(!listStatus)} className='text-2xl md:hidden'><FontAwesomeIcon icon={faBars} className='py-5' /></button>
                <div className={listStatus ? 'block' : 'md:block hidden'}>
                    <div className='mx-auto justify-center mt-10'>
                        <div className="mt-3 ">
                            <Link to={'/admin-dashboard'}> <FontAwesomeIcon className='me-3' icon={faHouse} />Home</Link>
                        </div>

                        <div className="mt-3">
                            <Link to={'/all-books'}><FontAwesomeIcon className='me-3' icon={faBook} />All Books</Link>
                        </div>

                        <div className="mt-3">
                            <Link to={'/careers'}><FontAwesomeIcon icon={faBriefcase} className='me-3' />Careers</Link>
                        </div>

                        <div className="mt-3">
                            <Link to={'/admin-settings'}><FontAwesomeIcon icon={faScrewdriverWrench} className='me-3' />Settings</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar
