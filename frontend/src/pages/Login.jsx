
import axios from 'axios'
import React, { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { userdetails } from '../context/UserContex'

const Login = () => {
  let navigate = useNavigate();
  let{logindata}=useContext(userdetails)

  let [login, setLogin] = useState({
    name: "",
    password: "",
    role: ""
  })

  let { name, password, role } = login;

  let handelChange = ((e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  })

  let handleSubmit = (async (e) => {
    e.preventDefault();

    let res = await axios.get(
      `http://localhost:3000/users?name=${name}&password=${password}&role=${role}`
    )

    if (res.status == 200 && res.data.length > 0) {
      toast.success("login sucess")
      logindata(res.data[0])
      
      
      navigate("/")
    } else {
      toast.error("login failed")
    }
  })

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
        >

          <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Login
          </h1>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter the name"
              name="name"
              value={name}
              onChange={handelChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter the password"
              name="password"
              value={password}
              onChange={handelChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Role */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-3">
              Role
            </label>

            <div className="flex gap-6">

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  onChange={handelChange}
                  checked={role === "user"}
                  className="w-4 h-4 accent-blue-600"
                />
                <span className="text-gray-700">User</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  onChange={handelChange}
                  checked={role === "admin"}
                  className="w-4 h-4 accent-blue-600"
                />
                <span className="text-gray-700">Admin</span>
              </label>

            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>

        </form>
      </div>
    </>
  )
}

export default Login
