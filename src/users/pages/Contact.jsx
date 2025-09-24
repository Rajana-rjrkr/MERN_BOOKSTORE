import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
faPaperPlane

const Contact = () => {
  return (
    <>
      <Header />
      <div className='w-full flex flex-col items-center px-4 py-5'>
        <h1 className="text-3xl font-semibold mb-4">CONTACTS</h1>
        <p className="text-center md:px-40 text-gray-600 mb-10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores fuga, modi vel accusantium magnam ex, ratione aliquam eius odit consequuntur earum, itaque nulla labore veritatis quis autnn atque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero cupiditate, qui ab ducimus similique aut molestiae laborum dignissimos assumenda ipsam quis quos dolor facere quo, saepe vel optio minima!
        </p>
      </div>
      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 px-10">
        {/* Address */}
        <div className="flex justify-center items-center gap-2">
          <FontAwesomeIcon style={{ borderRadius: "50%" }} icon={faLocationDot} className="text-2xl border border-none bg-gray-300 p-3 text-gray-700" />
          <p>123 Main Street, Apt 4B,<br /> Anytown, CA 91234</p>
        </div>

        {/* Phone */}
        <div className="flex justify-center items-center gap-2">
          <FontAwesomeIcon style={{ borderRadius: "50%" }} icon={faPhone} className="text-2xl border border-none bg-gray-300 p-3 text-gray-700" />
          <p>+91 9874561230</p>
        </div>

        {/* Email */}
        <div className="flex justify-center items-center gap-2">
          <FontAwesomeIcon style={{ borderRadius: "50%" }} icon={faEnvelope} className="text-2xl border border-none bg-gray-300 p-3 text-gray-700" />
          <p>Bookstore@gmail.com</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-40 px-10 p-15 mb-5">
        {/* Form */}
        <div className="bg-gray-200 p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold text-center mb-4">Send me Message</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="px-3 py-2 bg-white border rounded-md "
            />
            <input
              type="email"
              placeholder="Email ID"
              className="px-3 py-2 bg-white border rounded-md "
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="px-3 py-2 bg-white border rounded-md "
            ></textarea>
            <button
              type="submit"
              className="bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 flex items-center justify-center gap-2"
            >
              Send <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.541959175935!2d76.30948087813945!3d10.008897991648862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1758730313197!5m2!1sen!2sin"
            width="100%"
            height="118%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact
