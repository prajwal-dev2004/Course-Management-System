import React, { useState } from 'react'
import toast from "react-hot-toast";
import axios from 'axios'

import CourstList from './CourstList';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  let [user, setuser] = useState({
    name: " ",
    email: " ",
    password: "",
    conformpassword: "",
    gender: " "
  })
  let navigate=useNavigate();

  const handleChange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password != user.conformpassword) {
      alert("password is not match");
      return;
    }

    let newuser = {
      name: user.name,
      email: user.email,
      password: user.password,
      gender: user.gender,
      role: "user"
    }

    let res = await axios.post("http://localhost:3000/users", newuser);

    if (res.status == 201) {
      toast.success("successfully signup")

      setuser({
        name: "",
        email: "",
        password: "",
        conformpassword: "",
        gender: ""
      });
      setTimeout(()=>{
        navigate("/login")
      },1000)
    } else {
      toast.error("signup failed")
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            SIGN UP
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>

              <input
                type="text"
                value={user.name}
                name="name"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                value={user.email}
                name="email"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>

              <input
                type="password"
                value={user.password}
                name="password"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                value={user.conformpassword}
                name="conformpassword"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-3">
                Gender
              </label>

              <div className="flex items-center gap-6">

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="male"
                    name="gender"
                    onChange={handleChange}
                    checked={user.gender === "male"}
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span className="text-gray-700">Male</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="female"
                    name="gender"
                    onChange={handleChange}
                    checked={user.gender === "female"}
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span className="text-gray-700">Femail</span>
                </label>

              </div>
            </div>

            <button
              type="sumbit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md"
            >
              Sumbit
            </button>

          </form>

        </div>

      </div>
    </>
  )
}

export default SignUp