import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSquareArrowUpRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { getAllJobAPI } from '../../services/allAPI';

const Careers = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [allJobs, setAllJobs] = useState([])
  const [searchKey, setSearchKey] = useState("")

  useEffect(() => {
    getAllJobs()
  }, [searchKey])

  const getAllJobs = async () => {
    try {
      const result = await getAllJobAPI(searchKey)
      if (result.status == 200) {
        setAllJobs(result.data)
      } else {
        console.log(result);
        
      }
    } catch (err) {
      console.log(err);

    }
  }


  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col items-center px-4 py-5">
        {/* Heading */}
        <h1 className="text-3xl font-semibold mb-4">Careers</h1>
        <p className="text-center md:px-40 text-gray-600 mb-10">
          At <span className="font-semibold text-gray-700">BookStore</span>, we believe great things happen when people who love stories work together. <br />
          Our culture celebrates creativity, curiosity, and a shared love for books. <br />
          From customer care to content creation, every role adds a new chapter to our success. <br />
          We value learning, collaboration, and a spirit of exploration. <br />
          Come grow with us and help write the next story worth telling.
        </p>

        {/* Current Openings */}
        <div className="w-full max-w-5xl">
          <h2 className="text-lg font-semibold mb-4">Current Openings</h2>

          {/* Search bar */}
          <div className="flex items-center gap-2 mb-8">
            <input onChange={e => setSearchKey(e.target.value)} type="text" placeholder="Job Title" className="border border-gray-300 px-3 py-2 rounded-md flex-1" />
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
              Search
            </button>
          </div>

          {/* duplicating Job Card */}
          {
            allJobs?.length > 0 ?
              allJobs.map(job => (
                <div key={job?._id} className="bg-white mt-10 shadow-md rounded-md p-5">
                  <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h3 className="font-semibold text-lg">{job?.title}</h3>
                    <button onClick={() => setModalStatus(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-1">
                      Apply
                      <FontAwesomeIcon size='2x' icon={faSquareArrowUpRight} /></button>
                  </div>

                  {/* Job Details */}
                  <div className="space-y-2 text-base text-gray-700">
                    <p className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faLocationDot} className="text-blue-500" /> {job?.location}
                    </p>
                    <p>
                      <span className="font-semibold">Job Type :</span> {job?.jobType}
                    </p>
                    <p>
                      <span className="font-semibold">Salary :</span> {job?.salary}
                    </p>
                    <p>
                      <span className="font-semibold">Qualification :</span> {job?.qualification}
                    </p>
                    <p>
                      <span className="font-semibold">Experience :</span> {job?.experience}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-600 text-justify leading-relaxed text-base
                  ">
                    <span className="font-semibold text-gray-800"> Description :</span> {job?.description}
                  </p>
                </div>
              ))
              :
              <p>No Job Openings..</p>

          }
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
                  <input type="text" placeholder="Email ID" className="w-full border mb-3 rounded px-3 py-2" />
                  <input type="email" placeholder="Qualification" className="w-full border mb-3 rounded px-3 py-2" />
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
