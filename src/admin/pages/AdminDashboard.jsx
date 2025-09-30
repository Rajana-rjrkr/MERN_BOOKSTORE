import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons'

const AdminDashboard = () => {
    return (
        <>
            <AdminHeader />
            <div className="md:grid grid-cols-5 gap-2">
                {/* Admin Sidebar  */}
                <div className=" col-span-1 ">
                    <AdminSidebar />
                </div>

                <div className="col-span-4 p-10">
                    <div className="md:grid grid-cols-3">

                        <div className="md:px-5 my-5 md:my-0">
                            <div className="bg-blue-900 rounded p-4 flex text-5xl items-center text-white">
                                <FontAwesomeIcon icon={faBook} />
                                <div className='text-center ms-10 md:ms-0'>
                                    <h3 className='text-xl'>Total Number of Books</h3>
                                    <h3 className='text-4xl'>100+</h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="md:px-5 my-5 md:my-0">
                            <div className="bg-green-800 rounded p-4 flex text-5xl items-center text-white">
                                <FontAwesomeIcon icon={faUsers} />
                                <div className='text-center ms-10 md:ms-0'>
                                    <h3 className='text-xl'>Total Number of Users</h3>
                                    <h3 className='text-4xl'>100+</h3>
                                </div>
                            </div>
                        </div>

                        <div className="md:px-5 my-5 md:my-0">
                            <div className="bg-yellow-600 rounded p-4 flex text-5xl items-center text-white">
                                <FontAwesomeIcon icon={faUserTie} />
                                <div className='text-center ms-10 md:ms-0'>
                                    <h3 className='text-xl'>Total Number of Employee</h3>
                                    <h3 className='text-4xl'>100+</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="md:grid grid-cols-2 p-5 my-5">
                        <div className='my-5 md:my-0'>Bar Graph</div>
                        <div className='my-5 md:my-0'>Pie Chart</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminDashboard
