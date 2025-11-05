import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSquareArrowUpRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { addApplicationAPI, getAllJobAPI } from '../../services/allAPI';
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Careers = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [allJobs, setAllJobs] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [applicationDetails, setApplicationDetails] = useState({
    fullname: "", email: "", qualification: "", phone: "", coverLetter: "", resume: ""
  })
  console.log(applicationDetails);
  //reset resume input tag
  const [fileKey, setFileKey] = useState(Date.now())
  const navigate = useNavigate()
  const [jobTitle, setJobTitle] = useState("")
  const [jobId, setJobId] = useState("")

  useEffect(() => {
    getAllJobs()
  }, [searchKey])

  const handleApplyJob = (job)=>{
    setJobId(job._id)
    setJobTitle(job.title)
    setModalStatus(true)
  }

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

  const handleReset = () => {
    setApplicationDetails({
      fullname: "", email: "", qualification: "", phone: "", coverLetter: "", resume: ""
    })
    //reset resume input tag
    setFileKey(Date.now())
  }
  
  const handleSubmitApplication = async (e) => {
    e.preventDefault()
    const token = sessionStorage.getItem("token")
    const { fullname, email, qualification, phone, coverLetter, resume } = applicationDetails
    if (!token) {
      toast.info("Please Login First to apply Job")
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    } else if (!fullname || !email || !qualification || !phone || !coverLetter || !resume || !jobTitle || !jobId) {
      toast.info("Please fill the form completely")
    } else {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const reqBody = new FormData()
      for(let key in applicationDetails){
        reqBody.append(key,applicationDetails[key])
      }
      reqBody.append("jobTitle",jobTitle)
      reqBody.append("jobId",jobId)
      const result = await addApplicationAPI(reqBody,reqHeader)
      console.log(result);
      if(result.status==200){
        toast.success("Application submitted succesfully")
        handleReset()
        setModalStatus(false)
      }else if(result.status==409){
        toast.warning(result.response.data)
        handleReset()
      }else{
        toast.error("Somrthing went wrong")
        handleReset()
        setModalStatus(false)
      }
      
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
                    <button onClick={() => handleApplyJob(job)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-1">
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
                  <input value={applicationDetails.fullname} onChange={e => setApplicationDetails({ ...applicationDetails, fullname: e.target.value })} type="text" placeholder="Full name" className="w-full border mb-3 rounded px-3 py-2" />
                  <input value={applicationDetails.email} onChange={e => setApplicationDetails({ ...applicationDetails, email: e.target.value })} type="text" placeholder="Email ID" className="w-full border mb-3 rounded px-3 py-2" />
                  <input value={applicationDetails.qualification} onChange={e => setApplicationDetails({ ...applicationDetails, qualification: e.target.value })} type="email" placeholder="Qualification" className="w-full border mb-3 rounded px-3 py-2" />
                  <input value={applicationDetails.phone} onChange={e => setApplicationDetails({ ...applicationDetails, phone: e.target.value })} type="tel" placeholder="Phone" className="w-full border mb-3 rounded px-3 py-2" />
                  {/* Cover Letter */}
                  <div className='col-span-2'>
                    <textarea value={applicationDetails.coverLetter} onChange={e => setApplicationDetails({ ...applicationDetails, coverLetter: e.target.value })} placeholder="Cover Letter" rows="4" className="w-full border rounded px-3 py-2 ">
                    </textarea></div>
                  {/* File Upload */}
                  <div className='col-span-2'>
                    <label htmlFor="">Resume</label>
                    <input key={fileKey} onChange={e => setApplicationDetails({ ...applicationDetails, resume: e.target.files[0] })} type="file" id='' name='' className='w-full border rounded file:p-1 file:bg-gray-200 ' />
                  </div>
                </div>


                {/* Buttons */}
                <div className="flex justify-end space-x-4 pt-4">
                  <button onClick={handleReset} type="reset" className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded">
                    Reset
                  </button>
                  <button onClick={handleSubmitApplication} type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
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

export default Careers
