import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquareArrowUpRight, faTrash } from '@fortawesome/free-solid-svg-icons'


const CareerAdmin = () => {
    const [jobListStatus, setJobListStatus] = useState(true)
    const [listApplicationStatus, setListApplicationStatus] = useState(false)
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
                        <p onClick={() => { setJobListStatus(true); setListApplicationStatus(false) }} className={jobListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Job Post</p>
                        <p onClick={() => { setListApplicationStatus(true); setJobListStatus(false) }} className={listApplicationStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>View Applicants</p>
                    </div>
                    {/* contents  */}
                    {
                        jobListStatus &&
                        <div>
                            <div className='flex justify-between items-center my-5'>
                                <div>
                                    <input type="text" placeholder="Search by Job Title" className="border border-gray-300 text-black w-75 px-3 py-2 rounded-l " />
                                    <button className="bg-green-600 text-white px-6 py-2 rounded-r hover:bg-green-700">
                                        Search
                                    </button>
                                </div>
                                <div>
                                    Add Job
                                </div>
                                {/* duplicate job opening */}
                            </div>
                            <div className=" md:mx-45 bg-white shadow rounded p-5">
                                <div className="flex justify-between items-center border-b pb-2 mb-4">
                                    <h3 className="font-semibold text-lg">Job Title</h3>
                                    <button className="bg-white-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white-500 flex items-center gap-1">
                                        Delete
                                        <FontAwesomeIcon size='2x' icon={faTrash} onClick={() => setCareerModal(true)} /></button>
                                </div>

                                {/* Job Details */}
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-blue-500" /> Location
                                    </p>
                                    <p>
                                        <span className="font-semibold">Job Type:</span> Senior Level
                                    </p>
                                    <p>
                                        <span className="font-semibold">Salary:</span> 10 lakhs
                                    </p>
                                    <p>
                                        <span className="font-semibold">Qualification:</span> M-Tech /B-Tech/BCA/MCA
                                    </p>
                                    <p>
                                        <span className="font-semibold">Experience:</span> 5-7
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="mt-4 text-gray-600 text-sm ">
                                    Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    }

                    {
                        listApplicationStatus &&


                        <div className="p-10 overflow-x-hidden">
                            <table className="w-full my-3 shadow">
                                <thead>
                                    <tr>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>SL No</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qualification</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Email</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-center border border-gray-500 p-3'>1</td>
                                        <td className='text-center border border-gray-500 p-3'>Frontend Developer</td>
                                        <td className='text-center border border-gray-500 p-3'>Max Miller</td>
                                        <td className='text-center border border-gray-500 p-3'>BCA</td>
                                        <td className='text-center border border-gray-500 p-3'>max@gmail.com</td>
                                        <td className='text-center border border-gray-500 p-3'>9876543210</td>
                                        <td className='text-center border border-gray-500 p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum omnis temporibus unde consectetur, aspernatur ab repellendus quasi at saepe eos.</td>
                                        <td className='text-center border border-gray-500 p-3'><Link className='text-blue-600 underline'>Resume</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CareerAdmin
