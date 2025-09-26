import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import AdminSidebar from '../components/AdminSidebar'

const SettingsAdmin = () => {

    return (
        <>
            <AdminHeader />
            <div className="md:grid grid-cols-5 gap-2">
                {/* Admin Sidebar  */}
                <div className=" col-span-1 ">
                    <AdminSidebar />
                </div>

                <div className="col-span-4">
                    <p className="text-3xl font-semibold text-center my-10">Settings</p>
                    <div className="md:grid grid-cols-2 gap-5 m-5">
                        <div className='p-5 text-justify'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aperiam ad tenetur. Ad ipsam libero nobis ratione tempore distinctio vero explicabo! Soluta perspiciatis ratione similique illum voluptatum necessitatibus veritatis delectus quidem, neque quis sapiente aperiam placeat consequuntur officiis rem numquam.</p>
                            <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id labore minima accusantium reiciendis pariatur ipsum voluptate beatae tempora dicta temporibus. Quas sunt corporis vero amet facilis corrupti, ullam sed pariatur earum. Placeat modi aliquam temporibus earum aperiam voluptates unde quod, debitis praesentium veniam hic sequi ipsa quisquam nostrum! Officia, explicabo?</p>
                            <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id labore minima accusantium reiciendis pariatur ipsum voluptate beatae tempora dicta temporibus. </p>
                        </div>

                        <div className="bg-gray-200 p-5 flex flex-col items-center">
                            <input type="file" name='' id='adminPic' className='hidden' />
                            <label htmlFor="adminPic">
                                <img style={{ width: "200px", height: "200px", borderRadius: "50%" }} src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png" alt="admin Profile" />
                                <FontAwesomeIcon style={{ marginLeft: "130px", marginTop: "-100px" }} className="bg-yellow-500 p-2 text-white rounded" icon={faPen} />
                            </label>

                            <div className="mb-3 w-full">
                                <div className='mb-3'><input
                                    type="text"
                                    placeholder="Username"
                                    className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600 "/>
                                </div>
                                <div className='mb-3'><input
                                    type="password"
                                    placeholder="Password"
                                    className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600 "/>
                                </div>
                                <div className='mb-3'><input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600 "/>
                                </div>
                            </div>
                            

                            <div className='flex mt-4 gap-4'>
                                <button
                                    type="reset"
                                    className="bg-yellow-400 text-white p-2 rounded-md hover:bg-yellow-500"
                                >
                                    Reset
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
                                >
                                    Submit
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SettingsAdmin
