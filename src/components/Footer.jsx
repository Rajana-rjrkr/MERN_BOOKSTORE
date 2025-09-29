import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <>
            <div className="md:grid grid-cols-3 md:gap-9 bg-slate-900 text-white p-10 ">
                <div>
                    <p className='font-bold '>ABOUT US</p>
                    <p className='text-justify mt-5'>We believe every book holds a new journey waiting to be explored. From timeless classics to the latest bestsellers, our shelves are filled with stories that inspire, educate, and entertain. We aim to create a welcoming space for readers, dreamers, and learners, where the love for books connects us all. Because every great adventure begins with a book.</p>
                </div>


                <div>
                    <p className="font-bold">NEWSLETTER</p>
                    <p className="my-5">Stay updated with our latest trends</p>

                    <div className="flex">
                        <input type="email" className="p-2 placeholder-gray-500 bg-white" placeholder="Enter your email..."/>
                        <button className="bg-yellow-400 p-2 px-3 hover:bg-yellow-500">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>


                <div>
                    <p className='font-bold'>FOLLOW US</p>
                    <p className='my-5'>Lets us be social</p>
                    <div className='flex text-2xl'>
                        <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href='' target='_blank' className="hover:text-slate-500"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
            <div className="text-center text-white bg-black p-6">
                <p>Copyright &copy; 2023 All rights reserved | This website is made with &#10084; by Luminar Technolab</p>
            </div>
        </>
    )
}

export default Footer
