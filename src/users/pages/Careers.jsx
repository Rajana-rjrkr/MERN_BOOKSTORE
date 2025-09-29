import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSquareArrowUpRight, faXmark } from "@fortawesome/free-solid-svg-icons";

const Careers = () => {
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col items-center px-4 py-5">
        {/* Heading */}
        <h1 className="text-3xl font-semibold mb-4">Careers</h1>
        <p className="text-center md:px-40 text-gray-600 mb-10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores fuga, modi vel accusantium magnam ex, ratione aliquam eius odit consequuntur earum, itaque nulla labore veritatis quis autnn atque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero cupiditate, qui ab ducimus similique aut molestiae laborum dignissimos assumenda ipsam quis quos dolor facere quo, saepe vel optio minima!
        </p>

        {/* Current Openings */}
        <div className="w-full max-w-5xl">
          <h2 className="text-lg font-semibold mb-4">Current Openings</h2>

          {/* Search bar */}
          <div className="flex items-center gap-2 mb-8">
            <input type="text" placeholder="Job Title" className="border border-gray-300 px-3 py-2 rounded-md flex-1" />
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
              Search
            </button>
          </div>

          {/* duplicating Job Card */}
          <div className="bg-white shadow-md rounded-md p-5">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="font-semibold text-lg">Job Title</h3>
              <button onClick={() => setModalStatus(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-1">
                Apply
                <FontAwesomeIcon size='2x' icon={faSquareArrowUpRight} /></button>
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
      </div>

      {/* Modal */}
      {
        modalStatus && (
          <div className="fixed inset-0 bg-gray-500/75 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
              {/* Header */}
              <div className="bg-slate-900 text-white flex justify-between items-center p-3 rounded-t-lg">
                <h1 className="text-lg font-semibold">Application Form</h1>
                <button onClick={() => setModalStatus(false)}>
                  <FontAwesomeIcon icon={faXmark} className="text-white hover:text-slate-300" />
                </button>
              </div>

              {/* Form */}
              <form className="p-6 space-y-4">
                {/* Inputs */}
                <div className="md:grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Full name" className="w-full border mb-3 rounded px-3 py-2" />
                  <input type="text" placeholder="Qualification" className="w-full border mb-3 rounded px-3 py-2" />
                  <input type="email" placeholder="Email ID" className="w-full border mb-3 rounded px-3 py-2" />
                  <input type="tel" placeholder="Phone" className="w-full border mb-3 rounded px-3 py-2" />
                  {/* Cover Letter */}
                  <div className='col-span-2'>
                    <textarea placeholder="Cover Letter" rows="4" className="w-full border rounded px-3 py-2 ">
                    </textarea></div>
                  {/* File Upload */}
                  <div className='col-span-2'>
                    <label htmlFor="">Resume</label>
                    <input type="file" id='' name='' className='w-full border rounded file:p-1 file:bg-gray-200 ' />
                  </div>
                </div>


                {/* Buttons */}
                <div className="flex justify-end space-x-4 pt-4">
                  <button type="reset" className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded">
                    Reset
                  </button>
                  <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      <Footer />
    </>
  )
}

export default Careers
