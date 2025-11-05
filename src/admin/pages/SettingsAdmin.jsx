import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import AdminSidebar from '../components/AdminSidebar'
import SERVERURL from '../../services/serverURL'
import { toast, ToastContainer } from 'react-toastify'
import { updateAdminProfileAPI } from '../../services/allAPI'
import { useContext } from 'react'
import { adminUpdateContext } from '../../contextAPI/ContextShare'

const SettingsAdmin = () => {
    const [adminDetails, setAdminDetails] = useState({ username: "", password: "", cpassword: "", profile: "" })
    const [token, setToken] = useState("")
    const [existingProfile, setExistingProfile] = useState("")
    const [preview, setPreview] = useState("")
    const { setAdminEditResponse} = useContext(adminUpdateContext)

    console.log(adminDetails);


    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const adminToken = sessionStorage.getItem("token")
            setToken(adminToken)
            const admin = JSON.parse(sessionStorage.getItem("user"))
            setAdminDetails({...adminDetails,username: admin.username, password: admin.password, cpassword: admin.password, })
            setExistingProfile(admin.profile)
        }
    }, [])

    const handlePictureUpload = (e) => {
        setAdminDetails({ ...adminDetails, profile: e.target.files[0] })
        const url = URL.createObjectURL(e.target.files[0])
        setPreview(url)
    }

    const handleReset = () => {
        const admin = JSON.parse(sessionStorage.getItem("user"))
        setAdminDetails({ profile:"",username: admin.username, password: admin.password, cpassword: admin.password, })
        setExistingProfile(admin.profile)
        setPreview("")
    }

    const handleUpdate = async () => {
        const { username, password, cpassword, profile } = adminDetails
        if (!username || !password || !cpassword ) {
            toast.info("Please fill the form completely")
        } else {
            if (password != cpassword) {
                toast.warning("Password & Confirm Password must be the same")
                handleReset()
            } else {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }
                const reqBody = new FormData()
                if(preview){
                     for (let key in adminDetails){
                        reqBody.append(key,adminDetails[key])
                     }
                     const result = await updateAdminProfileAPI(reqBody,reqHeader)
                     if(result.status == 200){
                        toast.success("Profile Updated Succesfully")
                        sessionStorage.setItem("user",JSON.stringify(result.data))
                        setAdminEditResponse(result.data)
                        handleReset()
                     }else{
                        toast.error("Something went wrong")
                        console.log(result);
                        
                     }
                }else{
                    const result = await updateAdminProfileAPI({username,password,cpassword,profile:existingProfile},reqHeader)
                     if(result.status == 200){
                        toast.success("Profile Updated Succesfully")
                        sessionStorage.setItem("user",JSON.stringify(result.data))
                        setAdminEditResponse(result.data)
                        handleReset()
                     }else{
                        toast.error("Something went wrong")
                        console.log(result);
                        
                     }
                }
            }
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
                    <p className="text-3xl font-semibold text-center my-10">Settings</p>
                    <div className="md:grid grid-cols-2 gap-5 m-5">
                        <div className='p-5 text-justify'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aperiam ad tenetur. Ad ipsam libero nobis ratione tempore distinctio vero explicabo! Soluta perspiciatis ratione similique illum voluptatum necessitatibus veritatis delectus quidem, neque quis sapiente aperiam placeat consequuntur officiis rem numquam.</p>
                            <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id labore minima accusantium reiciendis pariatur ipsum voluptate beatae tempora dicta temporibus. Quas sunt corporis vero amet facilis corrupti, ullam sed pariatur earum. Placeat modi aliquam temporibus earum aperiam voluptates unde quod, debitis praesentium veniam hic sequi ipsa quisquam nostrum! Officia, explicabo?</p>
                            <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id labore minima accusantium reiciendis pariatur ipsum voluptate beatae tempora dicta temporibus. </p>
                        </div>

                        <div className="bg-gray-200 p-5 flex flex-col items-center">
                            <input onChange={e => handlePictureUpload(e)} type="file" name='' id='adminPic' className='hidden' />
                            <label htmlFor="adminPic">
                                {
                                    existingProfile == "" ?
                                        <img style={{ width: "200px", height: "200px", borderRadius: "50%" }} src={preview ? preview : "https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png"} alt="admin Profile" />
                                        :
                                        <img style={{ width: "200px", height: "200px", borderRadius: "50%" }} src={preview ? preview : `${SERVERURL}/uploads/${existingProfile}`} alt="admin Profile" />
                                }
                                <FontAwesomeIcon style={{ marginLeft: "130px", marginTop: "-100px" }} className="bg-yellow-500 p-2 text-white rounded" icon={faPen} />
                            </label>

                            <div className="mb-3 w-full">
                                <div className='mb-3'>
                                    <input value={adminDetails.username} onChange={e => setAdminDetails({ ...adminDetails, username: e.target.value })}
                                    type="text"
                                    placeholder="Username"
                                    className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600 " />
                                </div>
                                <div className='mb-3'>
                                    <input value={adminDetails.password} onChange={e => setAdminDetails({ ...adminDetails, password: e.target.value })}
                                    type="text"
                                    placeholder="Password"
                                    className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600 " />
                                </div>
                                <div className='mb-3'>
                                    <input value={adminDetails.cpassword} onChange={e => setAdminDetails({ ...adminDetails, cpassword: e.target.value })}
                                    type="text"
                                    placeholder="Confirm Password"
                                    className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600 " />
                                </div>
                            </div>


                            <div className='flex mt-4 gap-4'>
                                <button onClick={handleReset}
                                    type="reset"
                                    className="bg-yellow-400 text-white p-2 rounded-md hover:bg-yellow-500"
                                >
                                    Reset
                                </button>
                                <button onClick={handleUpdate}
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}

export default SettingsAdmin
