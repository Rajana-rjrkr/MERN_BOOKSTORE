import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 bg-slate-900 text-white px-10 p-15">
                <div>
                    <p className='text-lg font-semibold mb-3'>ABOUT US</p>
                    <p className='text-justify'>We believe every book holds a new journey waiting to be explored. From timeless classics to the latest bestsellers, our shelves are filled with stories that inspire, educate, and entertain. We aim to create a welcoming space for readers, dreamers, and learners, where the love for books connects us all. Because every great adventure begins with a book.</p>
                </div>


                <div>
                    <p className="text-lg font-semibold mb-3">NEWSLETTER</p>
                    <p className="">Stay updated with our latest trends</p>

                    <div className="flex mt-4 w-full max-w-sm">
                        <input type="email" className="p-1 border border-gray-300 flex-1 text-white" placeholder="Enter your email..."/>
                        <button className="bg-yellow-400 px-4 flex items-center justify-center hover:bg-yellow-500">
                            <FontAwesomeIcon icon={faArrowRight} className="text-black" />
                        </button>
                    </div>
                </div>


                <div>
                    <p className='text-lg font-semibold mb-3'>FOLLOW US</p>
                    <p>Lets us be social</p>
                    <div className='gap-5 flex mt-5 text-2xl'>
                        <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
            <div className="text-center text-white bg-black p-6">
                <p>Copyright &copy; 2023 All rights reserved | This website is made with by Luminar Technolab</p>
            </div>
        </>
    )
}

export default Footer
