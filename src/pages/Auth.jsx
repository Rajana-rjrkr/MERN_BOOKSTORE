import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { googleLoginAPI, loginAPI, registerAPI } from '../services/allAPI'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { userAuthContext } from '../contextAPI/AuthContext'


const Auth = ({ register }) => {
  const { role, authorisedUser,setAuthorisedUser } = useContext(userAuthContext)
  const navigate = useNavigate()
  const [viewPasswordStatus, setViewPasswordStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" })

  // console.log(userDetails);


  //register
  const handleRegister = async () => {
    // console.log('Inside handleRegister');
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.info('Please fill the form completely')
    } else {
      // toast.success('Proceed to API call')
      try {
        const result = await registerAPI(userDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success('Registered Successfully. Please Login!')
          setUserDetails({ username: "", email: "", password: "" })
          navigate('/login')
        } else if (result.status == 409) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
          navigate('/login')
        } else {
          console.log(result);

        }
      } catch (err) {
        console.log(err);

      }
    }
  }

  //login
  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info("Please fill the form completely.")
    } else {
      try {
        const result = await loginAPI(userDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success("Login Succesfully..")
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          setAuthorisedUser(true)
          setTimeout(() => {
            if (result.data.user.role == "admin") {
              navigate('/admin-dashboard')
            } else {
              navigate('/')
            }
          }, 2500);
        } else if (result.status == 401) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        } else if (result.status == 404) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        } else {
          toast.error("Something went wrong")
          setUserDetails({ username: "", email: "", password: "" })
        }
      } catch (err) {
        console.log(err);

      }
    }
  }

  const handleGoogleLogin = async (credentialResponse) => {
    console.log("Inside handleGoogleLogin");
    const credential = credentialResponse.credential
    const details = jwtDecode(credential)
    console.log(details);
    try {
      const result = await googleLoginAPI({ username: details.name, email: details.email, password: "googlepswd", profile: details.picture })
      console.log(result);
      if (result.status == 200) {
        toast.success("Login Successfully")
        sessionStorage.setItem("user", JSON.stringify(result.data.user))
        sessionStorage.setItem("token", result.data.token)
        setTimeout(() => {
          if (result.data.user.role == "admin") {
            navigate('/admin-dashboard')
          } else {
            navigate('/')
          }
        }, 2500)
      } else {
        toast.error("Something went wrong")
      }
    } catch (err) {
      console.log(err);

    }

  }

  return (
    <>
      <div className='w-full min-h-screen bg-cover flex-col bg-center flex justify-center items-center bg-[url(/login5.jpg)]'>
        <div className="p-5 sm:p-10">

          <h1 className="text-3xl text-center font-bold text-white drop-shadow-lg">BOOKSTORE</h1>

          {/* Auth Card  */}
          <div className="bg-black text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center my-5 w-96 max-w-full">

            {/* login icon  */}
            <div style={{ width: '100px', height: '100px', borderRadius: '50%' }} className="border mb-5 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} className='text-3xl' />
            </div>

            {/* heading  */}
            <h1 className='text-2xl font-semibold'>{register ? "Register" : "Login"}</h1>

            {/* form  */}
            <form className='my-5 w-full'>
              {
                register &&
                <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='User Name' className='bg-white text-black p-2 w-full rounded placeholder-gray-500 mb-3' />
              }
              <input value={userDetails.email} onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} type="email" placeholder='Email ID' className='bg-white text-black p-2 w-full rounded placeholder-gray-500 mb-3' />
              <input value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type={viewPasswordStatus ? "text" : "password"} placeholder='Password' className='bg-white text-black p-2 w-full rounded placeholder-gray-500 mb-3' />
              {
                !viewPasswordStatus ?
                  <FontAwesomeIcon icon={faEye} onClick={() => setViewPasswordStatus(!viewPasswordStatus)} style={{ marginLeft: "-30px" }} className='text-gray-400 cursor-pointer' />
                  :
                  <FontAwesomeIcon icon={faEyeSlash} onClick={() => setViewPasswordStatus(!viewPasswordStatus)} style={{ marginLeft: "-30px" }} className='text-gray-400 cursor-pointer' />
              }
              <div className="flex justify-between mb-5">
                <p className='text-sm text-orange-300'>*Never share your password with others</p>
                <button className='text-sm underline'>Forgot Password</button>
              </div>

              {/* submit  */}
              <div className="text-center">
                {
                  register ?
                    <button onClick={handleRegister} type='button' className='bg-green-700 p-2 w-full rounded'>Register</button>
                    :
                    <button onClick={handleLogin} type='button' className='bg-green-700 p-2 w-full rounded'>Login</button>
                }
              </div>

              <div className='my-5 text-center'>
                {/* Google Authentication */}
                <div className="text-center">
                  {!register && <p className='mb-2'>---------------------------------or------------------------------------</p>}
                  {
                    !register &&
                    <div className='my-4'>
                      <GoogleLogin
                        onSuccess={credentialResponse => {
                          console.log(credentialResponse);
                          handleGoogleLogin(credentialResponse)
                        }}
                        onError={() => {
                          console.log('Login Failed');
                        }}
                      />
                    </div>
                  }
                </div>
                {
                  register ?
                    <p className='text-blue-600'>Are your already a user? <Link to={'/login'} className="underline ms-5">Login</Link> </p>
                    :
                    <p className='text-blue-600'>New Here? <Link to={'/register'} className="underline ms-5">Register</Link> </p>
                }
              </div>
            </form>
          </div>
        </div>
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
    </>
  )
}

export default Auth
