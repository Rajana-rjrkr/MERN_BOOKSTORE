import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center px-6 py-3 '>
                    <div className='flex items-center gap-2'>
                        <img width={'50px'} src="/logo.png" alt="" />
                    </div>
                    <h1 className='text-5xl ms-40 font-bold tracking-wide'>BookStore</h1>


                    {/* icons */}
                    <div className=" hidden md:flex items-center gap-3 text-2xl text-black-900">
                        <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <Link to={'/login'}><img width={'50px'} src="https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png" alt="" /></Link>
                    </div>
                </div>
                <div className=' flex justify-center gap-10 text-lg items-center py-3 w-full bg-slate-900 text-white font-semibold'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/all-books'}>Books</Link>
                    <Link to={'/careers'}>Careers</Link>
                    <Link to={'/contact'}>Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Header
