import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faBars, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SERVERURL from '../../services/serverURL'
import { userUpdateContext } from '../../contextAPI/ContextShare'

const Header = () => {
    const [listStatus, setListStatus] = useState(false)
    const [token, setToken] = useState("")
    const [userDp, setUserDp] = useState("")
    const [dropDownStatus, setDropDownStatus] = useState(false)
    const navigate = useNavigate()
    const { userEditResponse } = useContext(userUpdateContext)

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            setToken(token)
            const user = JSON.parse(sessionStorage.getItem("user"))
            setUserDp(user.profile)
        }
    }, [token, userEditResponse])

    const logout = () => {
        sessionStorage.clear()
        setToken("")
        setUserDp("")
        setDropDownStatus(false)
        navigate('/')
    }

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
                    {!token ?
                        <Link to={'/login'}><button className='border border-black rounded px-3 py-2 ms-3 hover:bg-slate-900 hover:text-white'><FontAwesomeIcon icon={faUser} className='me-2' />Login</button></Link>
                        :
                        <div className='relative inline-block text-left'>
                            <button onClick={() => setDropDownStatus(!dropDownStatus)} className='w-full px-3 py-2 bg-white shadow-xs hover:bg-gray-50'>
                                <img width={'40px'} src={userDp == "" ? "https://thumb.ac-illust.com/51/51e1c1fc6f50743937e62fca9b942694_t.jpeg" : userDp.startsWith("https://lh3.googleusercontent.com") ? userDp : `${SERVERURL}/uploads/${userDp}`} alt="user" />
                            </button>
                            {dropDownStatus &&
                                <div className='absolute right-0 z-10 mt-2 w-40 origin-top-right bg-white shadow-lg ring-1 rounded-md ring-black/5 focus:outline-hidden'>
                                    <div className="py-1">
                                        <Link className='block px-4 py-2 text-sm text-gray-700' to={'/profile'}><FontAwesomeIcon icon={faAddressCard} className='me-2' />Profile</Link>
                                        <button onClick={logout} className='block px-4 py-2 text-sm text-gray-700'><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>

            <nav className='w-full p-3 bg-slate-900 text-white text-lg md:flex justify-center items-center'>
                {/* menubar & login  */}
                <div className="flex justify-between items-center md:hidden">
                    <button onClick={() => setListStatus(!listStatus)}><FontAwesomeIcon icon={faBars} /></button>
                    {/* login link      */}
                    {!token ? (
                        <Link to={'/login'}>
                            <button className='border border-white rounded px-3 py-2 hover:bg-white hover:text-black'>
                                <FontAwesomeIcon icon={faUser} className='me-2' />Login
                            </button>
                        </Link>
                    ) : (
                        <div className='relative'>
                            <button
                                onClick={() => setDropDownStatus(!dropDownStatus)}
                                className='px-3 py-2 bg-white text-black rounded-md'
                            >
                                <img
                                    width={'35px'}
                                    className='rounded-full'
                                    src={
                                        userDp === ""
                                            ? "https://thumb.ac-illust.com/51/51e1c1fc6f50743937e62fca9b942694_t.jpeg"
                                            : userDp.startsWith("https://lh3.googleusercontent.com")
                                                ? userDp
                                                : `${SERVERURL}/uploads/${userDp}`
                                    }
                                    alt="user"
                                />
                            </button>
                            {dropDownStatus && (
                                <div className='absolute right-0 z-10 mt-2 w-36 bg-white text-black rounded-md shadow-lg ring-1 ring-black/5'>
                                    <Link to={'/profile'} className='block px-3 py-2 hover:bg-gray-100'>
                                        <FontAwesomeIcon icon={faAddressCard} className='me-2' />Profile
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className='block w-full text-left px-3 py-2 hover:bg-gray-100'
                                    >
                                        <FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
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
