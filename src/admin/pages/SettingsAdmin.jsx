import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBriefcase, faCircleUser, faScrewdriverWrench, faHouse, faPen } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const SettingsAdmin = () => {
    const [listStatus, setListStatus] = useState(false)
    return (
        <div>
            <AdminHeader />
            <div className="md:grid grid-cols-3 gap-4">
                <div className="bg-gray-200 flex flex-col justify-center items-center py-20">
                    <FontAwesomeIcon icon={faCircleUser} className="text-gray-400" style={{ width: '30%', height: '30%' }}
                                />
                    <p className='py-5'>Username</p>
                    <button onClick={() => setListStatus(!listStatus)} className='text-2xl md:hidden'><FontAwesomeIcon icon={faBars} className='py-5' /></button>
                    <div className={listStatus ? 'block' : 'md:block hidden'}>
                        <div className="mt-3">
                            <input type="radio" name='filter' id='Username' />
                            <label className='ms-3 ' htmlFor="Literary"><FontAwesomeIcon className='me-3' icon={faHouse} />Home</label>
                        </div>

                        <div className="mt-3">
                            <input type="radio" name='filter' id='Username' />
                            <label className='ms-3' htmlFor="Literary"><FontAwesomeIcon className='me-3' icon={faBook} />All Books</label>
                        </div>

                        <div className="mt-3">
                            <input type="radio" name='filter' id='Username' />
                            <label className='ms-3' htmlFor="Literary"><FontAwesomeIcon icon={faBriefcase} className='me-3' />Careers</label>
                        </div>

                        <div className="mt-3">
                            <input type="radio" name='filter' id='Username' />
                            <label className='ms-3' htmlFor="Literary"><FontAwesomeIcon icon={faScrewdriverWrench} className='me-3' />Settings</label>
                        </div>

                    </div>
                </div>
                <div className="col-span-2">
                    <p className="text-3xl font-semibold text-center pt-10">Settings</p>
                    <div className="md:grid grid-cols-2 p-7">
                        <div className='p-5 text-justify'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aperiam ad tenetur. Ad ipsam libero nobis ratione tempore distinctio vero explicabo! Soluta perspiciatis ratione similique illum voluptatum necessitatibus veritatis delectus quidem, neque quis sapiente aperiam placeat consequuntur officiis rem numquam.</p>
                            <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id labore minima accusantium reiciendis pariatur ipsum voluptate beatae tempora dicta temporibus. Quas sunt corporis vero amet facilis corrupti, ullam sed pariatur earum. Placeat modi aliquam temporibus earum aperiam voluptates unde quod, debitis praesentium veniam hic sequi ipsa quisquam nostrum! Officia, explicabo?</p>
                            <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id labore minima accusantium reiciendis pariatur ipsum voluptate beatae tempora dicta temporibus. </p>
                        </div>
                        <div className="bg-gray-200 p-5 rounded-md shadow-md">
                            <div className="relative flex items-center justify-center">
                                <FontAwesomeIcon icon={faCircleUser} className="text-gray-400" style={{ width: '25%', height: '25%' }}
                                />
                                <span className="absolute bottom-1 right-25 md:right-43 bg-yellow-400 px-1 shadow">
                                    <FontAwesomeIcon icon={faPen} className="text-gray-700 text-sm" />
                                </span>
                            </div>
                            <form className="flex flex-col gap-4 py-2">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="px-3 py-2 bg-white border rounded-md "
                                />
                                <input
                                    type="Password"
                                    placeholder="Password"
                                    className="px-3 py-2 bg-white border rounded-md "
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="px-3 py-2 bg-white border rounded-md "
                                />
                                <div className='flex justify-between gap-4'>
                                    <button
                                        type="reset"
                                        className="w-1/2 bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-500"
                                    >
                                        Reset
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-1/2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SettingsAdmin
