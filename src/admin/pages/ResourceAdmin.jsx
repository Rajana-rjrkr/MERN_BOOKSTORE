import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getAllUsersAPI, listAllBooksAPI } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL'


const ResourceAdmin = () => {
    const [bookListStatus, setBookListStatus] = useState(true)
    const [usersListStatus, setUsersListStatus] = useState(false)
    const [allUsers, setAllUsers] = useState([])
     // console.log(allUsers);
    // const [token, setToken] = useState("")
    const [userBooks, setUserBooks] = useState([])
    // console.log(userBooks);

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            if (bookListStatus == true) {
                getAllBooks(token)
            } else if (usersListStatus == true) {
                getAllUsers(token)
            } else {
                console.log("Something went wrong!!");

            }
        }
    }, [usersListStatus, bookListStatus])

    const getAllUsers = async (userToken) => {
        const reqHeader = {
            "Authorization": `Bearer ${userToken}`
        }
        try {
            const result = await getAllUsersAPI(reqHeader)
            if (result.status == 200) {
                setAllUsers(result.data)
            } else {
                console.log(result);
            }
        } catch (err) {
            console.log(err);

        }
    }

    const getAllBooks = async (userToken) => {
        const reqHeader = {
            "Authorization": `Bearer ${userToken}`
        }
        try {
            const result = await listAllBooksAPI(reqHeader)
            if (result.status == 200) {
                setUserBooks(result.data)
            } else {
                console.log(result);
            }
        } catch (err) {
            console.log(err);

        }
    }

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
                            <div className="md:grid grid-cols-4 gap-8 w-full my-10 px-6">
                                {
                                    userBooks?.length > 0 ?
                                        userBooks?.map((book, index) => (
                                            <div key={index} className="shadow p-3 rounded mx-4">
                                                <img width={'100%'} height={'300px'} src={book?.imageUrl} alt="book" />
                                                <div className="flex flex-col justify-center items-center">
                                                    <p className="text-blue-700 font-bold my-2">{book?.author.slice(0,20)}</p>
                                                    <p className='mb-2'>{book?.title.slice(0,20)}</p>
                                                    <Link to={`/books/${book?._id}/view`} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
                                                </div>
                                            </div>
                                        ))
                                        :
                                        <div className="text-center text-gray-600 col-span-3">No User Books Found</div>

                                }
                            </div>
                        </div>
                    }

                    {
                        usersListStatus &&

                        <div className="md:grid md:grid-cols-3 gap-8 w-full my-10 px-6">
                            {
                                allUsers?.length > 0 ?
                                    allUsers?.map((user, index) => (
                                        <div key={index} className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 p-6">
                                            <div className="flex justify-between items-center mb-4">
                                                <p className="text-gray-500 text-sm font-semibold">User ID</p>
                                                <span className="text-red-600 font-bold text-sm truncate">{user?._id}</span>
                                            </div>

                                            <div className="flex items-center gap-5">
                                                <img src={user?.profile ? `${SERVERURL}/uploads/${user?.profile}` : "https://tse3.mm.bing.net/th/id/OIP.1waDZ8Q2eWBkenMscI08qAHaHa?pid=Api&P=0&h=180"} alt="user" className="w-20 h-20 rounded-full border-4 border-blue-200 shadow-md object-cover" />
                                                <div className="flex flex-col">
                                                    <p className="text-blue-700 text-lg font-bold">{user?.username}</p>
                                                    <p className="text-gray-600 text-sm">{user?.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    <div className="text-center text-gray-600 col-span-3">No Users Found</div>
                            }
                        </div>


                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ResourceAdmin
