import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { jobContext } from '../../contextAPI/ContextShare'
import { addJobAPI, getAllJobAPI } from '../../services/allAPI'

const AddJob = () => {
  const { addJobResponse, setAddJobResponse } = useContext(jobContext)
  const [addJobModal, setAddJobModal] = useState(false)
  const [newJob, setNewJob] = useState({ title: "", location: "", jobType: "", salary: "", qualification: "", experience: "", description: "" })


  const handleReset = async () => {
    setNewJob({ title: "", location: "", jobType: "", salary: "", qualification: "", experience: "", description: "" })
  }

  const handleAddJob = async (e) => {
    e.preventDefault()
    const token = sessionStorage.getItem("token")
    const { title, location, jobType, salary, qualification, experience, description } = newJob
    if (!title || !location || !jobType || !salary || !qualification || !experience || !description) {
      toast.info("Please fill the form completely")
    } else if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      //api call
      try {
        const result = await addJobAPI(newJob, reqHeader)  //first body , header
        if (result.status == 200) {
          //alert
          toast.success("Current Job added succesfully")
          //reset data
          handleReset()
          //share data
          setAddJobResponse(result.data)
          //close modal
          setAddJobModal(false)
        } else if (result.status == 409) {
          toast.warning(result.response.data)
          handleReset()
        } else {
          toast.error("Something went wrong")

        }
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong")
      }
    }
  }

  return (
    <div>
      <button onClick={() => setAddJobModal(true)} className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-lg shadow-sm transition"> <FontAwesomeIcon icon={faPlus} /> Add Job </button>
      {
        addJobModal &&
        <div>
          <div className="fixed inset-0 bg-gray-500/75 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
              {/* Header */}
              <div className="bg-slate-900 text-white flex justify-between items-center p-3 rounded-t-lg">
                <h1 className="text-lg font-semibold">Application Form</h1>
                <button onClick={() => setAddJobModal(false)}>
                  <FontAwesomeIcon icon={faXmark} className="text-white hover:text-slate-300" />
                </button>
              </div>

              {/* Form */}
              <form>
                <div className="p-5 space-y-5">
                  <input value={newJob.title} onChange={e => setNewJob({ ...newJob, title: e.target.value })} type="text" placeholder="Job Title" className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none" />
                  <input value={newJob.location} onChange={e => setNewJob({ ...newJob, location: e.target.value })} type="text" placeholder="Location" className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none" />
                  <input value={newJob.jobType} onChange={e => setNewJob({ ...newJob, jobType: e.target.value })} type="text" placeholder="Job Type" className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none" />
                  <input value={newJob.salary} onChange={e => setNewJob({ ...newJob, salary: e.target.value })} type="text" placeholder="Salary" className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none" />
                  <input value={newJob.qualification} onChange={e => setNewJob({ ...newJob, qualification: e.target.value })} type="text" placeholder="Qualification" className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none" />
                  <input value={newJob.experience} onChange={e => setNewJob({ ...newJob, experience: e.target.value })} type="text" placeholder="Experience" className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none" />
                  <textarea value={newJob.description} onChange={e => setNewJob({ ...newJob, description: e.target.value })} placeholder="Description" rows="3" className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none" ></textarea>

                  {/* Buttons */}
                  <div className="flex justify-end gap-3 pt-2">
                    <button onClick={handleReset} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                      Reset
                    </button>
                    <button onClick={handleAddJob} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                      Add
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      }
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
    </div>
  )
}

export default AddJob
