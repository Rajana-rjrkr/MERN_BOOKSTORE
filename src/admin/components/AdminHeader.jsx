import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SERVERURL from '../../services/serverURL'
import { adminUpdateContext } from '../../contextAPI/ContextShare'
import { userAuthContext } from '../../contextAPI/AuthContext'

const AdminHeader = () => {
    const { role, authorisedUser,setAuthorisedUser } = useContext(userAuthContext)
    const [token, setToken] = useState("")
    const [adminDp, setadminDp] = useState("")
    const navigate = useNavigate()
    const { adminEditResponse } = useContext(adminUpdateContext)
    const [dropDownStatus, setDropDownStatus] = useState(false)
    

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            setToken(token)
            const admin = JSON.parse(sessionStorage.getItem("user"))
            setadminDp(admin.profile)
        }
    }, [token, adminEditResponse])

    const logout = () => {
        sessionStorage.clear()
        setAuthorisedUser(false)
        setToken("")
        setadminDp("")
        setDropDownStatus(false)
        navigate('/login')
    }

    return (
        <>
            <div className='flex justify-between p-3 md:px-40'>
                {/* logo */}
                <div className='flex items-center'>
                    <img width={'50px'} src="/logo.png" alt="logo" />
                    <h1 className="font-bold ml-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"> BookStore</h1>
                </div>

                {/* login link      */}
                {!token ?
                    <div className='flex gap-2 justify-end items-center text-lg sm:text-xl'>
                        <button onClick={logout} className='border border-black rounded px-3 py-2 ms-3 hover:bg-slate-900 hover:text-white'><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>
                    </div>
                    :
                    <div>
                        <div onClick={() => setDropDownStatus(!dropDownStatus)}>
                            <img width={'40px'} src={adminDp == "" ? "https://thumb.ac-illust.com/51/51e1c1fc6f50743937e62fca9b942694_t.jpeg" : `${SERVERURL}/uploads/${adminDp}`} alt="user" />
                        </div>
                        {dropDownStatus &&
                            <div className='absolute right-0 z-10 mt-2 w-40 origin-top-right bg-white shadow-lg ring-1 rounded-md ring-black/5 focus:outline-hidden'>
                                <div className="py-1">
                                    <button onClick={logout} className='block px-4 py-2 text-sm text-gray-700'><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
            {/* Marquee  */}
            <div className='w-full bg-slate-900 text-white p-1'>
                <marquee>Welcome, Admin!  You're' all set to manage and monitor the system. Let's get to work!</marquee>
            </div>
        </>
    )
}

export default AdminHeader
