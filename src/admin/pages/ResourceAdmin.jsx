import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { Link } from 'react-router-dom'


const ResourceAdmin = () => {
    const [bookListStatus, setBookListStatus] = useState(true)
    const [usersListStatus, setUsersListStatus] = useState(false)
    return (
        <>
            <AdminHeader />
            <div className="md:grid grid-cols-5 gap-2">
                {/* Admin Sidebar  */}
                <div className=" col-span-1 ">
                    <AdminSidebar />
                </div>

                <div className="col-span-4">
                    <div className='py-10'>
                        <h1 className='text-center text-3xl'>All Resources</h1>
                    </div>
                    {/* tabs  */}
                    <div className="flex justify-center items-center my-8 font-medium text-lg">
                        <p onClick={() => { setBookListStatus(true); setUsersListStatus(false) }} className={bookListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Book List</p>
                        <p onClick={() => { setUsersListStatus(true); setBookListStatus(false) }} className={usersListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Users</p>
                    </div>
                    {/* contents  */}
                    {
                        bookListStatus &&

                        <div className="col-span-3">
                            <div className="md:grid grid-cols-4">

                                <div className="shadow p-3 rounded mx-4">
                                    <img width={'100%'} height={'300px'} src="https://m.media-amazon.com/images/I/617lxveUjYL._UF1000,1000_QL80_.jpg" alt="book" />
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="text-blue-700 font-bold">Author</p>
                                        <p>Book Title</p>
                                        <Link to={'/books/:id/view'} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
                                    </div>
                                </div>

                                <div className="shadow p-3 rounded mx-4">
                                    <img width={'100%'} height={'300px'} src="https://m.media-amazon.com/images/I/617lxveUjYL._UF1000,1000_QL80_.jpg" alt="book" />
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="text-blue-700 font-bold">Author</p>
                                        <p>Book Title</p>
                                        <Link to={'/books/:id/view'} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
                                    </div>
                                </div>

                                <div className="shadow p-3 rounded mx-4">
                                    <img width={'100%'} height={'300px'} src="https://m.media-amazon.com/images/I/617lxveUjYL._UF1000,1000_QL80_.jpg" alt="book" />
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="text-blue-700 font-bold">Author</p>
                                        <p>Book Title</p>
                                        <Link to={'/books/:id/view'} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
                                    </div>
                                </div>

                                <div className="shadow p-3 rounded mx-4">
                                    <img width={'100%'} height={'300px'} src="https://m.media-amazon.com/images/I/617lxveUjYL._UF1000,1000_QL80_.jpg" alt="book" />
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="text-blue-700 font-bold">Author</p>
                                        <p>Book Title</p>
                                        <Link to={'/books/:id/view'} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    }

                    {
                        usersListStatus &&


                        <div className="md:grid grid-cols-3 w-full my-5">
                            {/* duplicate card */}
                            <div className="shadow p-3 p-3 rounded mx-4 bg-gray-200">
                                <p className='text-red-600 font-bold text-lg'>ID: 67db016f0901e0a56c1adf62</p>
                                <div className="flex flex-col items-center">
                                    <img width={'100px'} height={'100px'} style={{ borderRadius: '50%' }} src="https://thumb.ac-illust.com/51/51e1c1fc6f50743937e62fca9b942694_t.jpeg" alt="" />
                                </div>
                                <div className="flex flex-col text-lg ml-6">
                                    <p className='text-blue-600'>Username</p>
                                    <p>Email ID</p>
                                </div>
                            </div>
                        </div>

                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ResourceAdmin
